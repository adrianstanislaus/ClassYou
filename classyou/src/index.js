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
  useQuery,
  gql
} from "@apollo/client"

const client = new ApolloClient({
  uri: 'https://notable-meerkat-87.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {'x-hasura-admin-secret':'C3Q9zkmsMaju6mbYspYHkCI5s66AzrMbUpDFYwTvdK3jNmG8Y0a0mj9t4qAM2CTk'}
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
