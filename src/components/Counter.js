import React from 'react';


class Counter extends React.Component {
    constructor() {
      super();
  
      this.state = { 
        count: 0
      };
    }
  
    plusClick = () => {
      this.setState({count: this.state.count + 1})
    }
    moinsClick = () => {
      this.setState({count: this.state.count - 1})
    }
  
    render() {
      return (
        <div style={{backgroundColor: "#294a4d", color: "white", textAlign: "center"}}>
          <h1>Counter</h1>
          <h2>{this.state.count}</h2>
          <button onClick = {this.moinsClick} style={{backgroundColor: "#7fa0a3", color: "white",height: "40px",width: "90px", border: "1px solid black", borderRadius: "50px"}}>-</button>
          <button onClick = {this.plusClick} style={{backgroundColor: "#7fa0a3", color: "white",height: "40px",width: "90px", border: "1px solid black", borderRadius: "50px"}}>+</button>
        </div>
      )
    }
    
  }
  
  export default Counter;
  