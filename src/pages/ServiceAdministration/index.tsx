import Layout from '@/Layout/Layout'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import React from 'react'
import service from "@/assets/images/service.png"
import Hero from "@/Component/Hero"

function index() {
    return (
        <Layout>
            {/* Hero Section starts */}
            <Hero heading="Warranty Service Administration" title="We specialise in Warranty Service Administration by providing Customised End to End Solutions." src={service.src} alt="Warranty Service Administration Image" />
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="techWrp admbg" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                            <h1>End to End Customer Service Delivery</h1>
                            <div>
                                <p style={{ textAlign: "center", fontSize: "24px" }}>
                                    We specialise in Warranty Service Administration by providing Customised End to End Solutions through
                                </p>
                                <ListGroup numbered>
                                    <ListGroupItem>
                                        Customer Care Centre.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Pan India Service Centre Network of OEM Authorized Service enters.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        End to end coordination with all stakeholders.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Need based reporting.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        State of the art CRM tools.
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