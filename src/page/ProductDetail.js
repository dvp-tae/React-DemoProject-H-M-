import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
// import styled from 'styled-components';

// const Home = styled.div`
//     width: 100px;
//     border-radius: 10%;
//     border: 1px solid red;
// `;

const ProductDetail = () => {
    let {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail=async()=>{
        let url = `https://my-json-server.typicode.com/dvp-tae/hnm-react/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.size);
        setProduct(data);
    }

    useEffect(()=>{
        getProductDetail();
    },[]);

  return (
    <Container>
        <Row>
            <Col className='product-img'>
                <img src={product?.img}/>
            </Col>
            <Col className='product-info'>
                <div style={{marginBottom:"5px"}}>{product?.title}</div>
                <div style={{marginBottom:"5px"}}>￦{product?.price}</div>
                <div style={{fontSize:"15px",marginBottom:"5px"}}>{product?.choice===true?"Conscious choice":<br/>}</div>
                <div style={{marginBottom:"50px"}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            사이즈 선택
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product?.size.map((item)=>(
                                <Dropdown.Item href="#/action-3">{item}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='product-add'><Button variant="dark">추가</Button></div>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail