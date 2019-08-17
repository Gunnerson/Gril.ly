// import React, { Component } from "react";
import React from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";

// export default
class ReviewReservationsPage extends React.Component {
  render() {
    return (
      <div>
          <h1>Something</h1>
        <Table dark>
          <thead>
            <tr>
              <th>Date</th>
              <th>Grill</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(ReviewReservationsPage);


// Table.propTypes = {
//     // Pass in a Component to override default element
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     size: PropTypes.string,
//     bordered: PropTypes.bool,
//     borderless: PropTypes.bool,
//     striped: PropTypes.bool,
//     dark: PropTypes.bool,
//     hover: PropTypes.bool,
//     responsive: PropTypes.bool,
//     // Custom ref handler that will be assigned to the "ref" of the inner <table> element
//     innerRef: PropTypes.oneOfType([
//       PropTypes.func,
//       PropTypes.string,
//       PropTypes.object
//     ])
//     };
