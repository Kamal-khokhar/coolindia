import React from 'react'
import Coolheader from '../Coolheader/Coolheader';
import Coolfooter from '../Coolfooter/Coolfooter';
import NewsSlider from '../newslider/newslider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Fragments} from './home.style';
import AboutImage from '../../assets/images/home-about.png';
import ConsiderImage from '../../assets/images/home-consider-image.png';
import StandUsImage from '../../assets/images/home-stand-us.png';
import CardImage1 from '../../assets/images/home-card-img1.png';
import CardImage2 from '../../assets/images/home-card-img2.png';
import CardImage3 from '../../assets/images/home-card-img3.png';
import RequirementSecImg from '../../assets/images/requirements-sec.png';
import hoverBox2 from '../../assets/images/hover-box2.png';
import hoverBox3 from '../../assets/images/hover-box3.png';
import hoverBox4 from '../../assets/images/hover-box4.png';
import hoverBox5 from '../../assets/images/hover-box5.png';
import hoverBox6 from '../../assets/images/hover-box6.png';
import hoverBox7 from '../../assets/images/hover-box7.png';
import hoverBox8 from '../../assets/images/hover-box8.png';
import News1 from '../../assets/images/home-news1.png';
import News2 from '../../assets/images/home-news2.png';
import News3 from '../../assets/images/home-news3.png';


