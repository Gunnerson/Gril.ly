import React, {Component} from "react";
import {Link} from "react-router-dom";

class Carousel extends Component {
    render() {
        return (
          // <Carousel options={{fullWidth: true,indicators: true}} images={[
          //   'https://picsum.photos/250/250?image=0',
          //   'https://picsum.photos/250/250?image=1',
          //   'https://picsum.photos/250/250?image=2',
          // ]} />
            <div classname="carousel carousel-slider center">
            <div classname="carousel-fixed-item center">
              <a classnme="btn waves-effect white grey-text darken-text-2">button</a>
            </div>
            <div classname="carousel-item red white-text" href="https://pkelliher.imgix.net/donuts.jpg?fit=crop&h=784&w=1800">
              <h2>First Panel</h2>
              <p classname="white-text">This is your first panel</p>
            </div>
            <div classname="carousel-item amber white-text" href="https://pkelliher.imgix.net/donuts.jpg?fit=crop&h=784&w=1800">
              <h2>Second Panel</h2>
              <p classname="white-text">This is your second panel</p>
            </div>
            <div classname="carousel-item green white-text" href="https://pkelliher.imgix.net/coli.jpg?fit=crop&h=784&w=1800&">
              <h2>Third Panel</h2>
              <p classname="white-text">This is your third panel</p>
            </div>
            </div>
        );
    }
}

export default Carousel;