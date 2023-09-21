import React from 'react';
import {Form, Button, Container} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Login = ({authenticate, setAuthenticate, setLog}) => {
    const navigate = useNavigate();
    const LoginUser=(event)=>{
        event.preventDefault();
        setLog("로그아웃");
        setAuthenticate(true);
        navigate("/");
    }
  return (
    <Container style={{ width: '30%' }}>
        <Form onSubmit={(event)=>LoginUser(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="email" placeholder="아이디" />
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="비밀번호" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="로그인 정보 기억하기" />
            </Form.Group>
            
            <Button variant="danger" type="submit">
                로그인
            </Button>
        </Form>
    </Container>
  )
}

export default Login