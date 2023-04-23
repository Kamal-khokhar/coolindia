import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { testimonialSection } from './testimonial.style';
import LeftArrow from '../../assets/svg/left-arrow.svg';
import UserImage from '../../assets/images/user.png';


const BlogPage = () => {
  return (
    <>
      <testimonialSection.testimonialSec>
        <Container>
          <Row className="justify-content-center">
            <Col md="9">
              <h2>Testimonials</h2>
              <p>Hear What Our Customers Have to Say</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="12" sm="12" md="12" lg="4" className='pb-4'>
              
            </Col>
            <Col xs="12" sm="12" md="12" lg="4" className='pb-4'>
              
            </Col>
            <Col xs="12" sm="12" md="12" lg="4" className='pb-4'>
              
            </Col>
          </Row>
          <testimonialSection.SliderArrowBtnWrap>
            <testimonialSection.SliderArrowBtn BackgroundImg={LeftArrow} href="#"></testimonialSection.SliderArrowBtn>
            <testimonialSection.SliderArrowBtn href="#"></testimonialSection.SliderArrowBtn>
          </testimonialSection.SliderArrowBtnWrap>
        </Container>
      </testimonialSection.testimonialSec>
    </>
  )
}
export default BlogPage;