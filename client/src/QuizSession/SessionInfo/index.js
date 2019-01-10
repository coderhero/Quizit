import React from 'react';
import { Button } from 'reactstrap';

export default function SessionInfo(props) {
  return (
    <div>
      <h2>{props.description}</h2>
      <Button color="primary"
              onClick={props.startQuestion}
      >Enter Quiz</Button>
    </div>
  )
}
