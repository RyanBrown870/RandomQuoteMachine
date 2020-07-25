import React from 'react';

class QuoteBox extends React.Component {



    render() {


        return (
            <div className="row align-items-center">
                <div className="col-3"></div>
            <div className="col-6 card border-0 bg-white" id="quote-box">
                <div className="card-body">
                    
                    
                <div id="text">
        <blockquote className={"blockquote text-center text-" + this.props.color}><strong>"</strong>{this.props.quote.quote}</blockquote>
                </div>

                <div className="text-muted text-white" id="author">
                    <blockquote>
                        <footer className={"blockquote-footer text-right text-" + this.props.color}>{this.props.quote.author}</footer>
                        </blockquote>
        
                </div>

                
                <a 
                className={"btn btn-social-icon btn-twitter bg-" + this.props.color}
                href="https://twitter.com/intent/tweet"
                target="_blank"
                rel="noopener noreferrer"
                id="tweet-quote">
                    <span className="fa fa-twitter"></span>
                </a>

                <button className={"btn btn-default float-right text-white bg-" + this.props.color} id="new-quote" onClick={this.props.getQuote}>New quote</button>
                </div>
                
            </div>
            <div className="col-3"></div>
            
            </div>
        )
    }
}

export default QuoteBox;


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