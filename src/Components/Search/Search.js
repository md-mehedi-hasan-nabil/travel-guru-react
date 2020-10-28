import React from 'react';
import { Col, Container, Row, CardGroup, Card } from 'react-bootstrap';
import './Search.css';
import Rectangle_26 from '../../Image/Rectangle_26.png';
import Rectangle_27 from '../../Image/Rectangle_27.png';
import Rectangle_28 from '../../Image/Rectangle_28.png'

const Search = () => {
    return (
        <Container className="mt-4 pt-5">
            <Row>
                <Col>
                    <h3>Stay in Cox's Bazar</h3>
                    <Row>
                        <Col md={4}>
                            <Card.Img variant="top" src={Rectangle_26} className="my-4"/>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title className="m-0 p-0">Light bright stylish apt & safe peacefull</Card.Title>
                                <Card.Text>
                                4 guests 2 bedrooms 2 beds 2 baths wif air conditioning kitchen Cancellation fexibility available<br/>
                                <strong>$34/night</strong>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Card.Img variant="top" src={Rectangle_27} className="my-4"/>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title className="m-0 p-0">Apartment in Lost Panorama</Card.Title>
                                <Card.Text>
                                4 guests 2 bedrooms 2 beds 2 baths wif air conditioning kitchen Cancellation fexibility available<br/>
                                <strong>$52/night</strong>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Card.Img variant="top" src={Rectangle_28} className="my-4"/>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title className="m-0 p-0">AR Lounge & Pool</Card.Title>
                                <Card.Text>
                                4 guests 2 bedrooms 2 beds 2 baths wif air conditioning kitchen Cancellation fexibility available<br/>
                                <strong>$44/night</strong>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Col>
                <Col className="mt-5 pt-3 map" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239550783!2d90.27923903194379!3d23.780887454503112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1603864403609!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style={{'border':0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;