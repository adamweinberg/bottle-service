import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm'
import AllProducts from './components/AllProducts'
import Cart from './components/Cart'
import MyAccount from './components/MyAccount'
import { me } from './store'
import Checkout from './components/checkout/Checkout'
import AdminOptions from './components/AdminOptions'
import AllUsers from './components/AllUsers'
import Landing from './components/Landing'

const Routes = () => {
  const dispatch = useDispatch()
  const { id: isLoggedIn } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <div>
      {!!isLoggedIn ? (
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/myaccount">
            <MyAccount />
          </Route>
          <Route exact path="/products">
            <AllProducts />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/adminOptions">
            <AdminOptions />
          </Route>
          <Route exact path="/allUsers">
            <AllUsers />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/products">
            <AllProducts />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      )}
    </div>
  )
}

export default Routes
