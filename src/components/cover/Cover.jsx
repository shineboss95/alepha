import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import './Cover.css'
import Logo from '../../store/logo/thicker-neon.png'

function Cover() {
    return (
        <div className="cover-box">
            <Container>
                <div className="cover-background">
                    <img src={Logo} className="round-neon" />
                    <div className="cover-header">Be a DeFi Chef with Sushi.</div>
                    <p className="cover-description">
                        Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, 
                        community driven platform. Welcome home to DeFi.
                    </p>
                    <div className="cover-button">
                        <Button href="/stack" className="colored-button">Enter App</Button> 
                        <Button className="learn-button">Learn More</Button> 
                    </div>
                </div>
                <div className="cover-information-boxes">
                       <Row>
                           <Col>
                                <div className="round-box">
                                    <h2>$6.70</h2>
                                    <p>$SUSHI Price</p>
                                </div>
                           </Col>
                           <Col>
                                <div className="round-box">
                                    <h2>$6.70</h2>
                                    <p>$SUSHI Price</p>
                                </div>
                           </Col>
                           <Col>
                                <div className="round-box">
                                    <h2>$6.70</h2>
                                    <p>$SUSHI Price</p>
                                </div>
                           </Col>
                           <Col>
                                <div className="round-box">
                                    <h2>$6.70</h2>
                                    <p>$SUSHI Price</p>
                                </div>
                           </Col>
                       </Row>
                    </div>
            </Container>
        </div>
    )
}

export default Cover
