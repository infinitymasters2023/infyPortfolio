import Layout from '@/Layout/Layout'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import React from 'react'
import support from "@/assets/images/support.png"
import Hero from "@/Component/Hero"
import Link from 'next/link'

function index() {
    return (
        <Layout>
            {/* Hero Section starts */}
            <Hero heading="Customer Care Centre" title="Our Customer Care Centre operates on all business days (Monday to Saturdays)." src={support.src} alt="Service Centre Network Image" />
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="techWrp" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                            <h1>How Do We Do it</h1>
                            <div>
                                <p>
                                    Our Customer Care Centre operates on all business days i.e. Monday to Saturdays; all weeks.Our Customer Service Executives are trained, certified and monitored to provide Quality Customer Service.Our Services are customised suiting your business needs so that you can focus on your core activities while we take care of your service needs.
                                </p>
                                <div>
                                    <p style={{ textAlign: "center", fontSize: "24px" }}>
                                        Call Centre Support features
                                    </p>
                                    <ListGroup numbered>
                                        <ListGroupItem>
                                            6 days a week, 8 Hours a day
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Optional Toll Free customer service through Private and client branded lines.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            80% of calls answered within 20 seconds.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Less than 1% abandonment rate.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Bilingual staff - Hindi & English.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Custom reporting.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Claims adjudication & payment.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Service dispatching.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Very high customer problems resolution at first connect.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Voice and email support.
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                                <p style={{marginTop:"2rem",textAlign:"center"}}>Continual and extensive training of our Customer Service Executives ensure Quality Assurance and customer satisfaction.</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default index