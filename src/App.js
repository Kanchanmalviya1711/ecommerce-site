import React, { Fragment, useState } from 'react';
import Login from "../src/pages/Login"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import Products from "../src/pages/Products"
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Checkout from './pages/Checkout';
import './App.css';



const App = () => {

  const [isLogin, setIsLogin] = useState(false)

  const changeLoginStatus = () => {
    setIsLogin(true)
  }

  console.log(isLogin, "25APPS")

  return (

    <div className="app">

      <Router>
        <Switch>
          <Fragment>
            <Header login={isLogin} />
            <Route exact path='/'><Login login={changeLoginStatus} /></Route>
            <Route exact path='/products' component={Products} />
            <Route exact path='/checkout' component={Checkout} />
          </Fragment>
        </Switch>
      </Router>
      <Footer />

    </div>
  )
}

export default App

