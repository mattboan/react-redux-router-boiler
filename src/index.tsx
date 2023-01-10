import './styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/config';
import { RootRouter } from './router/RootRouter';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Render the application
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <RootRouter />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
