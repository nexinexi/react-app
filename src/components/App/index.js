import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { GlobalStyles } from '../../assets/styles/GlobalStyles';

import Home from '../../pages/Home';
import Movies from '../../pages/Movie';
import NotFound from '../../pages/NotFound';

const App = () => (
  <>
    <GlobalStyles />
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/:id" component={Movies} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </>
);

export default App;