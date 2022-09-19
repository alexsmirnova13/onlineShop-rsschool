import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import IFilterOptions, {ICostRange} from '../../Interfaces/FilterOptions.interface';
import sortingOptions from '../../models/sortingOptions.model';

export interface IControlsSlice {
	page: number;
	itemsPerPage: number;
	pages: number;
	search: string;
	sort: string;
	filter: IFilterOptions
}

export const initialState:IControlsSlice = {
	page: 1,
	itemsPerPage: 20,
	pages: 1,
	search: '',
	sort: Object.keys(sortingOptions)[0],
	filter: {}
};

const sliceName = 'controlsSlice';

const controlsSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setPage(state, action:PayloadAction<number>) {
			state.page=action.payload;
		},
		setPages(state, action:PayloadAction<number>) {
			state.pages=action.payload;
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
		setSort(state, action:PayloadAction<string>) {
			state.sort = action.payload;
		},
		setFilterCostRange(state, action:PayloadAction<ICostRange>) {
			state.filter = {
				...state.filter,
				costRange:action.payload
			};
		}
	},
});
export default controlsSlice;