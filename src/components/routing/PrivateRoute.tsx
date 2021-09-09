import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from '@/redux/store';
import Spinner from '../layout/Spinner';

interface PrivateRouteProps extends RouteProps {
  component: (props: RouteProps) => JSX.Element;
}

const PrivateRoute: React.VFC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const userId = useSelector((state) => state.user.userId);
  const loading = useSelector((state) => state.user.loading);

  if (loading) return <Spinner />;

  return (
    <Route
      {...rest}
      render={(props) =>
        userId ? <Component {...props} /> : <Redirect to='/signin' />
      }
    />
  );
};

export default PrivateRoute;
