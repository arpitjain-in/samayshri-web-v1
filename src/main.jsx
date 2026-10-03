import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// rates.samayshri.com serves only the rate card; every other host gets the main site.
// Loaded dynamically so rate card visitors don't download the main site's bundle.
const isRatesSite =
  window.location.hostname.startsWith('rates.') ||
  window.location.pathname.replace(/\/$/, '') === '/rates'

const loadRoot = isRatesSite ? import('./pages/RateCard.jsx') : import('./App.jsx')

loadRoot.then(({ default: Root }) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
  )
})
