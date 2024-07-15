import CardOffer from '../../components/card-offer/card-offer.tsx';
import {ICardOffer} from '../../types/offer-card-types.ts';

interface FavoritesPageProps {
  favoritesOffer: ICardOffer[];
}

function FavoritesPage({favoritesOffer}: FavoritesPageProps): JSX.Element {
  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoritesOffer.slice(0, 2).map((favorite) => (
                    <CardOffer
                      key={favorite.title}
                      image={favorite.image}
                      premium={favorite.premium}
                      price={favorite.price}
                      title={favorite.title}
                      type={favorite.type}
                      favorites={favorite.favorites}
                      rating={favorite.rating}
                      className='favorites'
                      width={150}
                      height={110}
                    />
                  ))}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {favoritesOffer.slice(2, 3).map((favorite) => (
                    <CardOffer
                      key={favorite.title}
                      image={favorite.image}
                      premium={favorite.premium}
                      price={favorite.price}
                      title={favorite.title}
                      type={favorite.type}
                      favorites={favorite.favorites}
                      rating={favorite.rating}
                      className='favorites'
                      width={150}
                      height={110}
                    />
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FavoritesPage;
