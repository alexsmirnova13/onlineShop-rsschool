import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import HearthstoreAction from './hearthstore.action';
import IPreloadedCard from '../../Interfaces/PreloadedCard.interface';

export interface IHearthstoreSlice {
    cards: IPreloadedCard[];
	cart: string[];
	loading: boolean;
}

export const initialState:IHearthstoreSlice = {
    cards: [],
	cart: [],
	loading: false
};

const sliceName = 'hearthstoreSlice';

const hearthstoreSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<string>) {
			state.cart=state.cart.concat(action.payload);
		},
		removeFromCart(state, action:PayloadAction<string>) {
			const newCart=state.cart.concat();
			newCart.some((u,i,a)=> {
				if (u===action.payload) {
					a.splice(i,1);
					return true;
				}
			});
			state.cart=newCart;
		}
	},
    extraReducers(builder) {
        builder
		.addCase(HearthstoreAction.loadCards.pending, (state, action) => {
			state.loading=true;
		})
		.addCase(HearthstoreAction.loadCards.fulfilled, (state, action) => {
            state.cards=action.payload;
			state.loading=false;
        })
		;
    },
});
export default hearthstoreSlice;