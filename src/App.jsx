import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { size } from './config/devices';
import Home from './pages/Home/Home';

function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: size.mobile });
  const isTabletScreen = useMediaQuery({ maxWidth: size.tablet })

  return (
    <>
      <Home
        isSmallScreen={isSmallScreen}
        isTabletScreen={isTabletScreen}
      />
    </>
  )
}

export default App