const HomePage = () => {
  return (
    <>
      <Coolheader/>

      <Fragments.HomeBanner>
        <Fragments.HomeBannerHeading>PRESERVING FRESHNESS <br /> DELIVERING EXCELLENCE</Fragments.HomeBannerHeading>
        <Fragments.HomeBannerButton href="javascript:void(0)">GET A QUOTE</Fragments.HomeBannerButton>
      </Fragments.HomeBanner>
      
      <Fragments.HomeAboutSec>
        <Container>
          <Row className="align-items-center">
            <Col md="6" className='py-3'>
              <h2>About Us</h2>
              <h4><span>COOL INDIA</span> Your Trusted Cold Storage Partner</h4>
              <p>We are an established and leading cold chain solutions provider specializing in the design, development, and manufacturing of refrigeration equipment. Our expertise in the field of cold storage products and solutions has helped us become one of the fastest-growing companies in India. </p>
              <Button className="custom-btn">Read More</Button>
            </Col>
            <Col md="6" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={AboutImage} />
              </Fragments.HomeImageWrap>
            </Col>
          </Row>
        </Container>
      </Fragments.HomeAboutSec>      

      <Fragments.HomeCardSec>
        <Container>
          <Row>
            <Col md="4" className='py-3'>
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage1} />
                <Card.Body>
                  <Card.Title>What We Offer?</Card.Title>
                  <Card.Text>
                    We believe in producing quantity with quality. At COOL India, we offer a wide range of cold storage solutions, including Multi Produce, Palletized, Pre-Cooling Rooms, Controlled Atmosphere (CA) Store, Banana Ripening facility.
                  </Card.Text>
                  <Button className="custom-btn">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className='py-3'>
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage2} />
                <Card.Body>
                  <Card.Title>Our Capabilities</Card.Title>
                  <Card.Text>
                    We take pride in our turnkey project capabilities that cover civil works, Pre-Engineering Building, Refrigeration, Electrical, Insulation, Flooring, Prefab panels, Docking stations, Packing & Grading Line.
                  </Card.Text>
                  <Button className="custom-btn">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className='py-3'>
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage3} />
                <Card.Body>
                  <Card.Title>Our Strength</Card.Title>
                  <Card.Text>
                    At COOL India, our strength lies in our highly technical product lines and ease of service. We strive to provide our customers with the best possible solutions to meet their cold storage needs.
                  </Card.Text>
                  <Button className="custom-btn">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragments.HomeCardSec>

      <Fragments.HomeRequirementSec>
        <Container>
          <Row className="align-items-center">
          <Col md="6" className='py-3'>
            <Fragments.HomeImageWrap>
              <img src={RequirementSecImg} />
            </Fragments.HomeImageWrap>
          </Col>
          <Col md="6" className='py-3'>
            <h2>All You Need For Your Storage Requirements</h2>
            <p>Whether you need a large-scale storage solution for perishable foods, medicines, or chemicals, or you're looking for a more specialized application like fruit ripening systems, we've got you covered. Our team of skilled professionals can design, develop, and manufacture a solution that meets your exact specifications and budget.</p>
            <Button className="custom-btn">Read More</Button>
            </Col>
          </Row>
        </Container>
      </Fragments.HomeRequirementSec>

      <Fragments.HomeConsiderSec>
        <Container>
          <Row className="align-items-center">
            <Col md="6" className='py-3'>
              <h2>Why Consider Us?</h2>
              <ul>
                <li>We always put quality first.</li>
                <li>Customer satisfaction is absolute</li>
                <li>Speedy and quality delivery</li>
                <li>A team of skilled professionals with great expertise and knowledge.</li>
                <li>Perfect solution to meet your requirements.</li>
              </ul>
            </Col>
            <Col md="6" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={ConsiderImage} />
              </Fragments.HomeImageWrap>
            </Col>
          </Row>
        </Container>
      </Fragments.HomeConsiderSec>

      <Fragments.HomeStorageSec>
        <Container>
          <Row className="justify-content-center">
            <Col md="9">
              <h2>Storage Products</h2>
              <p>We are committed to provide storage products & services for all your needs. Check out our wide range of products.</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="4" lg="3" className='pb-4'>
              <Fragments.CoolHoverBox>
                <p>
                  <b>Cold Storage Room</b>
                  Keep your perishable goods fresh and safe with our state-of-the-art cold storage rooms. Our customized solutions provide optimal temperature and humidity control for a range of applications.
                </p>
              </Fragments.CoolHoverBox>
            </Col>
            <Col xs="12" sm="12" md="4" lg="3" className='pb-4'>
              <Fragments.CoolHoverBox BackgroundImg={hoverBox2}>
                <p>
                  <b>Ripening Chamber</b>
                  Ensure your fruits and vegetables ripen perfectly every time with our ripening chambers. Our precision-controlled environments provide the ideal conditions for uniform ripening and optimal quality.
                </p>
              </Fragments.CoolHoverBox>
            </Col>
            <Col xs="12" sm="12" md="4" lg="3" className='pb-4'>
              <Fragments.CoolHoverBox BackgroundImg={hoverBox3}>
                <p>
                  <b>Walk In Freezer</b>
                  Our walk-in freezers provide convenient and easy access to your frozen goods, while maintaining optimal temperature and humidity levels. Ideal for restaurants, supermarkets, and other food-related businesses.
                </p>
              </Fragments.CoolHoverBox>
            </Col>
            <Col xs="12" sm="12" md="4" lg="3" className='pb-4'>
              <Fragments.CoolHoverBox BackgroundImg={hoverBox4}>
                <p>
                  <b>Banana Ripening Chamber</b>
                  Our banana ripening chambers provide precise control of temperature, humidity, and gas levels, ensuring uniform ripening and maximum quality. Perfect for banana growers, distributors, and retailers.
                </p>
              </Fragments.CoolHoverBox>
            </Col>
            <Col xs="12" sm="12" md="4" lg="3" className='pb-4'>
              <Fragments.CoolHoverBox BackgroundImg={hoverBox5}>
                <p>
                  <b>Deep Freezer</b>
                  Our deep freezers provide the ultimate in frozen storage, with temperatures as low as -40°C. These freezers are ideal for storing a range of goods, including meats, fish, and frozen desserts.
                </p>
              </Fragments.CoolHoverBox>
            </Col>
            <Col xs="12" sm="12" md="4" lg="3" className='pb-4'>
              <Fragments.CoolHoverBox BackgroundImg={hoverBox6}>
                <p>
                  <b>Ice Cream Freezer</b>
                  Keep your ice cream and other frozen desserts at the perfect temperature with our high-quality ice cream freezers. Designed to maintain consistent temperatures and provide easy access to your products.
                </p>
              </Fragments.CoolHoverBox>
            </Col>
            <Col xs="12" sm="12" md="4" lg="3" className='pb-4'>
              <Fragments.CoolHoverBox BackgroundImg={hoverBox7}>
                <p>
                  <b>Food Storage Chamber</b>
                  Our food storage chambers provide optimal temperature and humidity control for a range of food products, ensuring maximum freshness and quality. Ideal for food manufacturers, distributors, and retailers. We have all that you need. Now, it’s your turn to take the first step towards quality services at your ease. Contact us today for further queries!

                </p>
              </Fragments.CoolHoverBox>
            </Col>
            {/* <Col xs="12" sm="12" md="4" lg="3" className='pb-4'>
              <Fragments.CoolHoverBox BackgroundImg={hoverBox8}>
                <p>
                  <b>Water Cooler</b>
                  Stay refreshed and hydrated with our high-quality water coolers, designed to provide clean and purified water on demand. Perfect for offices, schools, and public spaces.
                </p>
              </Fragments.CoolHoverBox>
            </Col> */}
          </Row>
        </Container>
      </Fragments.HomeStorageSec>

      <Fragments.HomeConsiderSec>
        <Container>
          <Row className="align-items-center">
          <Col md="6" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={StandUsImage} />
              </Fragments.HomeImageWrap>
            </Col>
            <Col md="6" className='py-3'>
              <h2>What Make us Stand Out</h2>
              <ul>
                <li>Years of experience and research in this field</li>
                <li>A wide range of products for small to large storage needs</li>
                <li>Happy Customers: Our Quality Speaks</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragments.HomeConsiderSec>

      <NewsSlider />

      <Fragments.HomeJourneySec>
        <Container>
          <Row className="justify-content-center">
            <Col md="9">
              <h2>Let's Make Your Storage<br/>Journey Easy</h2>
              <Button className="custom-btn">Get In Touch</Button>
            </Col>
          </Row>
        </Container>
      </Fragments.HomeJourneySec>
      
      <Coolfooter/>
  </>
  )
}
export default HomePage;