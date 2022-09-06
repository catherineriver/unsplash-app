import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById('root')!;
const root = createRoot(container);

const domainValue: string = (process.env.REACT_APP_PROVIDER as string);
const clientValue: string = (process.env.REACT_APP_UNSPLASH_API_KEY as string);
const redirectUri: string = (process.env.REACT_APP_REDIRECT_URI as string);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Auth0Provider
            domain={domainValue}
            clientId={clientValue}
            redirectUri={redirectUri}
            response_type='code'
            scope='public+write_likes'
        >
            <App />
        </Auth0Provider>,
    </Provider>
  </React.StrictMode>
);
