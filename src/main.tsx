import { App } from './App';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './global.css';

// Start mock service worker in dev environment
async function startMockServiceWorker() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    await worker.start();
    worker.printHandlers();
  }
}

startMockServiceWorker()
  .then(() => {
    const root = createRoot(document.getElementById('root')!);
    root.render(
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    );
    return true;
  })
  .catch((error) => {
    console.log(error);
  });
