import React from 'react'
import { Container, Row } from 'reactstrap'
import Link from 'next/link'
import { Icon } from '@iconify-icon/react';
import { Tooltip } from 'reactstrap';

function index() {
  return (
    <>
      <footer>
        <Container>
          <div className="footer">
            <div className="footerBox footerBoxOne">
              <h4>About Us</h4>
              <p>Headquartered in New Delhi, India, we are an Indian Angel Network (IAN) portfolio and CeBIT Awarded company specialising in service administration of warranty programs and creating service plans for a wide variety of technology products across industries.</p>
            </div>
            <div className="footerBox footerBoxTwo">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="Copyright">Copyright</Link></li>
                <li><Link href="Privacy">Privacy Policy</Link></li>
                <li><Link href="ContactUs">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footerBox footerBoxThree">
              <div className='reachUs'>
                <h4>Reach Us</h4>
                <p><b>Head Office:</b> 24, US Complex,
                  Adjacent to Jasola Apollo Metro Station
                  120, Mathura Road
                  New Delhi 110 076 (India)
                </p>
                <h4>Connect with us</h4>
                <div className="socialLogo">
                  <Link href="tel:+91-9911-24-4451">
                    <Icon icon="fluent:call-20-regular" style={{ color: "white", fontSize: "32px" }} id='call' />
                  </Link>
                  <Link href="mailto:contact@infinityassurance.com">
                    <Icon icon="hugeicons:mail-open" style={{ color: "white", fontSize: "32px" }} id='call' />
                  </Link>
                  <Link href="https://www.facebook.com/pages/Infinity-Assurance/218125501702719?ref=hl" target='_blank' >
                    <Icon icon="eva:facebook-outline" style={{ color: "white", fontSize: "32px" }} id='call' />
                  </Link>
                  <Link href="http://linkedin.com/company/3558782" target='_blank'>
                    <Icon icon="eva:linkedin-outline" style={{ color: "white", fontSize: "32px" }} id='call' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Row>
            <div className="copyright">&copy; {new Date().getFullYear()} Infinity Assurance Solutions Pvt. Ltd.</div>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default index