import {AuthStatus} from '../types/common.ts';
import {AppRoute} from '../types/route-types.ts';
import {ReactNode} from 'react';
import {Navigate} from 'react-router-dom';

interface AccessRouteProps {
  children: ReactNode;
  status: AuthStatus;
}

const createAccessRoute = (statusTOCheck: AuthStatus, fallbackPath: AppRoute) =>
  function AccessRoute({children, status}: AccessRouteProps) {
    if (status === 'UNKNOWN') {
      return 'Loading...';
    }

    if (status === statusTOCheck) {
      return children;
    }
    return <Navigate to={fallbackPath}/>;
  };

const PrivateRoute = createAccessRoute('AUTH', AppRoute.Login);
const PublicRoute = createAccessRoute('NO_AUTH', AppRoute.Root);

export {PrivateRoute, PublicRoute};
