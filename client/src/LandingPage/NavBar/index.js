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
              <Row>
                  <span>Welcome {props.username}</span>
                  <NavLink>Logout</NavLink>
              </Row> :
             <NavLink href="#"
                     onClick={props.navPage}
                     id='AuthForms'
            >Login/Signup</NavLink>
          }
          </NavItem>
          <NavItem>
            {
              props.username ?
              <NavLink href="#"
                       onClick={props.navPage}
                       id="Profile"
              >Profile</NavLink> : null
            }
          </NavItem>
        </Nav>
      </div>
    )
}
