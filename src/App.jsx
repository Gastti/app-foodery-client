import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ConfigProvider } from './contexts/ConfigContext';
import AppUI from './AppUI';

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <AuthProvider>
          <AppUI />
        </AuthProvider>
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
