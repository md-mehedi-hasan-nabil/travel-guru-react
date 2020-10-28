import React from 'react';
import './Home.css';
import Sajek from './Sajek.png';
import Sreemongol from './Sreemongol.png';
import sundorbon from './sundorbon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Nav, Form, FormControl, Container, Image, Row, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <Container fluid>
      <Container>
        <Row>
            <Col>
              <h1>COX'S BAZAR</h1>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit dignissimos consequatur soluta cupiditate totam, itaque, repellat vitae sunt at quae rem quam libero tempora!</p>
              <Link to="/booking"><button className="btn">Booking</button></Link>
            </Col>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-50 mx-auto" src={Sajek} alt="First slide" />
                  <Carousel.Caption>
                    <h3>COX'S BAZAR</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item> <img className="d-block w-50 mx-auto" src={Sreemongol} alt="Third slide" />
                  <Carousel.Caption>
                    <h3>SREEMANGAL</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-50 mx-auto" src={sundorbon} alt="Third slide" />
                  <Carousel.Caption>
                    <h3>SUNDARBANS</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
        </Row>
      </Container>
    </Container>
    );
};

export default Home;