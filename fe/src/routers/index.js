import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import SingleProduct from '../pages/SingleProduct';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Register from '../pages/Register';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import Wishlist from '../pages/Wishlist';

export default function Routers() {
  return (
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/my-account">
        <MyAccount />
      </Route>
      <Route path="/wishlist">
        <Wishlist />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/blog/abc">
        <BlogDetail />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/single-product">
        <SingleProduct />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}
