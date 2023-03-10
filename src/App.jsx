import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { size } from './config/devices';
import Home from './pages/Home/Home';

function App() {
  const isSmallScreen = useMediaQuery({ maxWidth: size.mobile });
  const isTabletScreen = useMediaQuery({ maxWidth: size.tablet });
  const [language, setLanguage] = useState('')

  useEffect(() => {
    setLanguage(navigator.language || 'en-US')
  }, [])

  return (
    <>
      <Home
        isSmallScreen={isSmallScreen}
        isTabletScreen={isTabletScreen}
        language={language}
      />
    </>
  )
}

export default App
