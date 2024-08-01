import Layout from '@/Layout/Layout'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import React from 'react'
import oem from "@/assets/images/oem.png"
import Hero from "@/Component/Hero"
import Link from 'next/link'

function Index() {
    return (
        <Layout>
            {/* Hero Section starts */}
            <Hero heading="Solutions for Manufacturers and OEMs" title="Our Customer Care Centre operates on all business days (Monday to Saturdays)." src={oem.src} alt="OEM Image" />
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="techWrp oembg" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                            <h1>You Focus on Product Innovation, Manufacturing, Marketing & Sales</h1>
                            <div>
                                <p style={{ textAlign: "center" }}>
                                    While You Innovate, Manufacture, Market and Sell, we &quot;Earn Extra for You&quot; by Innovative Warranty Programs.
                                </p>
                                <p style={{ textAlign: "center" }}>
                                    We understand that for you as a manufacturer, providing warranty service is your obligation but not a core activity.
                                </p>
                                <div>
                                    <p>To generate more revenues and margins for you; we create &amp; administer:</p>
                                    <ListGroup numbered>
                                        <ListGroupItem>
                                            Nationwide Warranty Services.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Extended Warranty and other After-Warranty Programs for your customers.
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                                <p style={{marginTop:"1.5rem"}}>Your Costs are &ldquo;Capped with NO RISK to YOU&rdquo;. Total Assurance is Guaranteed.</p>
                                <p><b>While we do all this, you continue to focus on your core activity i.e. Product Innovation, Manufacturing, Marketing & Sales.</b></p>
                                <p>The additional revenues earned are risk free with positive cash flow and minimal additional burden on your resources.</p>
                                <p><b>We also provide from Accidental Damage Protection (ADP) and VAS.</b></p>
                                <p>Let&apos;s discuss your business plans to create most suited Service Solutions for you.</p>
                                <button className='buttonOne'>Partner With Us</button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default Index
