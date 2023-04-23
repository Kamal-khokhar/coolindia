import React from 'react'
import {CoolfooterStyle} from './Coolfooter.style';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteWhiteLogo from '../../assets/svg/white-logo.svg';
import FbIocn from '../../assets/svg/fb-icon.svg';
import InstaIcon from '../../assets/svg/insta-icon.svg';
import InIcon from '../../assets/svg/in-icon.svg';


function Coolfooter() {
  return (
    <CoolfooterStyle.FooterMain>
      <Container>
          <Row>
            <Col md="3">
              <CoolfooterStyle.FooterFirstCol>
                <a href="#"><img src={SiteWhiteLogo} /></a>
                <p>We are an established and leading cold chain solutions provider specializing in the design, development, and manufacturing of refrigeration. </p>
              </CoolfooterStyle.FooterFirstCol>
            </Col>
            <Col md="3">
              <CoolfooterStyle.FooterSecondCol>
                <h4>Contact Us</h4>
                <ul>
                  <li>Address: Near Om Shanti Shiksha Sadhan,Village Nathupur, Distt. Sonipat,
                  Haryana - 131029</li>
                  <li>Contact: <a href="tel:+91 98138 44300">+91 98138 44300</a></li>
                  <li>Email Id: <a href="mailto:coolindia20@gmail.com">coolindia20@gmail.com</a></li>
                </ul>
              </CoolfooterStyle.FooterSecondCol>
            </Col>
            <Col md="3">
              <CoolfooterStyle.FooterThirdCol>
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/Services">Services</a></li>
                  <li><a href="/About">About Us</a></li>
                  <li><a href="/Products">Products</a></li>
                  <li><a href="/Gallery">Gallery</a></li>
                  <li><a href="/Blogs">Blogs</a></li>
                  <li><a href="/Contact">Contact Us</a></li>
                </ul>
              </CoolfooterStyle.FooterThirdCol>
            </Col>
            <Col md="3">
              <CoolfooterStyle.FooterFourthCol>
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Cold storage design and engineering</a></li>
                  <li><a href="#">Construction and installation</a></li>
                  <li><a href="#">Project management</a></li>
                  <li><a href="#">Maintenance and repair</a></li>
                  <li><a href="#">Consulting services</a></li>
                </ul>
              </CoolfooterStyle.FooterFourthCol>
            </Col>
          </Row>  
          <Row className="align-items-center FooterCopyRightRow">
            <Col xs="7" sm="7" md="8">
              <CoolfooterStyle.FooterCopyRight>
                <p>© Copyright 2023 coolindia.co.in All rights reserved.</p>
              </CoolfooterStyle.FooterCopyRight>
            </Col>
            <Col xs="5" sm="5" md="4">
              <CoolfooterStyle.FooterCopyRight align="right">
                <a href="#"><img src={FbIocn} /></a>
                <a href="#"><img src={InstaIcon} /></a>
                <a href="#"><img src={InIcon} /></a>
              </CoolfooterStyle.FooterCopyRight>
            </Col>
          </Row>
        </Container>
    </CoolfooterStyle.FooterMain>
  );
}

export default Coolfooter;