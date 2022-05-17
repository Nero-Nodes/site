import { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import HomeWrapper from './home/HomeWrapper';
import TermsContainer from './legal/TermsContainer';
import PrivacyContainer from  './legal/PrivacyContainer';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeWrapper />} />
      <Route path="/legal/terms" element={<TermsContainer />} />
      <Route path="/legal/privacy" element={<PrivacyContainer />} />
      <Route path="/*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default App;
