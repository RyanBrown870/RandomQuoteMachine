import React from 'react';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.simpleAction = this.simpleAction.bind(this);
  }

  simpleAction = (event) => {
    this.props.simpleAction();
   }

   render() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <pre>
{
JSON.stringify(this.props)  //shows that state is being mapped to props successfully
}
</pre>
        <button onClick={this.simpleAction}>Test redux action</button>
      </header>
    </div>
  );
   }
}

// Redux code:


// we return the an object that we build, pass in the value from state (from the reducer) 
// for whatever key we desire.
const mapStateToProps = (state) => {
    return {
      data: state.data
    }
 }

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })


 //connect returns a higher order component which then wraps App. 
 //This is how we connect state to props for App component.
export default connect(mapStateToProps, mapDispatchToProps)(App);
