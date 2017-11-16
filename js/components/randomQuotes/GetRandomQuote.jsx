import React from 'react';

export default class GetRandomQuote extends React.Component {


  onHandleClick = () => {
      if ( typeof this.props.onMyClick === 'function' ){
          this.props.onMyClick();
      }
  };


  render() {
    return <button className='getRandom' onClick = {this.onHandleClick}>Get Random Quote</button>
  }


}
