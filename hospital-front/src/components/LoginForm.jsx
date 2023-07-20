import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import "../styles/loginPage.scss";
function LoginForm({ id, password, onIdChange, onPasswordChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formId" className="mb-3">
        <FloatingLabel controlId="floatingInput" label="의료진 코드 입력">
          <Form.Control
            type="text"
            placeholder="아이디 입력"
            value={id}
            onChange={onIdChange}
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group controlId="formPassword" className="mb-4">
        <FloatingLabel controlId="floatingPassword" label="비밀번호 입력">
          <Form.Control
            type="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={onPasswordChange}
            required
          />
        </FloatingLabel>
      </Form.Group>

      <Button
        className="fullWidth"
        variant="primary"
        type="submit"
        size="lg"
        style={{ color: "white" }}
      >
        로그인
      </Button>
    </Form>
  );
}
export default LoginForm;
