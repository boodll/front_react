import React from "react";

class StateComponent extends React.Component {
  state = {
    change: true
  }
  render(){
    return (
      <div>
        <h2>State Test</h2>
        <button onClick={() => {
          this.setState({change: !this.state.change})
        }}>click me</button>
        {this.state.change ? (<p>hello</p>) : (<p>world</p>)}
      </div>
    )
  }
}

export default StateComponent