import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from '../pages/Home';
import Category from '../pages/Category';
import SingleProduct from '../pages/SingleProduct';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Register from '../pages/Register';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import MyOrder from '../pages/MyOrder';
import Favorites from '../pages/Favorites';
import AboutUs from '../pages/AboutUs';

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
      <Route path="/my-order">
        <MyOrder />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about-us">
        <AboutUs />
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
      <Route
        path="/product/:slug"
        render={props => {
          const {
            match: {
              params: { slug }
            }
          } = props;
          return (
            <SingleProduct
              key={slug}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/category/:slug"
        render={props => {
          const {
            match: {
              params: { slug }
            }
          } = props;
          return (
            <Category
              key={slug}
              {...props}
            />
          );
        }}
      />
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}
