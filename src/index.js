import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux-modules/store';
import { fetchProducts } from '../src/redux-modules/products/productActions';
import { fetchCategories } from '../src/redux-modules/categories/categoryActions';
import 'react-toastify/dist/ReactToastify.css';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";



store.dispatch(fetchProducts());
store.dispatch(fetchCategories());

Sentry.init({
  dsn: "https://88b45297207e44a7a5f9df8f359d2308@o1103902.ingest.sentry.io/6130495",
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
    <Provider store={store}>
    <App />
    </Provider>
    </Sentry.ErrorBoundary>;
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

