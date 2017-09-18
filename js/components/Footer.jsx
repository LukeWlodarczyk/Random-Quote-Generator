import React from 'react';
import {
  Link,
  IndexLink
} from 'react-router';

class Footer extends React.Component {
  render() {
    return <div className = 'container'>
      <footer className='footer'>
        <Link to='/'>Random <span>Quote</span> Generator</Link>
      </footer>
    </div>
  }
}

module.exports = Footer;
