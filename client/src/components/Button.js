import React from 'react';
import {Redirect} from 'react-router-dom';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
     
        <Button color="primary">
          Click to reserve
        </Button>{' '}
      </div>
    );
  }
}


