try {
  let currentFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get() {
      return currentFetch;
    },
    set(newFetch) {
      currentFetch = newFetch;
    },
    configurable: true,
    enumerable: true,
  });
} catch {
  // Ignore re-definition error
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
