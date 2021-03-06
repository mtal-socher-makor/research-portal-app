import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, END_POINT } from '../../utils/constants';

// Reducer
export const chosenCompanySlice = createSlice({
	name: 'chosenCompany',
	initialState: {
		chosenCompany: null,
	},
	reducers: {
		changeChosenCompany: (state, action) => {
			state.chosenCompany = action.payload;
		},
	},
});

// Selectors
export const selectChosenCompany = (state) => state.chosenCompany.chosenCompany;

export const { changeChosenCompany } = chosenCompanySlice.actions;

export const getChosenCompanyAsync = (id) => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');

		const res = await axios.get(`${BASE_URL}${END_POINT.COMPANY}/${id}`, {
			headers: { Authorization: token },
		});

		if (res.status === 200) {
			dispatch(changeChosenCompany(res.data));
		}
	} catch (error) {
		/* eslint no-console: "off" */
		console.log(error, error.message);
	}
};

export default chosenCompanySlice.reducer;
