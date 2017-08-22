import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'

// takes reducer and returns a new store object
const store = createStore(
  reducer,
  /*
      if the redux devtools extension lives on our window object,
      then window.__REDUX_DEVTOOLS_EXTENSION__() gets executed
  */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

console.log(store)
console.log(store.getState())

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
