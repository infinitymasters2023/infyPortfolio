import Layout from '@/Layout/Layout'
import React, { useEffect } from 'react'
import { Container, Row, Label, Input, FormGroup } from 'reactstrap'
import { Icon } from '@iconify-icon/react';
import contactUsImg from "@/assets/images/contactUsImg.png"
import emailgif from "@/assets/images/email.gif"
import homegif from "@/assets/images/home.gif"
import AOS from "aos";
import 'aos/dist/aos.css';
import Hero from "@/Component/Hero"

function Index() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Layout>
      {/* Hero Section starts */}
      <Hero heading="Get In Touch" title="If you want to do business or work with us or have any query, please share your contact details and area of interest.We will get back shortly." src={contactUsImg.src} alt="Contact Us Image" />
      {/* Hero Section ends */}
      <div id="background">
        <div id="main">

          <Container>
            <div className="cotactUsFormWrp" data-aos="zoom-out" data-aos-duration="1200" data-aos-offset="100">
              <div className="contactUsMain">
                <div className="contactUsMainLeft">
                  <div className="allContact">
                    <div className="contactOne">
                      <Icon icon="line-md:phone-call-loop" style={{ color: "#243C4F", fontSize: "40px" }} id='call' /><span>+91-9911-24-4451</span>
                    </div>
                    <hr />
                    <div className="contactTwo">
                      <img src={emailgif.src} style={{ width: "42px" }} alt="" /><span> contact@infinityassurance.com</span>
                    </div>
                    <hr />
                    <div className="contactThree">
                      <img src={homegif.src} style={{ width: "42px" }} alt="" /><span> 24, US Complex, Adjacent to Jasola Apollo Metro Station 120, Mathura Road New Delhi 110 076 (India)</span>
                    </div>
                  </div>
                </div>
                <div className="contactUsMainRight">
                  <div className="formRow">
                    <div className="formGroup">
                      <Label for="FullName">
                        Full Name
                      </Label>
                      <Input
                        id="FullName"
                        name="fname"
                        placeholder="Full Name"
                        type="text"
                      />
                    </div>
                    <div className="formGroup">
                      <Label for="exampleEmail">
                        Mobile
                      </Label>
                      <Input
                        id="exampleEmail"
                        name="Mobile"
                        placeholder="Mobile No."
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="formRow">
                    <div className="formGroup">
                      <Label for="Email">
                        Email
                      </Label>
                      <Input
                        id="FullName"
                        name="email"
                        placeholder="Email Id"
                        type="email"
                      />
                    </div>
                    <div className="formGroup">
                      <Label for="exampleEmail">
                        Mobile
                      </Label>
                      <Input
                        className="mb-3"
                        type="select"
                      >
                        <option selected>
                          Please Choose An Option
                        </option>
                        {["Business Partnership", "Career Opportunity", "Regarding this website", "Product Inquiry", "Service Related", "Other"].map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </Input>
                    </div>

                  </div>
                  <FormGroup style={{ marginBottom: "0px !important" }} >
                    <Label for="exampleFile">
                      File
                    </Label>
                    <Input
                      id="exampleFile"
                      name="file"
                      type="file"
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: "0px" }}>
                    <Label for="exampleText">
                      Text Area
                    </Label>
                    <Input
                      id="exampleText"
                      name="text"
                      type="textarea"
                      rows="5"
                    />
                  </FormGroup>
                  <button className='buttonOne'>Submit <Icon icon="akar-icons:paper-airplane" style={{ fontSize: "20px" }} /></button>
                </div>
              </div>
            </div>
          </Container>
          <Container style={{ marginTop: "8rem" }} data-aos="flip-down" data-aos-duration="1200" data-aos-offset="100">
            <div className="mapWrp">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14020.07115865258!2d77.282113!3d28.539185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3de43e7dfaf%3A0x570426e20a6064ec!2sInfinity%20Assurance%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sus!4v1722062163339!5m2!1sen!2sus" style={{ border: "0", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Container>
        </div>
      </div>
    </Layout >
  )
}




export default Index