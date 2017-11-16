import React from 'react';
import AlertContainer from 'react-alert';
import {
  Link,
  IndexLink
} from 'react-router';

class MyFavouriteQuote extends React.Component {

  handleOnClickRemoveQuote = () => {
    if (typeof this.props.onRemoveQuote === 'function') {
      this.props.onRemoveQuote(this.props.quote);
    }
  }

  handleOnClickCopyQuote = () => {
    if (typeof this.props.onCopyQuote === 'function') {
      this.props.onCopyQuote(this.props.quote);
    }
  }

  render() {
    return <li className = 'favQuote'>
      <span>{ this.props.quote.quote }</span>
      <span className='author'>{ this.props.quote.author }</span>
      <div className='btns'>
        <button onClick={ this.handleOnClickRemoveQuote }>Delete me!</button>
        <button onClick={ this.handleOnClickCopyQuote }>Copy me!</button>
      </div>
    </li>;
  }
}

export default class MyFavouriteQuotesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myQuotes: []
    }
    this.alertOptions = {
      offset: 20,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };

    }

  addAnimationDelay = () => {

    const favQuotes = document.querySelectorAll('.favQuote');
    let delay = 0
    favQuotes.forEach((favQuote, index) => {
      favQuote.style.animationDelay = `${delay}s`
      delay += 0.3;
    })
  }

  getmyQuotes() {
    return JSON.parse(localStorage.getItem('quotes')) || [];
  }

  componentDidMount() {
    this.setState({
      myQuotes: this.getmyQuotes()
    });
  }

  componentDidUpdate() {
    this.addAnimationDelay()
  }


  onRemoveQuote = event => {
    const storageQuotes = JSON.parse(localStorage.getItem('quotes'));
    const updatedQuotes = storageQuotes.filter( quote => quote.quote != event.quote )
    localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
    this.setState({
      myQuotes: updatedQuotes,
    });
    this.msg.show('Your quote has been successfully removed', {
      time: 5000,
      type: 'success',
    });
  }

  onCopyQuote = event => {
    const textArea = document.createElement("textarea");
    textArea.value = `"${event.quote}" - ${event.author}`;

    document.body.appendChild(textArea);

    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';

      this.msg.show('Copying quote command was ' + msg, {
        time: 2000,
        type: 'success',
      });
    } catch (err) {
      this.msg.show('Oops, unable to copy', {
        time: 5000,
        type: 'error',
      });
    }

    document.body.removeChild(textArea);
  }


  render() {
    if (this.state.myQuotes.length < 1) {
      return <section className = 'favQuotesSection'>
        <p className='empty'>Empty! :(</p>
        <Link className = 'back' to='/'>
          <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
          <span>back to the Random Quote Generator</span>
        </Link>
        <alert>
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        </alert>
      </section>
    } else {
      const favouriteQuotes = this.state.myQuotes.map((el, index) => {
        return <MyFavouriteQuote key={ index } quote={ el } onRemoveQuote={ this.onRemoveQuote } onCopyQuote={ this.onCopyQuote }/>
      });
      return <section className = 'favQuotesSection'>
        <h2 className = 'favQuoteHeading'>My Favourite Quotes</h2>
        <ul className = 'favQuotesList'>
          {favouriteQuotes}
        </ul>
        <Link className = 'back' to='/'>
          <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
          <span>back to the Random Quote Generator</span>
        </Link>
        <alert>
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        </alert>
      </section>
    }
  }
}
