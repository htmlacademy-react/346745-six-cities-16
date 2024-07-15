import MainPage from '../../pages/main-pqge/main-pqge.tsx';
import {ICardOffer} from '../../types/offer-card-types.ts';

interface IAppProps {
  cardOffer: ICardOffer[];
}

function App({cardOffer}: IAppProps):JSX.Element {
  return (<MainPage cardOffer={cardOffer} />);
}

export default App;
