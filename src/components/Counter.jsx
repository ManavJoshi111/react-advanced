import React from "react";

/**
 Order of the lifecycle methods:
 constructor =>  render => componentDidMount => 
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <>
        <center>
          Min: {this.props.min}
          <br />
          Max: {this.props.max}
          <br />
          Count: {this.state.count}
          <br />
          <button
            onClick={() => {
              console.log("click");
              if (this.state.count < this.props.max) {
                this.setState({ count: this.state.count + 1 });
              } else {
                alert("You have reached the maximum limit");
              }
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              console.log("click");
              if (this.state.count > this.props.min) {
                this.setState({ count: this.state.count - 1 });
              } else {
                alert("You have reached the minimum limit");
              }
            }}
          >
            -
          </button>
        </center>
      </>
    );
  }
}
export default Counter;
