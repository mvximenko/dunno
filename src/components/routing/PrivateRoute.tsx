import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

interface PrivateRouteProps extends RouteProps {
  component: (props: RouteProps) => JSX.Element;
}

const PrivateRoute: React.VFC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const userId = useSelector((state: RootState) => state.user.userId);
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
