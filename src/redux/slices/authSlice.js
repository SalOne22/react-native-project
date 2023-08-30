import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const initialState = {};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default persistReducer(persistConfig, slice.reducer);
