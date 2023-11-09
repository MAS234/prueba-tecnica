
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer';
import userOrdersReducer from '../reducers/useOrdensReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    userOrders: userOrdersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
