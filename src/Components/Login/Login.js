import React, { useContext, useState } from 'react';
import './Login.css';
import {  Button, Form, Container, Row, Col, Carousel } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import fbIcon from '../../Icon/fb.png';
import googleIcon from '../../Icon/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import Header from '../Header/Header';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  });
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  const FaceBookProvider = new firebase.auth.FacebookAuthProvider();
  const handleSingIn = () => {
    firebase.auth().signInWithPopup(GoogleProvider)
    .then((res) => {
      const {displayName, email, photoURL} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      setUser(signedInUser);
      setLoggedInUser(signedInUser);
      history.replace(from);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage);
    });
  }

  const handleFbSingIn = () => {
    firebase.auth().signInWithPopup(FaceBookProvider)
    .then((res) => {
      const token = res.credential.accessToken;
      const user = res.user;
      const {displayName, email, photoURL} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      setUser(signedInUser);
      setLoggedInUser(signedInUser);
      history.replace(from);
      console.log(signedInUser);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      alert(error.message, error.code, error.email);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then (res => {
        const newUserInfo = {...user};
        newUserInfo.error = 'Account Create Successfully';
        setUser(newUserInfo);        
        console.log(res);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        const newUserInfo = {...user};
        newUserInfo.error = errorMessage;
        setUser(newUserInfo);
        console.log(errorCode, errorMessage);
      });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = 'Login Successfully';
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        const newUserInfo = {...user};
        newUserInfo.error = errorMessage;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
      });
    }
  }
  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password' && event.target.value !== '') {
      isFieldValid = (event.target.value.length > 6) && (/\d{1}/.test(event.target.value));
      if (!isFieldValid && newUser) {
        alert('Password is too short and using numbers and letters');
      }
    }
    if (isFieldValid) {
      const newUserInfo = {...user};
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }

  const checkPassword = () => {
    let formBasicPassword = document.getElementById('formBasicPassword').value;
    let formBasicConfirmPassword = document.getElementById('formBasicConfirmPassword').value;
    if (formBasicPassword !== formBasicConfirmPassword && formBasicPassword !== '') {
      alert("Password not match");
    }
  }

    return (
        <Container className="mt-5 pt-5">
            <Row className="w-50 mx-auto">
                <Col className="border px-3 py-5">
                    { newUser  ? <h3 className="mt-0 text-center">Create an account</h3> : <h3 className="mt-0 text-center">Login</h3>}
                    <Form onSubmit={handleSubmit}>
                        { newUser && <Form.Group controlId="formBasicName">
                            <Form.Control type="text" placeholder="Enter Name" name="name" onBlur={handleBlur} required />
                        </Form.Group>}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Email" name="email" onBlur={handleBlur} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Enter Password" name="password" onBlur={handleBlur} required />
                        </Form.Group>
                        {
                            newUser && <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Control type="password" placeholder="Confirm Password" name="ConfirmPassword" onBlur={checkPassword} required />
                            </Form.Group> 
                        }
                        {
                            newUser ? <Button type="submit" className="text-dark w-100">Create an account</Button> :
                            <Button type="submit" className="text-dark w-100">Login</Button>
                        }
                        
                        <div className="text-center mt-2">Create an account? 
                            <input type="checkbox" className="my-3" name="newUser" onChange={() => setNewUser(!newUser)} /><span>Sign up</span>
                        </div>
                    </Form>
                    {
                      <div className="alert alert-light m-0 text-center" role="alert">
                          <strong>{ user.error }</strong>
                      </div>
                    }
                </Col>
                <Col md={12} className="text-center">
                  <button className="btn border signInBtn" type="button" onClick={handleFbSingIn}><img src={fbIcon} alt="icon" />Continue with Facebook</button> <br />
                  <button className="btn border signInBtn" type="button" onClick={handleSingIn}><img src={googleIcon} alt="icon" />Continue with Google</button>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;