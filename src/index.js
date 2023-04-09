import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store";

import "./index.css";
import "normalize.css";
import "react-modern-drawer/dist/index.css";
import theme from "./theme";
import { ThemeProvider } from "theme-ui";
import { BrowserRouter } from "react-router-dom";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = document.getElementById("root")

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
  // </React.StrictMode>,
  root
);
