import React from "react";
import ReactDOM from "react-dom";
// Move this to a separate Index.js page as it will the main default homepage
import "./index.css";
import App from "./App";
import {
  // BrowserRouter as Router, Route, Routes,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet
        titleTemplate="Cuong Minh Vu | %s"
        defaultTitle="Cuong Minh Vu"
        defer={false}
      >
        <meta name="description" content="Cuong Minh Vu's Personal Website " />
      </Helmet>
    </HelmetProvider>
    <BrowserRouter>
      <Routes exact path="/">
        <Route index element={<App />} />
        <Route path="About" element={<App titlePostfix="About" />} />
        <Route path="Projects" element={<App titlePostfix="Projects" />} />
        <Route path="Resume" element={<App titlePostfix="Resume" />} />
        <Route path="Query" element={<App titlePostfix="Query" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
