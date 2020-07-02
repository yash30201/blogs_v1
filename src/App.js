import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import Post from './Components/Post'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/About' component={About} />
                        <Route path='/Posts' component={Posts} />
                        <Route path='/:post_id' component={Post} />
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }
}
