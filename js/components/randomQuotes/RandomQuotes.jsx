import React from 'react';
import GetRandomQuote from './GetRandomQuote.jsx';
import RandomQuote from './RandomQuote.jsx';
import QuotesButtons from './QuotesButtons.jsx';

class RandomQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      loading: true
    }
  }


  getRandomQuote = () => {
    const baseUrl = 'https://talaikis.com/api/quotes/random/';
        fetch(baseUrl)
          .then( data => {
            if(data.ok){
                return data.json();
            }else{
                throw new Error('Error getting data');
            }
        }).then(data => {
          this.setState({
            quote: data,
            loading: false,
          });
        })
        .catch(error => {
          console.log(error);
        });

  }

  componentDidMount() {
    this.getRandomQuote();
  }


    render() {
      if(this.state.loading) {
        return null;
      } else {
        return <div className = 'container'>
          <GetRandomQuote onMyClick={this.getRandomQuote} />
          <RandomQuote quote = {this.state.quote} />
          <QuotesButtons quote = {this.state.quote}/>
        </div>
      }
    }
}

 module.exports = RandomQuotes;
