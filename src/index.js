import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import { Provider } from "react-redux";
import { browserHistory, Router, Route } from "react-router";
import store from "./store.js";

document.addEventListener( "DOMContentLoaded", function () {
  const reactNode = document.getElementById( "react-node" );

  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>

        </Route>


      </Router>
    </Provider>
    ,
    reactNode
  );
} );
