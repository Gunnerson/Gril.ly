import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from "prop-types";
import Register from './auth/Register';
import Axios from 'axios';
import { GET_ERRORS } from '../actions/types';

class Payment extends React.Component {

  

  constructor() {
    super();
    this.state={
      email: "",
      billing: "",
      billing2: "",
      billingCity: "",
      billingState: "",
      billingZip: "",
      creditCardNum: "",
      expDate: "",
      csc: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();





//Payment fields placed into User model
    const newPayment = {
      _id: this.state.userId,
      billing: this.state.billing,
      billing2: this.state.billing2,
      billingCity: this.state.billingCity,
      billingState: this.state.billingState,
      billingZip: this.state.billingZip,
      creditCardNum: this.state.creditCardNum,
      expDate: this.state.expDate,
      csc: this.state.csc
    };

    this.props.registerPayment(newPayment, this.props.history);
  };

  

  loginToCheckout = (auth) => {
    return auth.isAuthenticated ?
        <Form>
          <Form Group>
            <Label for="userId"></Label>
            <Input
            type="hidden"
            value={auth.user.id}
            name="userId"
            >
            </Input>
          </Form>

        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="billingAddress">Billing Address 1</Label>
              <Input 
              onChange={this.onChange}
              value={this.state.billing}
              type="billingaddress" 
              name="billingAddress" 
              id="billingAddress" 
              // placeholder="1234 Main St."
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="billingAddress2">Billing Address 2</Label>
          <Input 
          onChange={this.onChange}
          value={this.state.billing2}
          type="text" 
          name="billingAddress2" 
          id="billingAddress2" 
          // placeholder="Apartment, studio, or floor"
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="billingCity">Billing City</Label>
              <Input 
              onChange={this.onChange}
              value={this.state.billingCity}
              type="text" 
              name="billingCity" 
              id="billingCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="billingState">State</Label>
              <Input 
              onChange={this.onChange}
              value={this.state.billingState}
              type="text" 
              name="billingState" 
              id="billingState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="billingZip">Billing Zip</Label>
              <Input 
              onChange={this.onChange}
              value={this.state.billingZip}
              type="text" 
              name="billingZip" 
              id="billingZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="creditCardNum">Credit Card</Label>
              <Input 
              onChange={this.onChange}
              value={this.state.creditCardNum}
              type="text" 
              name="creditCardNum" 
              id="creditCardNum" 
              placeholder="Visa, MasterCard,  AmEx,  Discover"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="expDate">Exp Date</Label>
              <Input 
              onChange={this.onChange}
              value={this.state.expDate}
              type="number" 
              name="expDate" 
              id="expDate" 
              placeholder="0819"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="csc">CSC CVV2 Number</Label>
              <Input 
              onChange={this.onChange}
              value={this.state.csc}
              type="number" 
              name="csc" 
              id="csc" 
              placeholder="Num on back of card"/>
            </FormGroup>  
          </Col>
        </Row>
      
        {/* <Button onClick={this.onSubmit} href="./ConfirmationPage">Submit Payment</Button> */}
        {/* <Button>Submit Payment</Button> */}
        {/* Do we have to add a post action here? */}
        <Button onClick={console.log(this.id, this.billing)}>Submit Payment</Button>


      </Form>

    :
    <p>
    <Link to ="/login">Login</Link> or <Link to="/register">Sign Up</Link> to complete your reservation
    </p>
  };

  

  render() {

    const { user } = this.props.auth;
    // console.log(this.props.auth.user.id)
    // console.log("id^")

    return (
      <div>
        {this.loginToCheckout(this.props.auth)}
      </div>
    );
  }
}

//Register payment... does this go here? The one for user goes in authActions
export const registerPayment = (userData, history) => dispatch => {
  Axios
    .post("/api/users/registerPayment", userData)
    .then(res => history.push("/confirmation")) //re-routes person to confirmation page if successful
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
}

Register.propTypes = {
  registerPayment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    id: state.id
  }
}

export default connect(
    mapStateToProps, 
    { registerPayment }
)(withRouter(Payment));