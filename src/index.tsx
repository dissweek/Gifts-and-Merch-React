import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/app.scss";
import { BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Suspense } from 'react';
import './utilites/i18next'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Suspense>
      <Provider store={store}>
          <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);
