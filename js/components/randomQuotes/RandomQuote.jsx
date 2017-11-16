import React from 'react';

export default class RandomQuote extends React.Component {
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
      <p>{this.state.quote}</p>
      <p className='author'>{this.state.author}</p>
    </section>

  }
}
