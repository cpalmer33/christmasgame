import React, {useState} from 'react'
import Slide from './Slide'
import SlideTwo from './SlideTwo'
import SlideThree from './SlideThree'
import SlideFour from './SlideFour'
import SlideFive from './SlideFive'
import LandingPage from './LandingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Loading from './Loading'


function App() {


    return (
        <>
        <div className="app">
        <Router>
            <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/slide" exact component={Slide}/>
            <Route path="/slidetwo" exact component={SlideTwo}/>
            <Route path="/slidethree" exact component={SlideThree}/>
            <Route path="/slidefour" exact component={SlideFour}/>
            <Route path="/slidefive" exact component={SlideFive}/>
            </Switch>
        </Router>
        </div>
        </>
    )
}

export default App
