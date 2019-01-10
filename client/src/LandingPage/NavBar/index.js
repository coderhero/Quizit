import React from 'react';
import { Nav, NavItem, NavLink, Button, Row } from 'reactstrap';

export default function NavBar(props) {
    return (
      <div>
        <Nav>
        <NavItem>
          <NavLink href="#"
                   onClick={props.navPage}
                   id='Home'
          >Home</NavLink>
        </NavItem>
          <NavItem>
            <NavLink href="#"
                     onClick={props.navPage}
                     id='AllQuizzes'
            >Quizzes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"
                     onClick={props.navPage}
                     id='AllQuizzes'
            >React Quiz</NavLink>
          </NavItem>
          <NavItem>
          {
            props.username ?
            <div>
            <Row>
            <p>Welcome {props.username}</p>
            <Button>Logout</Button>
            </Row>
            </div> :
            <NavLink href="#"
                     onClick={props.navPage}
                     id='AuthForms'
            >Login/Signup</NavLink>
          }
          </NavItem>
        </Nav>
      </div>
    )
}
