import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	formId: '',
	header: '',
	info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut optio tempore officia tenetur iure qui rem dolores. Accusantium mollitia pariatur totam sed incidunt itaque nemo, amet minus dicta aliquid.',
	totalSteps: 2,
	field: [],
};

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		createForm: (state, { payload }) => {
			state.formId = payload.id;
			state.header = payload.header;
			state.info = payload.info;
		},
		addField: (state, { payload }) => {
			state.field.push(payload);
		},
	},
});

export const { createForm, addField } = counterSlice.actions;
export default counterSlice.reducer;
