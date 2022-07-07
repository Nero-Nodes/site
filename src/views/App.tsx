import { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';
import HomeWrapper from './home/HomeWrapper';
import TermsContainer from './legal/TermsContainer';
import PrivacyContainer from  './legal/PrivacyContainer';
import NotFound from './NotFound';
import Latest from './news/Latest';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeWrapper />} />
      <Route path="/legal/terms" element={<TermsContainer />} />
      <Route path="/legal/privacy" element={<PrivacyContainer />} />
      <Route path="/news/latest" element={<Latest />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
