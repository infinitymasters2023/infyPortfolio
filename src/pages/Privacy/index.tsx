import Layout from '@/Layout/Layout'
import { Container } from 'reactstrap'
import React from 'react'
import privacy from "@/assets/images/privacy.png"
import Hero from "@/Component/Hero"

function index() {
    return (
        <Layout>
            {/* Hero Section starts */}
            <Hero heading="Privacy Policy" title="We value your privacy and will always be open and honest about the information we gather, use, and distribute about you. This policy is meant to assist you in comprehending" src={privacy.src} alt="Privacy Policy Image"/>
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="PrivacyWrp" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                           <p>During the course of our interactions with you including but not limited to while making enquiries, making purchases, amending purchases requests, product registration, taking service, making claims etc. you will be sharing certain information including your contact details like email addresses, contact number, addresses, product details, certain pointed information during our surveys, feedback sessions etc. This information may be collected through Web Forms on our websites, applications, emails, telephonic interactions, written documents etc.</p>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    )
}

export default index