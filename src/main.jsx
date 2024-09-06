import React from "react";
import ReactDOM from "react-dom/client";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from "./Layout.jsx";
import Home from "./components/LandingPage/Home.jsx";
import User from "./components/LandingPage/User.jsx";
import CurrencyConverter from "./components/Currency-converter/CurrencyConverter.jsx";
import PasswordGenerator from "./components/Password-Generator.jsx";
import Counter from "./components/Counter.jsx";
import Github, { githubInfoLoader } from './components/Github.jsx'

import "./index.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>{/* The layout is a parent route. All child routes below will be rendered inside the Layout component. */}
      <Route path="" element={<Home />} />
      <Route path="counter" element={<Counter/>} />
      <Route path="currency-converter" element={<CurrencyConverter />} />
      <Route path="password-generator" element={<PasswordGenerator />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
//The loader prop in React Router lets you fetch or prepare data for a route before rendering the component.This function is run before the Github component is rendered, and the fetched data is passed to the component via useLoaderData().

// Render the application using `ReactDOM.createRoot`.
// The `RouterProvider` passes the router configuration to the app.
//StrictMode helps detect side effects in your code by intentionally rendering components twice (in development only) to ensure that no unexpected side effects occur during rendering. 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>{/* Provides the router context to the app */}
  </React.StrictMode>
);
