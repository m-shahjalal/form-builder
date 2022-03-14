import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	formName: 'Dummy form',
	formHeader: 'Reservation form',
	FormInfo:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut optio tempore officia tenetur iure qui rem dolores. Accusantium mollitia pariatur totam sed incidunt itaque nemo, amet minus dicta aliquid.',
	totalSteps: 2,
	formSkeleton: [],
};

const dataSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		getForm: (state, { payload }) => {
			state.formSkeleton = payload;
		},
	},
});

export const { getForm } = dataSlice.actions;
export default dataSlice.reducer;
