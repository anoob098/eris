import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

// Import global styles
import './index.css'

// Import fonts
const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
`;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>,
)