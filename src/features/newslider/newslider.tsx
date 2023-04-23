import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../../owl.css';
import {NewSliderMain} from './newslider.style';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import News1 from '../../assets/images/home-news1.png';
import News2 from '../../assets/images/home-news2.png';
import News3 from '../../assets/images/home-news3.png';
import LeftArrow from '../../assets/svg/left-arrow.svg';

export class Owldemo1 extends Component {  
    render()  
      {  
        return (  
        <>
          <NewSliderMain.HomeNewsSec>
            <Container>
              <Row className="justify-content-center">
                <Col md="9">
                  <h2>Latest News & Updates</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                      <Card className="coolIndiaCards">
                        <Card.Img variant="top" src={News1} />
                        <Card.Body>
                          <Card.Title>
                            Sed ut perspiciatis
                            <span>February 20, 2023</span>
                          </Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card className="coolIndiaCards">
                        <Card.Img variant="top" src={News2} />
                        <Card.Body>
                          <Card.Title>
                            Sed ut perspiciatis
                            <span>April 20, 2023</span>
                          </Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card className="coolIndiaCards">
                        <Card.Img variant="top" src={News3} />
                        <Card.Body>
                          <Card.Title>
                            Sed ut perspiciatis
                            <span>August 20, 2023</span>
                          </Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card className="coolIndiaCards">
                        <Card.Img variant="top" src={News1} />
                        <Card.Body>
                          <Card.Title>
                            Sed ut perspiciatis
                            <span>February 20, 2023</span>
                          </Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card className="coolIndiaCards">
                        <Card.Img variant="top" src={News2} />
                        <Card.Body>
                          <Card.Title>
                            Sed ut perspiciatis
                            <span>April 20, 2023</span>
                          </Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card className="coolIndiaCards">
                        <Card.Img variant="top" src={News3} />
                        <Card.Body>
                          <Card.Title>
                            Sed ut perspiciatis
                            <span>August 20, 2023</span>
                          </Card.Title>
                          <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </OwlCarousel>
                </Col>
              </Row>
              
            </Container>
          </NewSliderMain.HomeNewsSec>
              
          </>  
          )  
        }  
      }  
        
  
export default Owldemo1 