import {ICostRange} from '../../Interfaces/FilterOptions.interface';
import {AppDispatch} from '../store';
import controlSlice from './controls.slice';

const setPage = (pageNumber: number) => (dispatch: AppDispatch) => {
	dispatch(controlSlice.actions.setPage(pageNumber));
};

const setPages = (pagesNumber: number) => (dispatch: AppDispatch) => {
	dispatch(controlSlice.actions.setPages(pagesNumber)); 
};

const setSearch = (filter: string) => (dispatch: AppDispatch) => {
   dispatch(controlSlice.actions.setSearch(filter));
};

const setSort = (sort: string) => (dispatch: AppDispatch) => {
   dispatch(controlSlice.actions.setSort(sort));
};

const setFilterCostRange = (rangeFilter:ICostRange) => (dispatch:AppDispatch) => {
   dispatch(controlSlice.actions.setFilterCostRange(rangeFilter));
};

const ControlsAction = {
   setPage,
   setPages,
   setSearch,
   setSort,
   setFilterCostRange
};

export default ControlsAction;