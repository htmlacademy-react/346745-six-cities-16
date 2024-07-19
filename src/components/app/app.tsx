import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from '../../pages/main-pqge/main-pqge.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import ErrorPage from '../../pages/error-page/error-page.tsx';
import {AppRoute} from '../../types/route-types.ts';
import {ICardOffer, IOfferImageData} from '../../types/offer-card-types.ts';
import {PrivateRoute, PublicRoute} from '../access-route.tsx';
import {HelmetProvider} from 'react-helmet-async';

interface IAppProps {
  cardOffer: ICardOffer[];
  offerImageData: IOfferImageData[];
  favoritesOffer: ICardOffer[];
}

const currentStatus = 'AUTH';


function App({cardOffer, offerImageData, favoritesOffer}: IAppProps): JSX.Element {

  const router = createBrowserRouter([{
    children: [
      {
        element: <MainPage cardOffer={cardOffer}/>,
        index: true
      },
      {
        element: (<PrivateRoute status={currentStatus}><FavoritesPage favoritesOffer={favoritesOffer}/></PrivateRoute>),
        path: AppRoute.Favorites
      },
      {
        element: <OfferPage offerImageData={offerImageData} cardOffer={cardOffer}/>,
        path: AppRoute.Offer
      },
      {
        element: (<PublicRoute status={currentStatus}><LoginPage/></PublicRoute>),
        path: AppRoute.Login
      }
    ],
    errorElement: <ErrorPage/>
  }
  ]);

  return <HelmetProvider><RouterProvider router={router}/></HelmetProvider>;

}

export default App;
