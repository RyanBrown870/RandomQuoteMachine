import React from 'react';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import { connect } from 'react-redux';
import ReactFCCtest from 'react-fcctest';

class App extends React.Component {
  constructor(props) {
    super(props);

    
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

      {/* We need:
            id="quote-box"
              id="text"
              id="author"
              id="new-quote" which is clickable
              a element with id="tweet-quote"

            On first load, quote machine displays random quote in id="text" plus id="author"

            new-quote element should fetch a new quote

            This a element should include the "twitter.com/intent/tweet" path in 
            its href attribute to tweet the current quote.

            Plan:

            1. setup components to display dummy data.
              1.a container components for logic, presentational for rendering.
              1.b Quote component (display), then QuoteResult (logic passed down to Quote)
            2. setup the quote API call in separate module.
            3. sort out CSS etc
        
      */}
        
        
        
      </header>
      <div>
        <ReactFCCtest />
      </div>
      
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

 //how to send actions in props to update redux store state
 const mapDispatchToProps = (dispatch) => {
   return {
  simpleAction: (data) => { dispatch(simpleAction(data)) }
 }
}


 //connect returns a higher order component which then wraps App. 
 //This is how we connect state to props for App component.
export default connect(mapStateToProps, mapDispatchToProps)(App);
