import React from 'react'
import Coolheader from '../Coolheader/Coolheader'
import Coolfooter from '../Coolfooter/Coolfooter'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { gallerpagecss } from './gallery.style';
import gallery_V1 from '../../assets/images/gallery-v1.jpeg';
import services_V1 from '../../assets/images/services-v1.jpg';
import services_V2 from '../../assets/images/services-v2.jpeg';
import services_V3 from '../../assets/images/services-v3.jpeg';
import services_V5 from '../../assets/images/services-v5.jpeg';

const GalleryPage = () => {
  return (
    <>
      <Coolheader />
      
      <gallerpagecss.galleryBanerSec>
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="10">
              <h2>Our Gallery</h2>
              <p>Welcome to Cool India, where you can see some of the projects we have completed and the high-quality services we provide. Our team of experts is dedicated to delivering exceptional results, and we take pride in the work we do for our clients.</p>
            </Col>
          </Row>
        </Container>
      </gallerpagecss.galleryBanerSec>

      <gallerpagecss.gallerySec>
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="10" className='pb-4'>
              <h2>Commercial Refrigeration</h2>
              <p>Our commercial refrigeration services are designed to meet the unique needs of businesses of all sizes. We work with restaurants, grocery stores, hotels, and other commercial properties to provide high-quality refrigeration solutions that keep their products fresh and safe. From walk-in coolers to display cases, we have the expertise to handle any commercial refrigeration project.</p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="3" xs="6" className='pt-2'><img src={services_V1} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V2} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V3} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V5} /></Col>
          </Row>
        </Container>
      </gallerpagecss.gallerySec>

      <gallerpagecss.gallerySec>
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="10" className='pb-4'>
              <h2>Industrial Refrigeration</h2>
              <p>We specialize in industrial refrigeration solutions for a wide range of industries, including pharmaceuticals, food processing, and manufacturing. Our team has the experience and knowledge to design, install, and maintain custom refrigeration systems that meet the unique needs of each client.</p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="3" xs="6" className='pt-2'><img src={services_V1} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V2} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V3} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V5} /></Col>
          </Row>
        </Container>
      </gallerpagecss.gallerySec>

      <gallerpagecss.gallerySec>
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="10" className='pb-4'>
              <h2>Refrigeration Maintenance</h2>
              <p>Regular maintenance is essential to keep your refrigeration systems running smoothly and efficiently. Our team provides comprehensive maintenance services to ensure your equipment is always in top condition. We offer customized maintenance plans that fit the specific needs of your business.</p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="3" xs="6" className='pt-2'><img src={services_V1} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V2} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V3} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V5} /></Col>
          </Row>
        </Container>
      </gallerpagecss.gallerySec>

      <gallerpagecss.gallerySec>
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="10" className='pb-4'>
              <h2>HVAC Services</h2>
              <p>In addition to refrigeration services, we also offer HVAC services to keep your property comfortable and energy-efficient. Our team can install, repair, and maintain HVAC systems of all types, including air conditioning, heating, and ventilation.</p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="3" xs="6" className='pt-2'><img src={services_V1} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V2} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V3} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V5} /></Col>
          </Row>
        </Container>
      </gallerpagecss.gallerySec>

      <gallerpagecss.gallerySec>
        <Container>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="10" className='pb-4'>
              <h2>Emergency Services</h2>
              <p>We understand that emergencies can happen at any time, which is why we offer 24/7 emergency services. Our team is always on call to respond quickly to any urgent refrigeration or HVAC needs.</p>
              <p>At Cool India, we are committed to providing exceptional service and top-quality workmanship. Contact us today to learn more about how we can help with your refrigeration and HVAC needs.</p>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center text-center">
            <Col lg="3" xs="6" className='pt-2'><img src={services_V1} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V2} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V3} /></Col>
            <Col lg="3" xs="6" className='pt-2'><img src={services_V5} /></Col>
          </Row>
        </Container>
      </gallerpagecss.gallerySec>

      <Coolfooter />
    </>
  )
}
export default GalleryPage;