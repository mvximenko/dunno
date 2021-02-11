import { useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getUser } from './redux/slices/userSlice';
import Tv from './components/home/Tv';
import Movies from './components/home/Movies';
import Title from './components/title/Title';
import Randomizer from './components/randomizer/Randomizer';
import Person from './components/person/Person';
import MyList from './components/my-list/MyList';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Header from './components/layout/Header';
import SearchBar from './components/layout/SearchBar';
import BottomNavbar from './components/layout/BottomNavbar';
import PrivateRoute from './components/routing/PrivateRoute';
import { GlobalStyle } from './GlobalStyles';

const App: React.VFC = () => {
  const searchIcon = useRef<HTMLDivElement>(null);
  const mobileSearchIcon = useRef<HTMLDivElement>(null);

  useEffect(() => {
    store.dispatch(getUser());
    return () => store.dispatch(getUser());
  }, []);

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header searchIcon={searchIcon} />
        <SearchBar
          searchIcon={searchIcon}
          mobileSearchIcon={mobileSearchIcon}
        />
        <Switch>
          <Route exact path='/' component={Tv} />
          <Route exact path='/movie' component={Movies} />
          <Route exact path='/randomizer' component={Randomizer} />
          <Route exact path='/tv/:titleId' component={Title} />
          <Route exact path='/movie/:titleId' component={Title} />
          <Route exact path='/person/:personId' component={Person} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <PrivateRoute exact path='/my-list' component={MyList} />
        </Switch>
        <BottomNavbar searchIcon={mobileSearchIcon} />
      </Provider>
    </>
  );
};

export default App;
