import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterReducer'
import colorReducer from '../reducers/colorReducer'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import {
    persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from 'redux-persist'


const rootReducer = combineReducers({
    counter: counterReducer,
    color: colorReducer
})


const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['counter']
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
const persistor = persistStore(store)

export { store, persistor }


