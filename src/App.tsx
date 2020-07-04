import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Tv from './components/Tv';
import Movies from './components/Movies';
import Title from './components/Title';
import Person from './components/Person';
import Header from './components/layout/Header';
import { GlobalStyle } from './GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/tv' component={Tv} />
        <Route exact path='/movie' component={Movies} />
        <Route exact path='/tv/:titleId' component={Title} />
        <Route exact path='/movie/:titleId' component={Title} />
        <Route exact path='/person/:personId' component={Person} />
      </Switch>
    </>
  );
};

export default App;
