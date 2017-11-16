import React from 'react';
import {
  Link,
  IndexLink
} from 'react-router';

export default class Header extends React.Component {
  render() {
    return <div className = 'container'>
      <header className='header'>
        <Link className='logo' to='/'>Random <span>Quote</span> Generator</Link>
      </header>
    </div>
  }
}
