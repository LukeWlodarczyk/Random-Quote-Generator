import React from 'react';
import {
  Link,
  IndexLink
} from 'react-router';

class Header extends React.Component {
  render() {
    return <div className = 'container'>
      <header className='header'>
        <Link to='/'>Random <span>Quote</span> Generator</Link>
      </header>
    </div>
  }
}

module.exports = Header;