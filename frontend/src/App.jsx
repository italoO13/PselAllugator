import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProviderApp from './contexts/providerApp';
import Home from './pages/Home';

function App() {
  return (
    <ProviderApp>

      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>

    </ProviderApp>
  );
}

export default App;
