import React from 'react';
import ReactDOM from 'react-dom/client';
import {cardOffer, favoritesOffer, offerImageData} from './utils/data.ts';
import App from './components/app/app.tsx';
import OfferPage from './pages/offer-page/offer-page.tsx';
import FavoritesPage from './pages/favorites-page/favorites-page.tsx';
import LoginPage from './pages/login-page/login-page.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardOffer={cardOffer}/>
    <OfferPage
      offerImageData={offerImageData}
      cardOffer={cardOffer}
    />
    <FavoritesPage favoritesOffer={favoritesOffer}/>
    <LoginPage/>
  </React.StrictMode>
);
