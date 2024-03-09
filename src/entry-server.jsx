import React from 'react'
// import ReactDOMServer from 'react-dom/server'
// import App from './App'

// export function render() {
//   const html = ReactDOMServer.renderToString(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   )
//   return { html }
// }


import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Router } from "./routes";



export const render = ({ path }) => {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </React.StrictMode>
  );
};