import Layout from '@/Layout/Layout'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import React from 'react'
import why from "@/assets/images/why.png"
import Hero from "@/Component/Hero"

function index() {
    return (
        <Layout>
            {/* Hero Section starts */}
            <Hero heading="Why Choose Infinity" title="Indian market is complex, technology is changing at a fast pace, customer’s service needs are going through a dramatic change and hence, there is Infinity Assurance Solutions." src={why.src} alt="Technology   Image" />
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="whyWrp whybg" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                            <h1>Why Choose Infinity</h1>
                            <p>Infinity is Promoted and Managed by India&#39;s Top Management Professionals in After-Sales-Services delivery for technology products.We take over the challenges of our clients and create partnering solutions to meet their goals and business objectives.</p>
                            <p>Our solutions are flexible, customizable, easy to understand and simple to manage. The objective is to differentiate break fix model to ownership of the product till the customer needs services. The customer benefits with lower costs, backed by the professionals of the industry and comprehensive solutions. We provide solutions to new products that the customer buys but can even cover their existing products; subject to specific eligibility terms & conditions.</p>
                            <p>The service products are designed in such a way that they can be customized as standalone products or bundled with existing warranty covers by the Manufacturers & Retailers alike.</p>
                            <p>We design and provide the right mix of Warranty, Extended warranty, Post-warranty and Value Added</p>
                            <div>
                                <p style={{ textAlign: "center", fontSize: "24px" }}>
                                    Service Solutions that will help your company to
                                </p>
                                <ListGroup numbered>
                                    <ListGroupItem>
                                        Increase top line.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Increase bottom line.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Reduce liability.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Free cash reserves.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Improve marketability of products.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Create Stronger Brand.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Differentiate from the competition.
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Enhance customer satisfaction.
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