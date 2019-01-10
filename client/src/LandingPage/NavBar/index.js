import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

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
            >All Quizzes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"
                     onClick={props.navPage}
                     id='QuizzSession'
            >React Quiz</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"
                     onClick={props.navPage}
                     id='Login'
            >Login/Signup</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
}
