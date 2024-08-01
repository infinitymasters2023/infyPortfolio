import Layout from '@/Layout/Layout'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import React from 'react'
import consumer from "@/assets/images/consumer.png"
import Hero from "@/Component/Hero"
import Link from 'next/link'
import s2 from "@/assets/images/s2.png"
import cons1 from "@/assets/images/cons1.png"
import cons2 from "@/assets/images/cons2.png"
import cons3 from "@/assets/images/cons3.png"

function index() {
    return (
        <Layout>
            {/* Hero Section starts */}
            <Hero heading="Solutions for Consumers" title="We have greate solutions for your Warranty and Extended Warranty needs." src={consumer.src} alt="Solutions for Consumers Image" />
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="consumerCardWrp">
                            <div className="consumerCard" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000">
                                <div className="consImgWrp">
                                    <img src={cons1.src} alt="consumer image one" />
                                </div>
                                    <p>InfyShield<br />Extended Warranty</p>
                            </div>
                            <div className="consumerCard" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1500"> 
                                <div className="consImgWrp">
                                    <img src={cons2.src} alt="consumer image two" />
                                </div>
                                    <p>InfyShield<br />Extended Warranty</p>
                            </div>
                            <div className="consumerCard" data-aos="fade-up" data-aos-offset="100" data-aos-duration="2000">
                                <div className="consImgWrp">
                                    <img src={cons3.src} alt="consumer image three" />
                                </div>
                                    <p>InfyShield<br />Extended Warranty</p>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div className="techWrp consumerbg" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                            <h1>Solutions that Work</h1>
                            <div>
                                <p>
                                    We have GREAT SOLUTIONS for your Warranty & Extended Warranty needs.
                                </p>
                                <p>Finally, InfyShield is here… If you have purchased any product with standard OEM warranty, you can now avail extended warranty through our flagship program, InfyShield.</p>
                                <p>Our InfyShield covers all products including PC, Laptop, Servers, Smartphones, Tablets, Mobile Phones, Printers, Scanners, Multi-function Devices, Fax Machines, Copiers, TVs, Home Theatres, Audio Video Products, Refrigerators, Washing Machines, Air Conditioners, Microwave Ovens, Digital Cameras, DSLR Cameras, UPS and Inverters amongst many other products.</p>
                                <p>InfyShield for all products are priced very low so that you can avail it without much thought.InfyShield ensures our consumers have Total Peace of Mind, Ease of Taking Service and almost lifetime cover for your products.InfyShield also offers Accidental Damage Protection (ADP) / Accidental Damage Handling (ADH).</p>
                                <p>InfyShield comes with prescribed eligibility criteria.</p>
                                <p>Please visit <Link href="https://www.infyshield.com/" target='_blank' style={{ textDecoration: "none" }}>InfyShield</Link> for more details and buying your InfyShield.</p>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "4rem" }} data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1200">
                            <h2>An overlook at how it works</h2>
                            <div className="s2">
                                <img src={s2.src} alt="" />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default index