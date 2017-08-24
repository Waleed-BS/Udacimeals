import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'

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
console.log("store")
console.log(store)
console.log("store.getState()")
console.log(store.getState())


ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
