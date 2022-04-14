import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import './App.css'


class App extends React.Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
