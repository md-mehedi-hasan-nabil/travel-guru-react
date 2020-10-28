import React from 'react';
import './Booking.css';
import {  Button, Form, Container, Row, Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <Container fluid>
            <Container>
                <Row className="booking">
                    <Col>
                        <h1>COX'S BAZAR</h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit dignissimos consequatur soluta cupiditate totam, itaque, repellat vitae sunt at quae rem quam libero tempora!</p>
                        <Link to="/booking"><button className="btn">Booking</button></Link>
                    </Col>
                    <Col>
                        <Form className="bg-light p-4 w-75 mx-auto text-dark radius">
                            <Form.Group controlId="name">
                                <Form.Label>Origin</Form.Label>
                                <Form.Control type="text" placeholder="Enter place" />
                            </Form.Group>
                            <Form.Group controlId="name">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" placeholder="Enter place" />
                            <div style={{display: 'flex'}}>
                                <Form.Group controlId="date">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group controlId="date">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </div>
                            <Link to="/search"><Button type="submit" className="text-dark w-100">Start Booking</Button></Link>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
        </Container>
    </Container>
    );
};

export default Booking;