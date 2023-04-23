import Coolheader from '../Coolheader/Coolheader'
import Coolfooter from '../Coolfooter/Coolfooter'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ContactPage } from './ContactUs.style';
import { Fragments } from '../home/home.style';
import contactBanner from '../../assets/images/contact-banner.png';
import PhoneIcon from '../../assets/images/phone-icon.png';
import MailIcon from '../../assets/images/mail.png';
import AddressIcon from '../../assets/images/location.png';

const ContactUs = () => {
    return (
        <>
            <Coolheader />
            <ContactPage.ContactBanerSec>
                <Container>
                    <Row className="align-items-center">
                        <Col md="8" className='py-3'>
                            <h2>Contact Us</h2>
                            <p>Let's discuss more to convert your idea into a reality!!!</p>
                        </Col>
                        <Col md="4" className='py-3'>
                            <Fragments.HomeImageWrap>
                                <img src={contactBanner} />
                            </Fragments.HomeImageWrap>
                        </Col>
                    </Row>
                </Container>
            </ContactPage.ContactBanerSec>

            <ContactPage.ContactFormSec>
                <Container>
                    <Row className="align-items-center">
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
                        <Col md="6" className='py-3'>
                            <ContactPage.ContactText className="ps-lg-5">
                                <h2>Get In Touch</h2>
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
                    </Row>
                </Container>
            </ContactPage.ContactFormSec>
            <ContactPage.ContactFormMap>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223442.19109439288!2d76.94376714046184!3d28.949292813356543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db00b8670400b%3A0x9efbd3cd589b645e!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1680451035376!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
            </ContactPage.ContactFormMap>
            <Coolfooter />
        </>
    )
}
export default ContactUs;