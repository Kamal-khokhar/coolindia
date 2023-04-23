import React from 'react'
import Coolheader from '../Coolheader/Coolheader'
import Coolfooter from '../Coolfooter/Coolfooter'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { blogpagecss } from './blogpage.style';
import { Fragments } from '../home/home.style';
import CardImage1 from '../../assets/images/home-card-img1.png';
import CardImage2 from '../../assets/images/home-card-img2.png';
import CardImage3 from '../../assets/images/home-card-img3.png';
import blogBanner from '../../assets/svg/blog-banner.svg';

const BlogPage = () => {
  return (
    <>
      <Coolheader />
      
      <blogpagecss.blogBanerSec>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md="6">
              <h2>The Importance of Cold Chain Products and Services for the Food Industry</h2>
              <p>The food industry is one of the most important industries in the world. However, with that importance comes a lot of responsibility, particularly when it comes to ensuring the safety of the products that are being produced and distributed. One of the most critical factors in food safety is the cold chain. In this blog, we'll explore what the cold chain is, why it's important, and how cold chain products and services can help.</p>
            </Col>
            <Col md="5">
              <Fragments.HomeImageWrap>
                <img src={blogBanner} />
              </Fragments.HomeImageWrap>
            </Col>
          </Row>
        </Container>
      </blogpagecss.blogBanerSec>

      <blogpagecss.blogMainSec>
        <Container>
          <Row>
            <Col md="4" className="pb-4">
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage1} />
                <Card.Body>
                  <Card.Title>What is the Cold Chain?</Card.Title>
                  <Card.Text>
                    The cold chain refers to the process of maintaining a consistent temperature throughout the entire journey of a food product from its production to its consumption. This includes everything from transportation and storage to packaging and handling. The goal of the cold chain is to prevent the growth of harmful bacteria and to maintain the quality of the product.
                  </Card.Text>
                  <Button className="custom-btn">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className="pb-4">
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage2} />
                <Card.Body>
                  <Card.Title>Why is the Cold Chain Important for Food Safety?</Card.Title>
                  <Card.Text>
                    When food products are not kept at the appropriate temperature, harmful bacteria can grow and multiply, leading to foodborne illnesses. These illnesses can range from mild stomach discomfort to life-threatening conditions. It's estimated that each year, 1 in 10 people worldwide become sick from eating contaminated food. Therefore, it's critical that the cold chain is maintained to ensure that food products are safe for consumption.
                  </Card.Text>
                  <Button className="custom-btn">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className="pb-4">
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage3} />
                <Card.Body>
                  <Card.Title>How Can Cold Chain Products and Services Help?</Card.Title>
                  <Card.Text>
                    Cold chain products and services can help by providing the tools and expertise needed to maintain the cold chain. This includes everything from temperature monitoring devices to specialized refrigeration systems. Cold chain service providers can also offer training and consulting services to help businesses ensure that they are following best practices for the cold chain management.
                  </Card.Text>
                  <Button className="custom-btn">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className="pb-4">
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage1} />
                <Card.Body>
                  <Card.Title>The Benefits of Using Cold Chain Products and Services</Card.Title>
                  <Card.Text>
                    The benefits of using cold chain products and services are transparent. By investing in these solutions, businesses can protect their products and customers. Some of the benefits of using hard-chain products and services include:
                  </Card.Text>
                  <Button className="custom-btn">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className="pb-4">
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage2} />
                <Card.Body>
                  <Card.Title>Protect Your Products with Cold Chain Solutions</Card.Title>
                  <Card.Text>
                    The cold chain is a critical component of food safety. By investing in cold chain products and services, businesses can ensure that their products are safe for consumption and meet regulatory requirements. If you're in the food industry, it's essential to work with a cold chain service provider that has the expertise and tools needed to maintain the cold chain. Don't risk the health and safety of your customers or the reputation of your business. Protect your products with Cool India's cold chain solutions.
                  </Card.Text>
                  <Button className="custom-btn">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </blogpagecss.blogMainSec>

      <Coolfooter />
    </>
  )
}
export default BlogPage;