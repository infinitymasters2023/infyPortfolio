import { useRouter } from 'next/router'
import { Icon } from '@iconify-icon/react';
import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import Link from 'next/link';
import heroimage from "@/assets/images/hero.png"
import scrapimage from "@/assets/images/scrapimg.png"
import l1 from "@/assets/images/l1.png"
import l2 from "@/assets/images/l2.png"
import l3 from "@/assets/images/l3.png"
import l4 from "@/assets/images/l4.png"
import m1 from "@/assets/images/m1.png"
import m2 from "@/assets/images/m2.png"
import guide1 from "@/assets/images/guide1.png"
import guide2 from "@/assets/images/guide2.png"
import guide3 from "@/assets/images/guide3.png"
import name1 from "@/assets/images/name1.png"
import name2 from "@/assets/images/name2.png"
import name3 from "@/assets/images/name3.png"
import trophy from "@/assets/images/trophy.gif"
import founder from "@/assets/images/founder.png"
import c1 from "@/assets/images/c1.png"
import c2 from "@/assets/images/c2.png"
import c3 from "@/assets/images/c3.png"
import simg from "@/assets/images/simg.png"

function Index() {
  const router = useRouter();
  const goToContact = () => {
    router.push("ContactUs")
  }
  return (
    <>
      {/* hero section starts */}
      <div className="heroWrp">
        <Container>
          <div className="heroMain">
            <div className="heroLeft" data-aos="fade-right" data-aos-duration="1500">
              <h1>We are Infinity<br />Assurance</h1>
              <p>We provide hassle free warranty solutions<br />and pan india service across india</p>
              <button className='buttonOne' onClick={goToContact}>Get A Quote</button>
            </div>
            <div className="heroRight" data-aos="fade-left" data-aos-duration="1500">
              <div className="heroImg">
                <img src={heroimage.src} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* hero section ends */}
      <div id="background" style={{ overflowX: "hidden" }}>
        <main id='main'>
          <Container>
            <Row>
              <Col className='homeTitle' data-aos="fade-up" data-aos-duration="1200">
                <h1 >Welcome to the World of Hassle-free<br /> Warranty Solutions that Work</h1>
                <p>Our Headquarter is located in New Delhi, India</p>
              </Col>
            </Row>
            <Row style={{ marginTop: "3rem" }}>
              <div className="speciallistWrp" data-aos-offset="100" data-aos="zoom-in" data-aos-duration="1200">
                <Col>
                  <p>
                    We are Experts in
                  </p>
                  <ListGroup numbered>
                    <ListGroupItem>
                      Insurance Claims Administration
                    </ListGroupItem>
                    <ListGroupItem>
                      Warranty Service Administration
                    </ListGroupItem>
                    <ListGroupItem>
                      Installation and Commissioning Services
                    </ListGroupItem>
                    <ListGroupItem>
                      Service Products – Extended Warranty, Accidental Damage Protection and Custom-built Service Products
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                <img src={l1.src} alt="" className='l1' data-aos="fade-down-right" data-aos-duration="1200" />
                <img src={l2.src} alt="" className='l2' data-aos="fade-down-left" data-aos-duration="1300" />
                <img src={l3.src} alt="" className='l3' data-aos="fade-up-right" data-aos-duration="1400" />
                <img src={l4.src} alt="" className='l4' data-aos="fade-up-left" data-aos-duration="1500" />
              </div>
            </Row>
            <Row>
              <div className="weAre">
                <div className="weAreTitle" data-aos="zoom-in-up" data-aos-duration="1200">
                  <p className="weAreSubTitle">Our solutions are aimed at personalised and <br /> unique services to all our clients</p>
                  <h1 className='weAreHeading'>We Are</h1>
                </div>
                <div className="weAreCardWrp" >
                  <div className="weAreCard" data-aos="fade-up" data-aos-offset="100" data-aos-duration="1000">
                    <img src={c1.src} alt="" />
                    <p>An Indian Angel Network (IAN) Portfolio company</p>
                  </div>
                  <div className="weAreCard" data-aos-offset="100" data-aos="fade-up" data-aos-duration="1500">
                    <img src={c2.src} alt="" />
                    <p>Winners of CeBIT +91 Startup Challenge Award 2015</p>
                  </div>
                  <div className="weAreCard" data-aos-offset="100" data-aos="fade-up" data-aos-duration="2000">
                    <img src={c3.src} alt="" />
                    <p>Incubated under Aegis Centre for Entrepreneurship (ACE)</p>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
          <Container>
            <div className="solutionsWrp" data-aos="zoom-out" data-aos-offset="100" data-aos-duration="1200">
              <div className="solutionTitle">
                <h1>Solutions Beyond Warranty</h1>
                <p>Have a glimpse</p>
              </div>
              <div className="slutionImage">
                <img src={simg.src} alt="" />
              </div>
            </div>
          </Container>
          <Container>
            <Row>
              <div className="mainScrapWrp">
                <div className="mainScrap"
                  data-aos="zoom-in" data-aos-offset="100" data-aos-duration="1200">
                  <div className="mainScrapLeft">
                    <h4>We deliver Pan Service in every nook & corner of the India through thousands of specialised partners.
                    </h4>
                    <p>Lead by highly experienced After-Market-Services professionals having decades of National & International Experience in Customer Service Delivery, we focus on the Best of Customer Service experience.</p>
                    <p>We create solutions for Manufacturers, Insurers, Retail Chains, eCommerce companies, Telecom & Utility Service Companies, Distributors, Retailers, System Integrators etc. leading to maximum value to the esteemed consumers.</p>
                    <p>The solutions include Extended Warranty, Accidental Damage Protection (ADP) and Value Added Services including Insurance Add-ONs for whole range of Mobility, Consumer Electronics, Home Appliances, Interactive Flat Panel Displays, Conference Room Solutions, IT, OA, Telecom, Networking, Security & Surveillance etc.</p>
                  </div>
                  <div className="mainScrapRight">
                    <div className="mainScrapRightImgWrap">
                      <img src={scrapimage.src} alt="Warranty Image" />
                    </div>
                  </div>
                </div>
                <img src={m1.src} alt="" className='m1' />
                <img src={m2.src} alt="" className='m2' />
              </div>
            </Row>
            <hr style={{ color: '#cbe7f5', margin: "6rem 0rem 6rem" }} data-aos="zoom-in" data-aos-duration="1000" />
            <Row>
              <div className="founderWrp" data-aos="flip-up" data-aos-offset="100" data-aos-duration="1200">
                <h1>Our Founder</h1>
                <div className="founder">
                  <div className="founderLeft">
                    <div className="founderImgWrp">
                      <img src={founder.src} alt="Founder" />
                    </div>
                  </div>
                  <div className="founderRight">
                    <h2>R.K. Goel</h2>
                    <p>He worked in India, Singapore and Middle East developing and managing After-Market-Services businesses.</p>
                    <p>After Market Services and InsureTech professional with 30+ Years of experience with the most reputed companies in IT, Telecom, Broadcasting Solutions and Office Automation industries.
                    </p>
                    <p>Specialises in Start-ups, Strategic Alliances, Outsourcing & Off-shoring, New Services Introduction, Business Development, P&L Management</p>
                    <p>Companies worked for include Network Limited, Redington, Horizon Broadcast Electronics, RT Outsourcing Services (inTarvo Technologies), Emitac etc.</p>
                    <button className='buttonTwo'>
                      <Link href="http://www.linkedin.com/in/rkgoel" target='_blank'><Icon icon="logos:linkedin" style={{ fontSize: "20px", transform: "translateY(4px)", paddingLeft: "3px" }} />
                        <Icon icon="ph:arrow-square-out-bold" style={{ fontSize: "24px", transform: "translateY(4px)", paddingLeft: "6px" }} />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </Row>
            <Row>
              <div className="guidesWrp">
                <div className="guidesTitle" data-aos-offset="100" data-aos="zoom-in-up" data-aos-duration="1200">
                  <h1>Our Guides</h1>
                </div>
                <div className="guidesContWrp">
                  <div className="guidesCont guideone" data-aos="fade-right" data-aos-duration="1200">
                    <div className="guidesContLeft" >
                      <img src={trophy.src} alt="" className='trophy' />
                      <img src={name1.src} alt="" className='name1' />
                      <p>Co-Founder - HCL, Padma Bhushan (known as the Father of Hardware in India)</p>
                      <ul>
                        <li>Distinguished Fellow - Niti Aayog</li>
                        <li>Member - Advisory Board India Semiconductor Mission (MEITY)
                        </li>
                        <li>Member - Start-up Advisory Council - Govt of India</li>
                        <li>Chairman - FICCI Startup Committee</li>
                        <li>Chairman - EPIC Foundation (Electronics Products Innovation Consortium)
                        </li>
                        <li>Author - Just Aspire</li>
                      </ul>
                    </div>
                    <div className="guidesRight" >
                      <div className="guideImgWrp">
                        <img src={guide1.src} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="guidesCont guidetwo" data-aos="fade-left" data-aos-duration="1200">
                    <div className="guidesRight" >
                      <div className="guideImgWrp">
                        <img src={guide2.src} alt="" />
                      </div>
                    </div>
                    <div className="guidesContLeft" >
                      <img src={trophy.src} alt="" className='trophy' />
                      <img src={name2.src} alt="" className='name1' />
                      <p>Co-Founder - HCL, Padma Bhushan (known as the Father of Hardware in India)</p>
                      <ul>
                        <li>Co-founder of RT Outsourcing Services (now inTarvo Technologies), leader in the reverse logistics, hardware services & eWaste Management</li>
                        <li>He is also the founder of Aegis Centre for Entrepreneurship (ACE).
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="guidesCont guidethree" data-aos="fade-right" data-aos-duration="1200">
                    <div className="guidesContLeft">
                      <img src={trophy.src} alt="" className='trophy' />
                      <img src={name3.src} alt="" className='name1' />
                      <p>Co-Founder - HCL, Padma Bhushan (known as the Father of Hardware in India)</p>
                      <ul>
                        <li>Managing Director – Indication Instruments Limited, the only 100% Indian origin company of global standing in automotive parts.
                        </li>
                        <li>M.S. (Industrial and Management Engineering), he is also a member of the Indo US SME CEO forum.
                        </li>
                      </ul>
                    </div>
                    <div className="guidesRight" >
                      <div className="guideImgWrp">
                        <img src={guide3.src} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </main>
      </div>
    </>
  )
}

export default Index