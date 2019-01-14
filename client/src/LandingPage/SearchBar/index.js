import React, { Component } from 'react';
import { Form, Input, FormGroup, Col, Label, Button } from 'reactstrap';
import './index.css';

class SearchBar extends Component {

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}
            className="search-form">
        <FormGroup row>
          <Label for="tester" sm={2} size="lg">Name</Label>
          <Col sm={4}>
            <Input placeholder="Enter Your Name Here"
                   id="teser"
                   name="tester"
                   type="text"
                   onChange={this.props.handleChange}
                   value={this.props.tester}
                   bsSize="lg" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="searchTerm" sm={2} size="lg">Search</Label>
          <Col sm={4}>
            <Input placeholder="Search Quiz"
                   id="searchTerm"
                   name="searchTerm"
                   type="text"
                   value={this.props.searchTerm}
                   onChange={this.props.handleChange}
                   bsSize="lg" />
          </Col>
        </FormGroup>
        <Col sm={6}>
        <Button type="submit" color="primary">Enter</Button>
        </Col>
      </Form>
    )
  }
}

export default SearchBar;

// <form onSubmit={this.props.handleSubmit}>
//   <input
//   type="text"
//   name="tester"
//   placeholder="Enter Your Name Here"
//   onChange={this.props.handleChange}
//   value={this.props.tester}
//   >
//   </input>
//   <input
//   type="text"
//   name="searchTerm"
//   placeholder="Search Quiz"
//   value={this.props.searchTerm}
//   onChange={this.props.handleChange}
//   >
//   </input>
//   <button type="submit">Enter
//   </button>
// </form>
