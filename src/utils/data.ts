import {ICardOffer, IOfferImageData} from '../types/offer-card-types.ts';

export const cardOffer: ICardOffer[] = [
  {
    image: 'img/apartment-01.jpg',
    premium: true,
    price: 120,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    favorites: false,
    rating: 4
  },
  {
    image: 'img/room.jpg',
    premium: false,
    price: 80,
    title: 'Wood and stone place',
    type: 'room',
    favorites: true,
    rating: 4
  },
  {
    image: 'img/apartment-02.jpg',
    premium: false,
    price: 132,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    favorites: false,
    rating: 4
  },
  {
    image: 'img/apartment-03.jpg',
    premium: true,
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    favorites: false,
    rating: 5
  },
  {
    image: 'img/room.jpg',
    premium: false,
    price: 80,
    title: 'Wood and stone place 2',
    type: 'Room',
    favorites: true,
    rating: 4
  }
];

export const favoritesOffer: ICardOffer[] = [
  {
    image: 'img/apartment-small-03.jpg',
    premium: true,
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    favorites: true,
    rating: 5
  },
  {
    image: 'img/room-small.jpg',
    premium: false,
    price: 80,
    title: 'Wood and stone place',
    type: 'room',
    favorites: true,
    rating: 4
  },
  {
    image: 'img/apartment-small-04.jpg',
    premium: false,
    price: 180,
    title: 'White castle',
    type: 'Apartment',
    favorites: true,
    rating: 5
  }
];

export const offerImageData: IOfferImageData[] = [
  {
    id: 1,
    image: 'img/room.jpg',
    alt: 'Photo studio'
  },
  {
    id: 2,
    image: 'img/apartment-01.jpg',
    alt: 'Photo studio'
  },
  {
    id: 3,
    image: 'img/apartment-02.jpg',
    alt: 'Photo studio'
  },
  {
    id: 4,
    image: 'img/apartment-03.jpg',
    alt: 'Photo studio'
  },
  {
    id: 5,
    image: 'img/studio-01.jpg',
    alt: 'Photo studio'
  },
  {
    id: 6,
    image: 'img/apartment-01.jpg',
    alt: 'Photo studio'
  }
];
