import React from 'react';
import AlertContainer from 'react-alert';
import {
  Link,
  IndexLink,
} from 'react-router';

class QuotesButtons extends React.Component {
  constructor(props){
    super(props);
    this.alertOptions = {
      offset: 20,
      position: 'bottom right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  handleAddFavouriteQuote = event => {
    event.preventDefault();
    if(typeof this.props.quote === 'object') {
      let myQuotesList = JSON.parse(localStorage.getItem('quotes')) || [];
      if(myQuotesList.filter( quote => quote.quote === this.props.quote.quote).length === 0)  {
        let myUpdatedQuotesList = [this.props.quote,...myQuotesList];
        localStorage.setItem('quotes', JSON.stringify(myUpdatedQuotesList));

        this.msg.show('Your add new quote to your favourite list', {
          time: 2000,
          type: 'success',
        });


      } else {
        this.msg.show('This quote is already on your favourite list', {
          time: 2000,
          type: 'error',
        });
      }
    }
  }

  render() {
    return <section>
        <div>
          <button  onClick={ this.handleAddFavouriteQuote } >
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span>Add to my favourite Quotes</span></button>
          <Link to='/:favourites'>My Favourite Quotes</Link>
        </div>
      <alert>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </alert>
  </section>
  }
}

module.exports = QuotesButtons;
