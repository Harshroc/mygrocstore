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



store.dispatch(fetchProducts());
store.dispatch(fetchCategories());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

