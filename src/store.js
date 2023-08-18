import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './components/Redux/slices';
export const store = configureStore({
	reducer: {
		counter: counterSlice,
	},
});
