import Layout from '@/Layout/Layout';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import React from 'react';
import sale from '@/assets/images/sale.png';
import Hero from '@/Component/Hero';

function Index() {
    return (
        <Layout>
            {/* Hero Section starts */}
            <Hero 
                heading="Modern Retail - LFRs and Retail Chains" 
                title="When your Margins are Shrinking, Competition is Fierce, We&amp;#39;ll Help You to Win..." 
                src={sale.src} 
                alt="Service Centre Network Image" 
            />
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="techWrp salebg" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                            <h1>Stay Focused - Just Sell & Sell</h1>
                            <div>
                                <p>
                                    You operate on wafer-thin margins, operations costs are atrociously high and competition is fierce.
                                </p>
                                <p>You definitely need us…</p>
                                <p>We specialise in Helping you with Extra Margins per unit sold.</p>
                                <p>&quot;InfyShield&quot; is our &ldquo;Proven Winning Formula&rdquo; for you!</p>
                                <div>
                                    <p style={{ textAlign: "center", fontSize: "24px" }}>
                                        We create customized service plans, service programs and manage them for you…
                                    </p>
                                    <p style={{ textAlign: "center" }}>
                                        and our program covers every technology product and appliance that you sell with a focused approach such that every Service Plan is
                                    </p>
                                    <ListGroup numbered>
                                        <ListGroupItem>
                                            Easy for You to Sell.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Easy for the Customer to Understand.
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            Easy for us to Manage.
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                                <p style={{ marginTop: "2rem" }}>
                                    InfyShield is sold as Bundled as well as Standalone Service plan wherein your customer receives more than the standard warranty from the product manufacturer. In turn, you get extra cash adding to top-line as well as bottom-line.
                                </p>
                                <p>
                                    and Not just extra revenues and profits, you also get a long-term loyal customer; retained with you for additional sales over the longevity of the products.
                                </p>
                                <p>
                                    Accidental Physical & Liquid Damage Protection & Value Added Services add the much-needed punch for many products.
                                </p>
                                <p>
                                    Many other clients are already benefitting; You must also take advantage today. Let&apos;s discuss and explore working together.
                                </p>
                                <button className='buttonOne'>Partner With Us</button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
    );
}

export default Index;
