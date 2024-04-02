import React, {useState} from 'react';
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

// front-end에서는 아무 계정만 입력해도 로그인 했다고 가정.
const Login = ({setAuthenticate}) => {
  const [id, setId] = useState(''); // 아이디와 패스워드 읽어올거임.
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // @@@ redux @@@
  const loginUser = (event) => {
    event.preventDefault(); // 자동 새로고침 방지 함수.
    // console.log("Hi");

    dispatch(authenticateAction.login(id, password)); // 미들웨어 함수

    navigate("/"); // 메인 홈페이지로 돌아가기(로그인 되었을 때)
  }

  return (
    <Container className="login-box">
      <Form className="login-form" onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => setId(event.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        {/* 제출 타입이 submit으로 되어있는 버튼은 onClick으로 이벤트를 주면 안된다! */}
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default Login
