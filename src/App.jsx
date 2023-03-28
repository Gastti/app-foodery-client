import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import OrderPage from './pages/OrderPage/OrderPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import AuthPage from './pages/AuthPage/AuthPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { AuthProvider, AuthRoute } from './services/auth';
import { ConfigProvider } from './contexts/ConfigContext';

function App() {
  return (
    <HashRouter>
      <ConfigProvider>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <Home />
            } />

            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/welcome" element={
              <AuthRoute>
                <WelcomePage />
              </AuthRoute>
            } />
            <Route path="/profile" element={
              <AuthRoute>
                <WelcomePage />
              </AuthRoute>
            } />
          </Routes>
        </AuthProvider>
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
