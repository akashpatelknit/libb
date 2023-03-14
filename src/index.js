import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
     domain="dev-qjse0h14uy5n0cp1.us.auth0.com"
     clientId="6wQi5wXzCIR07C5TW8GtlvGEU1c5ZSrj"
    authorizationParams={{
     redirect_uri: window.location.origin
    }}
  >
    <App />
    
 </Auth0Provider>

    
);

