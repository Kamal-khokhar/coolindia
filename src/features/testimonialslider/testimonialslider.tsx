import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../../owl.css';
import {TestSliderMain} from './testimonialslider.style';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import UserImage from '../../assets/images/user.png';

export class Owldemo1 extends Component {  
    render()  
      {  
        return (  
        <>
          <TestSliderMain.testimonialSec>
            <Container>
              <Row className="justify-content-center">
                <Col md="9">
                  <h2>Testimonials</h2>
                  <p>Hear What Our Customers Have to Say</p>
                </Col>
              </Row>
              <Row>
                <Col sm="12" className='pb-4'>
                  <OwlCarousel
                    items={3}
                    className="owl-theme"
                    loop
                    nav
                    margin={15}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      400: {
                        items: 1,
                      },
                      600: {
                        items: 2,
                      },
                      700: {
                        items: 2,
                      },
                      1000: {
                        items: 3,
                      }
                    }}
                  >
                    <div>
                      <Card>
                        <Card.Body>
                          <Card.Title>
                            I was hesitant to use a cold storage company at first, but this company put my mind at ease. Their security measures are top-notch, and I can access my items whenever I need to. I wouldn't trust anyone else with my valuable inventory.
                          </Card.Title>
                          <Card.Text>
                            <i><img src={UserImage} /></i>
                            <span>Brendon Micheal</span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card>
                        <Card.Body>
                          <Card.Title>
                            I run a small catering business, and I rely on this company to store my ingredients and supplies. They have exceeded my expectations with their prompt service and attention to detail. I highly recommend their services to anyone in need of reliable cold storage solutions.
                          </Card.Title>
                          <Card.Text>
                            <i><img src={UserImage} /></i>
                            <span>John K.</span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card>
                        <Card.Body>
                          <Card.Title>
                            I have been using this company's cold storage services for over a year now, and I must say, I am thoroughly impressed. Not only is the facility clean and well-maintained, but the staff is also incredibly helpful and friendly. I feel confident leaving my perishable goods in their capable hands.
                          </Card.Title>
                          <Card.Text>
                            <i><img src={UserImage} /></i>
                            <span>Jimmy Mesch</span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    
                  </OwlCarousel>
                </Col>
              </Row>
              
            </Container>
          </TestSliderMain.testimonialSec>
              
          </>  
          )  
        }  
      }  
        
  
export default Owldemo1 