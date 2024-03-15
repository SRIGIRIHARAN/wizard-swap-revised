import React from 'react';
import './Home.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ValueCard from '../../components/HomeCard/ValueCard';
import WtnCard from '../../components/HomeCard/WtnCard';

const Home = () => {
  return (
    <div className="home sec-even">
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="home-head">
                        <h3>Wizard Swap</h3>

                        <p>Wateenswap The #1 AMM and yield farm on Binance Smart Chain.</p>
                    </div>
                </Col>
            </Row>
        </Container>

        <div className="home-body">
            <Container>
                <Row md={1} className="margin-b-50">
                    <Col md={12} lg={6} xl={5}>
                        <div className="syrup-form">
                            <div className="syrup-card">
                                <h2>Syrup Pools</h2>
                                <div className="syrup-split">
                                    <Row xs={1} lg={1}>
                                        <Col lg={6}>
                                            <div className="stake">
                                                <h4>WTN to Stake</h4>
                                                <Button variant="light">Locked</Button>
                                            </div>
                                            {/* <div className="split-line"></div> */}
                                        </Col>
                                        <Col lg={6}>
                                        <div className="stake">
                                        <h4>WTN to Stake</h4>
                                        <Button variant="dark">Locked</Button>
                                    </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <Button variant="primary">Unlock Wallet</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <div className="earn">
                    <Row lg={3} className="margin-b-50">
                        <Col lg={4}>
                            <p>Earn WTN in Farms</p>
                        </Col>

                        <Col lg={4}>
                            <p>Earn Token in Pools</p>
                        </Col>

                        <Col lg={4}>
                            <p>Lottery WTN for grabs</p>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Container>
                <Row md={1} lg={2}>
                    <Col lg={6}>
                    <WtnCard
                        title="WTN Stats" 
                        value="$78220.66583273" 
                        description="Total WTN Supply"
                    />
                    </Col>
                    <Col lg={6}>
                    <ValueCard 
                        title="Total Value Locked" 
                        value="$ 2.40000000M" 
                        description="Across all LPs" 
                    />
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Home