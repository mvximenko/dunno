import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Tv from './components/Tv';
import Movies from './components/Movies';
import Title from './components/Title';
import Randomizer from './components/Randomizer';
import Person from './components/Person';
import Auth from './components/Auth';
import Header from './components/layout/Header';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { GlobalStyle } from './GlobalStyles';

type UserAuth = { id: string } | null;

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<UserAuth>({ id: '' });

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef!.onSnapshot((snapShot) =>
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        );
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/dunno' component={Tv} />
        <Route exact path='/dunno/movie' component={Movies} />
        <Route exact path='/dunno/randomizer' component={Randomizer} />
        <Route exact path='/dunno/tv/:titleId' component={Title} />
        <Route exact path='/dunno/movie/:titleId' component={Title} />
        <Route exact path='/dunno/person/:personId' component={Person} />
        <Route exact path='/dunno/auth' component={Auth} />
      </Switch>
    </>
  );
};

export default App;
