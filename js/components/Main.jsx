import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx'

export default class Main extends React.Component {

  render() {
    return <div className = 'container'>
      <Header/>
      { this.props.children }
    </div>
  }
}
