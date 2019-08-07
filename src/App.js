import React from 'react';
import Nav from "./components/Nav/Nav";
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import styles from "./App.module.css";
import { Router } from '@reach/router';
import Articles from './components/Articles/Articles'
import Article from './components/Article/Article'
import ErrorPage from './utils/ErrorPage/ErrorPage';


class App extends React.Component {
  state = {
    userLoggedIn: "jessjelly"
  }

  render() {
    const { userLoggedIn } = this.state
    return (
      <div className={styles.main_app} >
        <Header userLoggedIn={userLoggedIn} />
        <Nav />
        <Router>
          <Home path='/' />
          <Articles path='/articles' />
          <Articles path='/articles/topic/:topic' loggedInAs={userLoggedIn} />
          <Article path='/articles/:article_id' loggedInAs={userLoggedIn} />
          <ErrorPage default />


        </Router>
      </div >
    );
  }
}

export default App;
