import React from 'react';
import { Button } from 'reactstrap';

export default function EachAnswer(props) {
  return (
    <div>
      <h5>{props.answer}</h5>
      <Button color="primary"></Button>
      <Button color="danger"></Button>
    </div>
  )
}
