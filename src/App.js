import React from 'react';
// import { Router } from "@reach/router";
import Nav from "./components/Nav/Nav";
import Header from './components/Header/Header'

import styles from "./App.module.css";


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
        <p>
          nc news
       </p>
      </div >
    );
  }
}

export default App;
