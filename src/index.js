import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'

// takes reducer and returns a new store object
// The state of Redux is stored in the Store.
const store = createStore(
  reducer,
  /*
  if the redux devtools extension lives on our window object,
  then window.__REDUX_DEVTOOLS_EXTENSION__() gets executed
  */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

/*
The store can be used to dispatch actions,
get the current state of the store, and subscribe to any changes.
*/
console.log("store in src/index.js", store)
console.log("store.getState() in src/index.js", store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
