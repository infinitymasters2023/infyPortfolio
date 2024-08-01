import React, { useState } from 'react';
import { Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Icon } from '@iconify-icon/react';
import logo from '@/assets/images/logo.png';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Define the Direction type based on what reactstrap expects
type Direction = 'up' | 'down' | 'left' | 'right';

// Define the interface for the props
interface HeaderProps {
  direction: Direction; // Use the imported Direction type
  // Add other properties as needed
  [key: string]: any; // This allows for additional properties in args
}

function Index({ direction, ...args }: HeaderProps) {
  const [dropdownOpenone, setDropdownOpenOne] = useState(false);
  const [dropdownOpentwo, setDropdownOpenTwo] = useState(false);
  const [dropdownOpenthree, setDropdownOpenThree] = useState(false);
  const [collapse, setCollapse] = useState(false);

  const toggle1 = () => setDropdownOpenOne((prevState) => !prevState);
  const toggle2 = () => setDropdownOpenTwo((prevState) => !prevState);
  const toggle3 = () => setDropdownOpenThree((prevState) => !prevState);
  const router = useRouter();

  const techRoute = () => router.push("Technology");
  const whyRoute = () => router.push("Why");
  const ServiceAdministrationRoute = () => router.push("ServiceAdministration");
  const ServiceNetworkRoute = () => router.push("ServiceNetwork");
  const HelpDeskRoute = () => router.push("HelpDesk");
  const OEMRoute = () => router.push("OEM");
  const RetailChainsRoute = () => router.push("RetailChains");
  const EcommRoute = () => router.push("Ecomm");
  const SolutionsForConsumersRoute = () => router.push("SolutionsForConsumers");

  return (
    <>
      <header>
        <div className='headerStrip'>
          <Container>
            <Row className='headerStripRow'>
              <div className="headerStripCol">
                <a href="mailto: contact@infinityassurance.com ">
                  <Icon icon="fluent:mail-20-regular" style={{ color: '#FCC21B', fontSize: "20px" }} />
                  <span style={{ paddingRight: "0.5rem" }}>contact@infinityassurance.com</span>
                </a>
                <a href="https://www.facebook.com/infinityassurance/" target='_blank'>
                  <Icon icon="hugeicons:facebook-02" style={{ color: '#FCC21B', fontSize: '18px', padding: "0px 0.5rem", borderLeft: "1px solid white" }} />
                </a>
                <a href="http://linkedin.com/company/3558782" target='_blank'>
                  <Icon icon="simple-line-icons:social-linkedin" style={{ color: '#FCC21B', fontSize: '18px', padding: "0px 0.5rem", borderLeft: "1px solid white" }} />
                </a>
                <a href="tel:+91-9911244451">
                  <Icon icon="fluent:call-28-regular" style={{ color: '#FCC21B', fontSize: "20px", borderLeft: "1px solid white", paddingLeft: "0.5rem" }} />
                  <span style={{ paddingRight: "0.5rem" }}>+91-9911-24-4451</span>
                </a>
              </div>
            </Row>
          </Container>
        </div>
        <div className="headerMain">
          <Container>
            <Row>
              <div className="headerMainWrp">
                <div className="logoWrp">
                  <Link href="./">
                    <img src={logo.src} alt="logo" />
                  </Link>
                </div>
                <div className={`headerRight ${collapse ? "activeCollapse" : ""}`}>
                  <Dropdown isOpen={dropdownOpenone} toggle={toggle1} >
                    <DropdownToggle caret color='transparent'>About Us</DropdownToggle>
                    <DropdownMenu {...args}>
                      <DropdownItem onClick={techRoute}>Technology & Processes</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={whyRoute}>Why Us</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown isOpen={dropdownOpentwo} toggle={toggle2} >
                    <DropdownToggle caret color='transparent'>Service Administration</DropdownToggle>
                    <DropdownMenu {...args}>
                      <DropdownItem onClick={ServiceAdministrationRoute}>Warranty Service Administration</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={ServiceNetworkRoute}>Service Center Network</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={HelpDeskRoute}>Helpdesk</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown isOpen={dropdownOpenthree} toggle={toggle3} >
                    <DropdownToggle caret color='transparent'>Our Solutions</DropdownToggle>
                    <DropdownMenu {...args}>
                      <DropdownItem onClick={OEMRoute}>OEMs & Brand Solutions</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={RetailChainsRoute}>Retail Chains & LFR</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={EcommRoute}>eComm & Hyperlocal</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={SolutionsForConsumersRoute}>Direct to Consumers</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Link href="./ContactUs">Contact Us</Link>
                </div>
                <Icon className='hamBurger' icon="charm:menu-hamburger" onClick={() => { setCollapse(!collapse) }} style={{ color: "#243c4f", fontSize: "28px", cursor: "pointer" }} />
              </div>
            </Row>
          </Container>
        </div>
      </header>
    </>
  );
}

export default Index;
