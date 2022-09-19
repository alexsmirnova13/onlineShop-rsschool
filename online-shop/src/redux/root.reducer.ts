import {combineReducers} from 'redux';
import controlsSlice from './controls/controls.slice';
import hearthstoreSlice from './hearthstore/hearthstore.slice';

const rootReducer = combineReducers({
    controls:  controlsSlice.reducer,
    hearthstore: hearthstoreSlice.reducer
});

export default rootReducer;
