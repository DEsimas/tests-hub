import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import TestsHub from './Components/Tests-hub/TestsHub';
import AccentTester from './Components/Accent-tester/AccentTester';
import TypingTester from './Components/Typing-tester/TypingTester';
import ReactionTester from './Components/Reaction-tester/ReactionTester';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/"><TestsHub/></Route>
        <Route path="/AccentTester"><AccentTester/></Route>
        <Route path="/TypingTester"><TypingTester/></Route>
        <Route path="/ReactionTester"><ReactionTester/></Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);