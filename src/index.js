import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

import TestsHub from './Components/Tests-hub/TestsHub';
import AccentTester from './Components/Accent-tester/AccentTester';
import TypingTester from './Components/Typing-tester/TypingTester';
import ReactionTester from './Components/Reaction-tester/ReactionTester';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/AccentTester" element={<AccentTester/>}/>
        <Route path="/TypingTester" element={<TypingTester/>}/>
        <Route path="/ReactionTester" element={<ReactionTester/>}/>
        <Route path="/tests-hub" element={<TestsHub/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);