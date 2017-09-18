import React from 'react';

class GetRandomQuote extends React.Component {


  onHandleClick = () => {
      if ( typeof this.props.onMyClick === 'function' ){
          this.props.onMyClick();
      }
  };


  render() {
    return <button onClick = {this.onHandleClick}>Get Random Quote</button>
  }


}

 module.exports = GetRandomQuote;
