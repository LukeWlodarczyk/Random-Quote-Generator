import React from 'react';

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.quote.author,
      quote: this.props.quote.quote,
    }
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
      author: nextProps.quote.author,
      quote: nextProps.quote.quote,
    });
  }



  render() {
    return <section className='randomQuote'>
      <p>{this.state.author}</p>
      <p>{this.state.quote}</p>
    </section>

  }
}

module.exports = RandomQuote;
