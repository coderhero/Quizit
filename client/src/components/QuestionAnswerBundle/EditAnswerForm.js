import React from 'react';
import { Form, Input, FormGroup, Col, Label, Button } from 'reactstrap';
import './EditAnswerForm.css'

export default function EditAnswerForm(props) {
  return (
    <Form onSubmit={props.handleAnswerEditSubmit}
          className="edit-answer-form"
          id={props.id}
          >
      <FormGroup row>
        <Label for="answer" sm={2} size="sm">Answer</Label>
        <Col sm={4}>
          <Input placeholder="Answer"
                 id="answer"
                 type="text"
                 onChange={props.handleAnswerEdit}
                 value={props.answerEdit.answer}
                 bsSize="sm" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="correct" sm={2} size="sm">Is it correct answer?</Label>
        <Col sm={4}>
          <Input placeholder="true or false"
                 id="correct"
                 type="text"
                 onChange={props.handleAnswerEdit}
                 value={props.answerEdit.correct}
                 bsSize="sm" />
        </Col>
      </FormGroup>

      <Col sm={6}>
      <Button type="submit" color="primary">Complete</Button>
      </Col>
    </Form>
  )
