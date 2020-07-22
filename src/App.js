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
JSON.stringify(this.props)
}
</pre>
        <button onClick={this.simpleAction}>Test redux action</button>
      </header>
    </div>
  );
   }
}

// Redux code:

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
