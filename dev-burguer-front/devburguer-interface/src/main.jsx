import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/GlobalStyles'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks/index.jsx';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './config/stripeConfig.js';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard.js';
import { Router } from './routes/index.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>

 <ThemeProvider theme={standardTheme}>
    <AppProvider>
      <Elements stripe={stripePromise}>
       <BrowserRouter>
        <Router/>
       </BrowserRouter>
      </Elements>
      <GlobalStyle />
      <ToastContainer />
    </AppProvider>
 </ThemeProvider>


  </StrictMode>,
)


