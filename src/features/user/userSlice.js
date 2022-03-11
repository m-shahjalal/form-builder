import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleLogin } from '../../api/authApi';

export const signUpHandler = createAsyncThunk(
	'auth/signup',
	async ({ email, password }) => {
		const user = await handleLogin(email, password);
		if (user !== 'admin@admin.com')
			throw new Error('credential mismatched');
		return user;
	}
);

export const authSlice = createSlice({
	name: 'counter',
	initialState: {
		loading: false,
		user: null,
		error: null,
	},
	extraReducers: {
		[signUpHandler.pending]: (state) => {
			state.loading = true;
		},
		[signUpHandler.rejected]: (state, action) => {
			state.user = null;
			state.loading = false;
			state.error = action.error.message;
		},
		[signUpHandler.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.error = null;
		},
	},
});

export default authSlice.reducer;
