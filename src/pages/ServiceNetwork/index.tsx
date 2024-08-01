import Layout from '@/Layout/Layout'
import { Container } from 'reactstrap'
import React from 'react'
import serviceCenter from "@/assets/images/serviceCenter.png"
import Hero from "@/Component/Hero"
import Link from 'next/link'

function index() {
    return (
        <Layout>
            {/* Hero Section starts */}
            <Hero heading="Service Centre Network" title="Our services are backed by an ever increasing All India network of Authorized Service Partners for all products." src={serviceCenter.src} alt="Service Centre Network Image" />
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="techWrp servicebg" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                            <h1>Our Nationwide Service Centre Network</h1>
                            <div>
                                <p>
                                    Our services are backed by an ever increasing All India network of Authorized Service Partners for all products.Our service partners are technically very competent, regularly trained by the OEMs, audited and ranked to deliver excellence of services through continual improvement in processes and technology support.
                                </p>
                                <p>The customer approaches our Technical centre for reporting any defect. The complaint is recorded and the nearest & most competent service centre is informed to take next service actions.</p>
                                <p>Currently, we support through our 300+ city coverage.</p>
                                <p>If you are an authorised Service Centre and wants to be our partner, Please <Link href="ContactUs" style={{textDecoration:"none"}}>Contact Us</Link>.</p>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default index