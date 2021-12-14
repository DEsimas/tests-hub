import React from 'react';
import ReactDOM from 'react-dom';

import TestsHub from './Components/Tests-hub/TestsHub';
import AccentTester from './Components/Accent-tester/AccentTester';
import TypingTester from './Components/Typing-tester/TypingTester';
import ReactionTester from './Components/Reaction-tester/ReactionTester';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <TestsHub/>
    <AccentTester/>
    <TypingTester/>
    <ReactionTester/>
  </React.StrictMode>,
  document.getElementById('root')
);