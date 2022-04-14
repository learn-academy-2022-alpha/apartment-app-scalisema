import React, { Component } from 'react'
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Home exact path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App