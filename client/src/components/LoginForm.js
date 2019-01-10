import React from 'react';
import { Form, Input, FormGroup, Col, Label, Button } from 'reactstrap';

export default function LoginForm(props) {
  return (
    <Form onSubmit={props.handleLogin}>
      <FormGroup row>
        <Label for="username" sm={2} size="lg">Username</Label>
        <Col sm={4}>
          <Input placeholder="username"
                 id="username"
                 type="text"
                 onChange={props.handleChange}
                 value={props.login.username}
                 bsSize="lg" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="email" sm={2} size="lg">Email</Label>
        <Col sm={4}>
          <Input placeholder="email"
                 id="email"
                 type="email"
                 onChange={props.handleChange}
                 value={props.login.email}
                 bsSize="lg" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="password" sm={2} size="lg">Password</Label>
        <Col sm={4}>
          <Input placeholder="password"
                 id="password"
                 type="password"
                 onChange={props.handleChange}
                 value={props.login.password}
                 bsSize="lg" />
        </Col>
      </FormGroup>
      <Col sm={6}>
      <Button type="submit" color="primary">Login</Button>
      </Col>
    </Form>
  )
}
