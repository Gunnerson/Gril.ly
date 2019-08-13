import React from 'react';
import { Button } from 'reactstrap';

export default class PaymentSubmitButton extends React.Component {
  render() {
    return (
      <div>
     
        <Button color="primary" href="/ConfirmationPage">
          Click to reserve
        </Button>{' '}
      </div>
    );
  }
}