import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import laptops from '../../images/laptops.png'
import cat2 from '../../images/cat2.png'
const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount-backcolor my-3  mx-2  d-flex text-center align-items-center">
                <Col sm="6">
                    <div className="discount-title">
                        خصم يصل حتي ٣٠٪ علي مستحضرات التجميل
                    </div>
                </Col>
                <Col sm="6">
                    <img className="cat2" src={cat2} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection
