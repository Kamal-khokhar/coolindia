import React from 'react'
import Coolheader from '../Coolheader/Coolheader'
import Coolfooter from '../Coolfooter/Coolfooter'
import ProductList from '../product-list/product-list'
import Container from 'react-bootstrap/Container';
import Testimonialslider from '../testimonialslider/testimonialslider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { servicesMain } from './services.style';
import { Fragments } from '../home/home.style';
import ConsiderImage from '../../assets/images/home-consider-image.png';
import servicesBanner from '../../assets/images/our-services.png';
import services_V1 from '../../assets/images/services-v1.jpg';
import services_V2 from '../../assets/images/services-v2.jpeg';
import services_V3 from '../../assets/images/services-v3.jpeg';
import services_V4 from '../../assets/images/services-v4.jpeg';
import services_V5 from '../../assets/images/services-v5.jpeg';
import sideBg from '../../assets/images/side_bg.png'

const ServicePage = () => {
  return (
    <>
      <Coolheader />
      
      <servicesMain.servicesSec>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md="6" className='py-3'>
              <h2>Our Services</h2>
              <p>Welcome to our Services Page for COOL INDIA, where we provide a comprehensive range of cold chain products and solutions to meet your specific needs. Our services are designed to ensure that your products are transported, stored, and handled in a controlled environment to maintain their quality, safety, and efficacy.</p>
            </Col>
            <Col md="4" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={servicesBanner} />
              </Fragments.HomeImageWrap>
            </Col>
          </Row>
        </Container>
      </servicesMain.servicesSec>

      <servicesMain.requirementSec BackgroundImg={sideBg}>
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col md="9" className='py-3'>
              <h2>Choose What you Need for Your Requirements</h2>
              <p>We offer a wide range of services to meet your refrigeration requirements. We offer competitive pricing, a highly trained and knowledgeable team, and a passion for high-quality storage services. </p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between py-4">
            <Col md="6" className='py-3'>
              <h3>Cold Storage Solutions</h3>
              <p>We offer a range of cold storage solutions including refrigerated warehouses, blast freezers, and customized cold rooms. Our facilities are equipped with the latest technology and monitored 24/7 to ensure your products are maintained at the desired temperature.</p>
            </Col>
            <Col md="4" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={services_V1} />
              </Fragments.HomeImageWrap>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between py-4">
          <Col md="4" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={services_V2} />
              </Fragments.HomeImageWrap>
            </Col>
            <Col md="6" className='py-3'>
              <h3>Chiller Solutions</h3>
              <p>We offer a range of cold storage solutions including refrigerated warehouses, blast freezers, and customized cold rooms. Our facilities are equipped with the latest technology and monitored 24/7 to ensure your products are maintained at the desired temperature.</p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between py-4">
            <Col md="6" className='py-3'>
              <h3>Temperature Mapping and Validation</h3>
              <p>We offer temperature mapping and validation services to ensure that your cold chain is compliant with regulatory standards. Our experts use advanced technology to map the temperature across your entire supply chain and provide validation reports for audit purposes.</p>
            </Col>
            <Col md="4" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={services_V3} />
              </Fragments.HomeImageWrap>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between py-4">
          <Col md="4" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={services_V4} />
              </Fragments.HomeImageWrap>
            </Col>
            <Col md="6" className='py-3'>
              <h3>Cold Chain Consulting</h3>
              <p>We provide cold chain consulting services to help you optimize your cold chain and reduce costs. Our experts analyze your current supply chain and provide recommendations for improving efficiency and reducing waste.</p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between py-4">
            <Col md="6" className='py-3'>
              <h3>Maintenance and Repair</h3>
              <p>We provide maintenance and repair services for your cold chain equipment to ensure that they are functioning at optimal levels. Our experienced technicians provide regular maintenance and timely repairs to minimize downtime and prevent equipment failures.</p>
            </Col>
            <Col md="4" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={services_V5} />
              </Fragments.HomeImageWrap>
            </Col>
          </Row>
        </Container>
      </servicesMain.requirementSec>

      <Testimonialslider />
      
      <servicesMain.productSec>
        <Container>
          <Row className="text-center justify-content-center">
            <Col sm="12" lg="9">
              <h2>Check Out Our Products Range - Keeping Your Goods Safe and Fresh</h2>
            </Col>
          </Row>
        </Container>
        <ProductList />
      </servicesMain.productSec>

      <servicesMain.requirementSec>
        <Container>
          <Row className="align-items-center">
            <Col md="6" className='py-3'>
              <h2>Why Choose Us?</h2>
              <p>Cool India is a one-stop solution for all your storage needs. We offer a wide range of products & services at competitive prices. We have a team of experienced and qualified workers to ensure quality services. Investing in storage products is critical for those who are involved in related industries. Therefore, we ensure that products are stored at the proper temperature and in optimal conditions, which helps to maintain their quality and extend their shelf life.</p>
              <p>Contact us today to discuss more!</p>
              <a href="/Contact" className="custom-btn">Get In Touch</a>
            </Col>
            <Col md="6" className='py-3'>
              <Fragments.HomeImageWrap>
                <img src={ConsiderImage} />
              </Fragments.HomeImageWrap>
            </Col>
          </Row>
        </Container>
      </servicesMain.requirementSec>

      <Coolfooter />
    </>
  )
}
export default ServicePage;