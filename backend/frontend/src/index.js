import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchContextProvider } from './context/SearchContext.js';
import { AuthContextProvider } from './context/AuthContext';
import { SeatContextProvider } from './context/SeatContext';
import { BusContextProvider } from './context/BusContext';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BusContextProvider>
    <SeatContextProvider>
    <AuthContextProvider>
    <SearchContextProvider>
    <App />
    </SearchContextProvider>
    </AuthContextProvider>
    </SeatContextProvider>
    </BusContextProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
