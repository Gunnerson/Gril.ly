import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SmokerQuantity extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        Smoker Quantity
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem> */}
          <DropdownItem>1</DropdownItem>
          <DropdownItem>2</DropdownItem>
           <DropdownItem>3</DropdownItem>
           <DropdownItem>4</DropdownItem>
          <DropdownItem>5</DropdownItem>
          <DropdownItem>6</DropdownItem>
         
        </DropdownMenu>
        
      </ButtonDropdown>
    );
  }
}