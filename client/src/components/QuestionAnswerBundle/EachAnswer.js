import React from 'react';
import { Button } from 'reactstrap';
import './EachAnswer.css';

export default function EachAnswer(props) {
  return (
    <div className="each-answer">
      <h5>{props.answer}</h5>
      <Button size="sm" color="success">Create</Button>
      <Button size="sm" color="info">Edit</Button>
      <Button size="sm"
              color="danger"
              id={props.id}
              onClick={props.handleDelete}
              >Delete</Button>
    </div>
  )
}
