import React from 'react';
import ReactDOM from 'react-dom/client';
import {cardOffer, favoritesOffer, offerImageData} from './utils/data.ts';
import App from './components/app/app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardOffer={cardOffer}
      offerImageData={offerImageData}
      favoritesOffer={favoritesOffer}
    />
  </React.StrictMode>
);
