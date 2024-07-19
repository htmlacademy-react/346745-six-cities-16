import {Link, useRouteError} from 'react-router-dom';
import {AppRoute} from '../../types/route-types.ts';

function ErrorPage(): JSX.Element {
  const error = useRouteError();

  let message = '404. Page not found';

  if (error instanceof Error) {
    message = error.message;
  }

  return (
    <section className="game__screen">
      <h1>{message}</h1>
      <Link to={AppRoute.Root}>Вернуться на главную</Link>
    </section>
  );
}

export default ErrorPage;
