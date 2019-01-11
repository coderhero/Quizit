import React from 'react';
import { Button } from 'reactstrap';

export default function EachAnswer(props) {
  return (
    <div>
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
