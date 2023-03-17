import './App.css'

import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoDetailsItem from './components/VideoDetailsItem'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/login" component={Login} />
          <>
            <Header />
            <div>
              <Navbar />
              <div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/trending" component={Trending} />
                  <Route exact path="/gaming" component={Gaming} />
                  <Route exact path="/saved-videos" component={SavedVideos} />
                  <Route
                    exact
                    path="/videos/:id"
                    component={VideoDetailsItem}
                  />
                  <Route path="/not-found" component={NotFound} />
                  <Redirect to="not-found" />
                </Switch>
              </div>
            </div>
          </>
        </Switch>
      </>
    )
  }
}

export default App
