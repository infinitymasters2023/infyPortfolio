import Layout from '@/Layout/Layout'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import React from 'react'
import tech from "@/assets/images/technology.png"
import Hero from "@/Component/Hero"

function index() {
    return (
        <Layout>
            {/* Hero Section starts */}
            <Hero heading="Our Technology" title="We use technology solutions that are proven, mature and customized to each client needs." src={tech.src} alt="Technology   Image" />
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="techWrp techbg" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                            <h1>Our Technology</h1>
                            <p>We excel on being technology players. We use technology solutions that are proven, mature and customized to each client needs.The solution covers Sales, Registration and Service Delivery which are all automated.Each of our client can opt for Digital online sales fulfilment instead of “Stocking Physical Service Packs”. The solution provides real time sales, commission, margins clarity and reports based on Salesmen, Product, Partner, Brand, Period, Region… whatever you need.</p>
                            <p>Registration process is easy and seamless.Our claim system manages end to end process which is transparent and easy to follow.Entire solution is web based and each key user is provided with a secure Login ID and password.Processes are standardized to ensure efficiency, consistency and transparency.Our system is open for integration with client&#39;s sales & service systems.</p>
                            <div>
                                <p style={{ textAlign: "center", fontSize: "24px" }}>
                                    Basic features are
                                </p>
                                <ListGroup numbered>
                                    <ListGroupItem>
                                        Works seamlessly for all our clients including OEMs, Retailers, eTailers, Consumers, Affiliates etc.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Covers Pre-sales, Sales, Registration, Partner Management, Customer Care Centre, Field Service Delivery and Service Administration; all under single umbrella.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Call History and Product History
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Transactions can be done for individual products / consumers or uploaded through pre-defined format in simplest formats like Excel
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Track Warranty and Extended Warranty Status of your product in real time.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Our OEM clients can see consolidated status of pending calls, closed calls, parts consumed, Service levels achieved, re-repair etc.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Claims adjudication
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default index