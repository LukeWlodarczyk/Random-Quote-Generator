import React from 'react';
import ReactDOM from 'react-dom';
import RandomQuotes from './randomQuotes/RandomQuotes.jsx';
import MyFavouriteQuotesPage from './myFavouriteQuotes/MyFavouriteQuotesPage.jsx';
import Main from './Main.jsx';
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory
} from 'react-router';

class App extends React.Component {

  render() {
    return <Router history={ hashHistory }>
      <Route path="/" component={ Main }>
        <IndexRoute component={ RandomQuotes }/>
        <Route path="/:favourites" component={ MyFavouriteQuotesPage }/>
        <Route path="/:quotes" component={ RandomQuotes }/>
      </Route>
    </Router>;
  }
}

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <App/>, document.querySelector('#app'));
});
