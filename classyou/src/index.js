import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"
import { Auth0Provider, auth0Provider} from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId= process.env.REACT_APP_AUTH0_CLIENT_ID;

const client = new ApolloClient({
  uri: 'https://notable-meerkat-87.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {'x-hasura-admin-secret':'C3Q9zkmsMaju6mbYspYHkCI5s66AzrMbUpDFYwTvdK3jNmG8Y0a0mj9t4qAM2CTk'}
});


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={windows.location.origin}
    >
    <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ApolloProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
