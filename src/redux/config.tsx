import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/root.reducer';
import storage from 'redux-persist/lib/storage';

// Setup the persist config
const PERSIST_CONFIG = {
    key: 'root',
    storage: storage,
    blacklist: ['auth'],
    purge: true,
    timeout: 1,
};

const reducer = persistReducer(PERSIST_CONFIG, rootReducer);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
