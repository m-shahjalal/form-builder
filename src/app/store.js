import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import formReducer from '../features/form/dataSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		formData: formReducer,
	},
});
