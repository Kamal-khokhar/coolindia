import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {ProductListMain} from './product-list.style';
import CardImage1 from '../../assets/images/product-v1.jpg';
import Coolheader from '../Coolheader/Coolheader';
import Coolfooter from '../Coolfooter/Coolfooter';

const ProductPage = () => {
  return (
    <>
      <ProductListMain.ProductBox>
        <Container>
          <Row>
            <Col md="4" className='py-3'>
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage1} />
                <Card.Body>
                  <Card.Title>Water Cooler</Card.Title>
                  <Card.Text>
                    This product combines the benefits of both a water cooler and a water purifier in one convenient appliance. It provides clean and refreshing drinking water that is free from contaminants, bacteria, and impurities. The water cooler cum purifier is an ideal product for offices, homes, and other settings where a reliable source of clean drinking water is essential.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className='py-3'>
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage1} />
                <Card.Body>
                  <Card.Title>Cold Storage Room</Card.Title>
                  <Card.Text>
                    A cold storage room provides a large and versatile space for storing a variety of temperature-sensitive products. Cold storage rooms are available in different sizes and configurations to meet the specific needs of your customers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className='py-3'>
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage1} />
                <Card.Body>
                  <Card.Title>Ice Cream Freezer</Card.Title>
                  <Card.Text>
                    These freezers are specially designed to maintain the perfect temperature for storing ice cream and other frozen desserts. They come in a variety of sizes and configurations to suit different needs and can help your customers to keep their products fresh and flavorful.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className='py-3'>
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage1} />
                <Card.Body>
                  <Card.Title>Deep Freezer</Card.Title>
                  <Card.Text>
                    These freezers are designed to maintain temperatures that are well below freezing, making them ideal for storing items such as meat, poultry, and fish.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className='py-3'>
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage1} />
                <Card.Body>
                  <Card.Title>Blast Freezer</Card.Title>
                  <Card.Text>
                    A blast freezer is a specialized product that is designed to rapidly freeze products. Blast freezers are ideal for businesses that need to freeze large quantities of products quickly, such as bakeries and other food production facilities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4" className='py-3'>
              <Card className="coolIndiaCards">
                <Card.Img variant="top" src={CardImage1} />
                <Card.Body>
                  <Card.Title>Ripening Chamber</Card.Title>
                  <Card.Text>
                    These chambers are designed to accelerate the ripening process of bananas and other fruits, which can help businesses to get their products to market faster.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </ProductListMain.ProductBox>
  </>
  )
}
export default ProductPage;