
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import Calculator from './features/calculator/Calculator';
import store from '/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="App">
          <Calculator />
        </div>
      </Provider>
    </div>
  );
}

export default App;
