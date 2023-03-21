import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { size } from './config/devices';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import OrderPage from './pages/OrderPage/OrderPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';
import AuthPage from './pages/AuthPage/AuthPage';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import { AuthProvider } from './services/auth';

function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: size.mobile });
  const isTabletScreen = useMediaQuery({ maxWidth: size.tablet });
  const [language, setLanguage] = useState('')

  useEffect(() => {
    setLanguage(navigator.language || 'en-US')
  }, [])

  return (
    <HashRouter>
      <AuthProvider>
        <Navbar isTabletScreen={isTabletScreen} />
        <Routes>
          <Route path="/" element={
            <Home
              isSmallScreen={isSmallScreen}
              isTabletScreen={isTabletScreen}
              language={language}
            />
          } />

          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  )
}

export default App
