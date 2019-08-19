import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Payment extends React.Component {

  loginToCheckout = (auth) => {
    return auth.isAuthenticated ?
        <Form>
        <Row form>
          <Col md={12}>
            
            <FormGroup>
              <Label for="billingAddress">Billing Address 1</Label>
              <Input type="billingaddress" name="billingAddress" id="billingAddress" placeholder="1234 Main St." />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="billingAddress2">Billing Address 2</Label>
          <Input type="text" name="billingAddress2" id="billingAddress2" placeholder="Apartment, studio, or floor"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="billingCity">Billing City</Label>
              <Input type="text" name="billingCity" id="billingCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="billingState">State</Label>
              <Input type="text" name="billingState" id="billingState"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="billingZip">Billing Zip</Label>
              <Input type="text" name="billingZip" id="billingZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="creditCardNum">Credit Card</Label>
              <Input type="text" name="creditCardNum" id="creditCardNum" placeholder="Visa, MasterCard,  AmEx,  Discover"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="expDate">Exp Date</Label>
              <Input type="number" name="expDate" id="expDate" placeholder="0819"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="Csc">CSC CVV2 Number</Label>
              <Input type="number" name="Csc" id="Csc" placeholder="Num on back of card"/>
            </FormGroup>  
          </Col>
        </Row>
      
        <Button onClick={this.onSubmit} href="./ConfirmationPage">Submit Payment</Button>
        {/* <Button>Submit Payment</Button> */}

      </Form>

    :
    <p>
    <Link to ="/login">Login</Link> or <Link to="/register">Sign Up</Link> to complete your reservation
    </p>
  };

  

  render() {

    const { user } = this.props.auth;

    return (
      <div>
        {this.loginToCheckout(this.props.auth)}
      </div>
    );
  }

  

}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Payment);