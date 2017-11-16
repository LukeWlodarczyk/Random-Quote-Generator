import React from 'react';
import AlertContainer from 'react-alert';
import {
  Link,
  IndexLink,
} from 'react-router';

export default class QuotesButtons extends React.Component {
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
      const myQuotesList = JSON.parse(localStorage.getItem('quotes')) || [];
      if(myQuotesList.filter( quote => quote.quote === this.props.quote.quote).length === 0)  {
        const myUpdatedQuotesList = [this.props.quote,...myQuotesList];
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
        <div className='btnsContainer'>
          <button className='btnAdd'  onClick={ this.handleAddFavouriteQuote } >
            <i className="fa fa-heart heart" aria-hidden="true"></i>
            <span>Add to my favourite Quotes</span></button>
          <Link className='favourites' to='/:favourites'>My Favourite Quotes</Link>
        </div>
      <alert>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      </alert>
  </section>
  }
}
