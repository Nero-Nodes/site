import { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import HomeWrapper from './home/HomeWrapper';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeWrapper />} />
      <Route path="/*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default App;
