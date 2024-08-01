import Layout from '@/Layout/Layout'
import { Container } from 'reactstrap'
import React,{useEffect} from 'react'
import copyright from "@/assets/images/copyright.png"
import Hero from "@/Component/Hero"
import AOS from "aos";
import 'aos/dist/aos.css';

function Index() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Layout>
            {/* Hero Section starts */}
            <Hero heading="Copyright" title="This Website is protected by Indian and International copyright laws" src={copyright.src} alt="Copyright Image" />
            {/* Hero Section ends */}
            <div id="background">
                <div id="main">
                    <Container>
                        <div className="copyRightWrp" data-aos="zoom-in" data-aos-duration="1200" data-aos-offset="100">
                            <p>Any modification, reproduction or distributing the design or layout of this Web site, or individual sections of the design or layout of this Web site including, but not limited to, content, text, graphics, logos, button icons, images, audio clips and data compilations is not permitted without the written consent of Infinity Assurance Solutions Private Limited and any such attempt shall be treated as violation of our Copyright.</p>
                            <p>The compilation of all content, design, layout, graphics, logos, icons, images, audio clips, data etc. on this Web site is the exclusive property of Infinity Assurance Solutions Private Limited.</p>
                        </div>
                    </Container>
                </div>
            </div>
        </Layout>
  )
}

export default Index