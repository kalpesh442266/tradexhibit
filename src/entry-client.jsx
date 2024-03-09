import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Router } from './routes';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)

// import ReactDOM from "react-dom/client";

// import { Router } from "./router";

// ReactDOM.hydrateRoot(
//   document.getElementById("app") as HTMLElement,
//   <BrowserRouter>
//     <Router />
//   </BrowserRouter>
// );