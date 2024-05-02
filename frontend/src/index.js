import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Fallback from './Components/Fallback/Fallback';
import TestsHub from './Components/Tests-hub/TestsHub';
import AccentTester from './Components/Accent-tester/AccentTester';
import TypingTester from './Components/Typing-tester/TypingTester';
import CameraTester from './Components/Camera-tester/CameraTester';
import ReactionTester from './Components/Reaction-tester/ReactionTester';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <Fallback />
      <Routes>
        <Route exact path="/" element={<TestsHub />} />
        <Route path="/AccentTester" element={<AccentTester />} />
        <Route path="/TypingTester" element={<TypingTester />} />
        <Route path="/ReactionTester" element={<ReactionTester />} />
        <Route path="/CameraTester" element={<CameraTester />} />
      </Routes>
    </Router>
  </React.StrictMode>
);