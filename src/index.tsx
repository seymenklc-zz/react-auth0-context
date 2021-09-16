import ReactDOM from 'react-dom';

import { Auth0Provider } from '@auth0/auth0-react';

import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

import App from './App';
import './index.css';

//AUTH0 CONFIG
const domain: string = (process.env.REACT_APP_AUTH0_DOMAIN as string);
const clientId: string = (process.env.REACT_APP_AUTH0_CLIENT_ID as string);

ReactDOM.render(
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Auth0Provider>,
    document.getElementById('root')
);