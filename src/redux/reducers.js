import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
import researchesReducer from './researches/researchesSlice';
import subscribersReducer from './subscribers/subscribersSlice';
import snackBarReducer from './SnackBar/reducer';
import companiesReducer from './companies/companiesSlice';
import chosenCompanyReducer from './companies/chosenCompanySlice';
import utilsReducer from './utils/utilsSlice';
import usersReducer from './users/usersSlice';
import contractReducer from './subscribers/contractSlice';
import chosenResearchReducer from './researches/chosenResearchSlice';
import chosenUserReducer from './users/chosenUserSlice';
import tabsReducer from './tabs/tabsSlice';
import searchReducer from './search/searchSlice';
import categoriesReducer from './categories/categoriesSlice';
import notificationsReducer from './notifications/notificationsSlice';

const createRootReducer = () =>
	combineReducers({
		auth: authReducer,
		researches: researchesReducer,
		subscribers: subscribersReducer,
		snackBar: snackBarReducer,
		companies: companiesReducer,
		chosenCompany: chosenCompanyReducer,
		chosenResearch: chosenResearchReducer,
		utils: utilsReducer,
		users: usersReducer,
		contract: contractReducer,
		chosenUser: chosenUserReducer,
		//charts: chartReducer,
		tabs: tabsReducer,
		search: searchReducer,
		categories: categoriesReducer,
		notifications: notificationsReducer,
	});

export default createRootReducer;
