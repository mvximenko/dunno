import { useState, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
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
import store from './redux/store';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { GlobalStyle } from './GlobalStyles';

type UserAuth = { id: string } | null;

const App: React.VFC = () => {
  const [currentUser, setCurrentUser] = useState<UserAuth>(null);

  const [isOpen, setIsOpen] = useState(false);
  const searchIcon = useRef<HTMLDivElement>(null);
  const mobileSearchIcon = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef!.onSnapshot((snapShot) =>
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        );
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header
          currentUser={currentUser}
          setIsOpen={setIsOpen}
          searchIcon={searchIcon}
        />
        <SearchBar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          searchIcon={searchIcon}
          mobileSearchIcon={mobileSearchIcon}
        />
        <Switch>
          <Route exact path='/'>
            <Tv />
          </Route>
          <Route exact path='/movie'>
            <Movies />
          </Route>
          <Route exact path='/randomizer'>
            <Randomizer />
          </Route>
          <Route exact path='/tv/:titleId'>
            <Title userId={currentUser ? currentUser.id : null} />
          </Route>
          <Route exact path='/movie/:titleId'>
            <Title userId={currentUser ? currentUser.id : null} />
          </Route>
          <Route exact path='/person/:personId'>
            <Person />
          </Route>
          <Route exact path='/my-list'>
            <MyList userId={currentUser ? currentUser.id : null} />
          </Route>
          <Route exact path='/signin'>
            <SignIn isAuthenticated={currentUser ? true : false} />
          </Route>
          <Route exact path='/signup'>
            <SignUp isAuthenticated={currentUser ? true : false} />
          </Route>
        </Switch>
        <BottomNavbar
          currentUser={currentUser}
          setIsOpen={setIsOpen}
          searchIcon={mobileSearchIcon}
        />
      </Provider>
    </>
  );
};

export default App;
