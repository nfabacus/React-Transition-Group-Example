import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-transition-group'


const defaultStyle = {
  transition: `all 300ms ease-in-out`,
  backgroundColor: '#8787d8',
  height: 0,
  width: "50%"
}

const transitionStyles = {
  entering: { height: 0, opacity: 0 },
  entered: { height: 300, opacity: 1 },
  exiting: { height: 0 },
  // exited: { display: "none"} //You don't need this because we unmount with "unmountOnExit" in <Transition> below.
};


class Example extends Component {
  state = { show: false }

  handleToggle=()=>{
    this.setState ({
      show: !this.state.show
    })
  }
  
  render() {

    return (
      <div>
        <button onClick={this.handleToggle}>Click to toggle</button>

          <Transition
            in={this.state.show}
            timeout={300}
            mountOnEnter
            unmountOnExit  //this will completely remove the DOM
          >
            {state => ( //state will come as entering, entered, exiting, exited
                <div style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}>
                  <p>Contents...</p>
                </div>
              )
              
            }
          </Transition>

      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'))