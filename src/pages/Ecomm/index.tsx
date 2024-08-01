import Layout from '@/Layout/Layout'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import React from 'react'
import ecomm from "@/assets/images/ecomm.png"
import Hero from "@/Component/Hero"

function Index() {
    return (
        <Layout>
            {/* Hero Section starts */}
            <Hero heading="Solutions for E-Commerce and Hyperlocal Marketplaces" title="compete with Brick & Mortar Retailers who sell Face to Face; distinct advantage to them." src={ecomm.src} alt="ECommerce Image" />
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="techWrp ecommbg" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                            <h1>We Hunt Customers for you</h1>
                            <div>
                                <p>
                                    You compete with Brick & Mortar Retailers who sell Face to Face. distinct advantage to them. Your customers are always hungry for Deals and Offers. InfyShield is the &quot;Perfect Value Add&quot; to your customers.
                                </p>
                                <p><b>The Trust factor that InfyShield brings-in is unmatched. Give your clients which they will cherish. Retain them for longer.</b></p>
                                <p>We have proven record of creating customised Deal Based / Product Based offerings for our clients. We add to your GMV as well as Net Bottomline substantially.</p>
                                <p><b>Just share your interest with us and we will be with you!</b></p>
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
