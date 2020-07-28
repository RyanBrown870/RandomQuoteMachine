import React from 'react';

class QuoteBox extends React.Component {

    render() {
        return (
            <div className={'container-fluid bg-' + this.props.color} style={{ height: "100vh" }}>
                <div className="row"></div>
                <div className="row align-items-center my-auto">
                    <div className="col-3"></div>
                    <div className="col-6 card border-0 bg-white" id="quote-box">
                        <div className="card-body">
                            <div id="text">
                                <blockquote className={"blockquote text-center text-" + this.props.color}><strong>"</strong>{this.props.quote}</blockquote>
                            </div>
                            
                            <div className="text-muted text-white" id="author">
                                <blockquote>
                                    <footer className={"blockquote-footer text-right text-" + this.props.color}>{this.props.author}</footer>
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

                            <button className={"btn btn-default float-right text-white bg-" + this.props.color} id="new-quote" onClick={this.props.getQuoteAction}>New quote</button>
                        </div>

                    </div>
                    <div className="col-3"></div>

                </div>
                <div className="row"></div>
            </div>
        )
    }
}

export default QuoteBox;

