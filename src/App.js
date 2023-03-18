import './App.css'

import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
//import Header from './components/Header'
//import Navbar from './components/Navbar'
import Home from './components/Home'
//import Trending from './components/Trending'
//import Gaming from './components/Gaming'
//import SavedVideos from './components/SavedVideos'
//import VideoDetailsItem from './components/VideoDetailsItem'
//import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </>
    )
  }
}

export default App
