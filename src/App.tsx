import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tv from './pages/Tv';
import Movies from './pages/Movies';
import Title from './pages/Title';
import Person from './pages/Person';
import Header from './components/Header';
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
