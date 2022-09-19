import {AppDispatch} from '../store';
import hearthstoreSlice from './hearthstore.slice';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {HearthstoreActionTypes} from './hearthstore.type';
import IPreloadedCard from '../../Interfaces/PreloadedCard.interface';

const loadCards = createAsyncThunk(HearthstoreActionTypes.LOAD_CARDS, async () => {
    const cards = new Map();
    await axios.get('https://api.hearthstonejson.com/v1/121569/enUS/cards.json')
    .then(resp=>resp.data.forEach((u:IPreloadedCard)=>{
      if (u.rarity==='LEGENDARY' && u.cardClass==='NEUTRAL') cards.set(u.name, u);
    }))
    .catch(e=>{
        console.log(e);
    });
      return Array.from(cards.values());
  });

  const addToCart = (cardId:string) => (dispatch: AppDispatch) => {
    dispatch(hearthstoreSlice.actions.addToCart(cardId));
  };

  const removeFromCart = (cardId:string) => (dispatch: AppDispatch) => {
    dispatch(hearthstoreSlice.actions.removeFromCart(cardId));
  };

const HearthstoreAction = {
    loadCards,
    addToCart,
    removeFromCart
};

export default HearthstoreAction;