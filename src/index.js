import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LanguageProvider from './contexts/LanguageProvider';
import './index.css';
import store from './Redux/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <LanguageProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </LanguageProvider>
    </Provider>
);


