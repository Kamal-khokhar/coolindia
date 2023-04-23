import React from 'react'
import Coolheader from '../Coolheader/Coolheader'
import Coolfooter from '../Coolfooter/Coolfooter'
import Container from 'react-bootstrap/Container';
import Testimonialslider from '../testimonialslider/testimonialslider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { aboutUsMain } from './about.style';
import { Fragments } from '../home/home.style';
import { ContactPage } from '../contactus/ContactUs.style';
import PhoneIcon from '../../assets/images/phone-icon.png';
import MailIcon from '../../assets/images/mail.png';
import AddressIcon from '../../assets/images/location.png';
import ourGoal from '../../assets/images/our-goal.png';
import aboutBanner from '../../assets/images/aboutus-banner.png';
import ourMission from '../../assets/images/our-mission.png';

const AboutPage = () => {
  return (
    <>
      <Coolheader />
      
      <aboutUsMain.aboutUsSec>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md="6" className='py-3'>
              <h2>About Us</h2>
              <p>Cool India is one of the rapidly-expanding companies in the field of cold chain products and solutions. We specialize in the selection of refrigeration equipment to satisfy the requirements of our clients. We use Condensing Units, Puf Panels, and Rack Systems to work on the refrigeration and chillers that allow us to stay on top of the competitive market.</p>
            </Col>
            <Col md="5" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={aboutBanner} />
              </Fragments.HomeImageWrap>
            </Col>
          </Row>
        </Container>
      </aboutUsMain.aboutUsSec>

      <aboutUsMain.howWeWork>
        <Container>
          <Row className="justify-content-center">
            <Col lg="10" md="12" sm="12" className='text-center'>
              <h2>How We Work</h2>
              <p>We know edible and liquid forms of foodstuff need to store in a cool place to keep up the quality of these products for the given period. This only becomes possible when you store these products in a cool place. By taking this thing into account, we decide to serve you with the best refrigeration equipment. Furthermore, we have to take special care of the ambiance while making this equipment. Our services are utilized to prevent perishable food, fruits & vegetables, ice cream, chemicals, ripening systems, and controlled atmosphere chambers etcetera.</p>
              <p>Additionally, for the reasons of achieving smoothness and effective management of the operations of the firm, the modern facility in Cool India is divided into several highly operational units. The facility equipped with all the necessary machinery and equipment helps us in undertaking the full preponderance of numerous features and characteristics of the company. To stay in the competition, the regular up-gradation performs to maintain the smoothness of the facility.</p>
              <p>Furthermore, our knowledge of cold chain facilities from beginning to end is extensive. All aspects of cold chain operations, including installation & commissioning, design, supply, and operations, are professional areas of expertise for us. Our capacity is based on our collective technological know-how and connections with top global cold chain product suppliers and solution providers. We rely on our devoted, world-class sales and service team, which is dispersed across the globe.</p>
            </Col>
          </Row>
        </Container>
      </aboutUsMain.howWeWork>

      <Fragments.HomeConsiderSec className="pb-5">
        <aboutUsMain.OurGoalSec>
          <Container>
            <Row className="align-items-center">
              <Col md="6" className='py-3'>
                <h2>Our Goals</h2>
                <p>At Cool India, our mission is to be the preferred supplier of cold chain products and solutions globally, by providing exceptional products and services that exceed our clients' expectations. We strive to maintain our position as a market leader through continuous improvement and innovation in our products, services, and processes.</p>
                <ul>
                  <li>Use of high quality manufacturing material to ensure quality and safety.</li>
                  <li>To build long-term relationships with customers by providing exceptional customer service, customized solutions, and a commitment to meeting their needs.</li>
                  <li>High-quality, reliable, and cost-effective cold storage solutions to businesses in a variety of industries.</li>
                  <li>Improving our operations and services by investing in new technologies, equipment, and training for our team members.</li>
                </ul>
              </Col>
              <Col md="6" className='py-3'>
                <Fragments.HomeImageWrap>
                  <img src={ourGoal} />
                </Fragments.HomeImageWrap>
              </Col>
            </Row>
          </Container>
        </aboutUsMain.OurGoalSec>
      </Fragments.HomeConsiderSec>

      <Fragments.HomeConsiderSec className="pt-4">
        <aboutUsMain.OurMissionSec>
          <Container>
            <Row className="align-items-center">
              <Col md="6" className='py-3'>
                <Fragments.HomeImageWrap>
                  <img src={ourMission} />
                </Fragments.HomeImageWrap>
              </Col>
              <Col md="6" className='py-3'>
                <h2>Our Mission</h2>
                <p>Our mission at Cool India is to provide businesses with top-notch cold storage solutions to preserve their products. We offer exceptional customer service, state-of-the-art facilities, and customized solutions to meet our clients' unique needs.With experienced professionals committed to safety and reliability, we strive to become a trusted partner for businesses in various industries.</p>
              </Col>
            </Row>
          </Container>
        </aboutUsMain.OurMissionSec>
      </Fragments.HomeConsiderSec>
      
      <Testimonialslider />

      <ContactPage.ContactFormSec className="contactAboutPage">
        <Container>
          <Row className="align-items-center">
            <Col md="6" className='py-3'>
              <ContactPage.ContactText className="ps-lg-5">
                  <h2>Let’s Get Connected</h2>
                  <p>Send us a message with a brief description of your project. Our expert team will review it and get back to you within one business day with free consultation and to discuss the next steps.</p>
                  <ContactPage.ContactTextBox>
                      <img src={PhoneIcon} />
                      <p><a href="tel:+91 98138 44300">+91 98138 44300</a></p>
                  </ContactPage.ContactTextBox>
                  <ContactPage.ContactTextBox>
                      <img src={MailIcon} />
                      <p><a href="mailto:coolindia20@gmail.com">coolindia20@gmail.com</a></p>
                  </ContactPage.ContactTextBox>
                  <ContactPage.ContactTextBox>
                      <img src={AddressIcon} />
                      <p>Near Om Shanti Shiksha Sadhan,Village Nathupur, Distt. Sonipat, Haryana - 131029</p>
                  </ContactPage.ContactTextBox>
              </ContactPage.ContactText>
            </Col>
            <Col md="6" className='py-3'>
              <ContactPage.ContactFormBox>
                  <h2>Any Questions?</h2>
                  <h3>Leave Us a Message Here:</h3>
                  <Row>
                      <Col className="col-12 col-md-6 mb-4">
                          <input type="text" className="form-control" placeholder="Name*" />
                      </Col>
                      <Col className="col-12 col-md-6 mb-4">
                          <input type="tel" className="form-control" placeholder="Phone Number" />
                      </Col>
                      <Col className="col-12 mb-4">
                          <input type="email" className="form-control" placeholder="Email*" />
                      </Col>
                      <Col className="col-12 mb-4">
                          <textarea className="form-control" placeholder="Write Your Message...."></textarea>
                      </Col>
                      <Col className="col-12">
                          <Button type="submit" className="custom-btn">Send Message</Button>
                      </Col>
                  </Row>
              </ContactPage.ContactFormBox>
            </Col>
          </Row>
        </Container>
      </ContactPage.ContactFormSec>

      <Coolfooter />
    </>
  )
}
export default AboutPage;