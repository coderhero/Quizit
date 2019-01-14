import React from 'react';
import { Nav, NavItem, NavLink, Button, Row } from 'reactstrap';
import "./index.css";

export default function NavBar(props) {
    return (
      <div className="nav-bar">
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
                  <span className="welcome-user">Welcome {props.username}</span>
                  <NavLink href="#"
                           id="logout"
                    >Logout</NavLink>
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
