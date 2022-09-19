import {useCallback, useEffect} from "react";
import CardsList from "../components/CardsList.component";
import {useAppDispatch, useAppSelector} from "../hooks/redux.hook";
import IPreloadedCard from "../Interfaces/PreloadedCard.interface";
import ControlsAction from "../redux/controls/controls.action";
import ControlsContainer from "../components/Controls.component";
import sortingOptions from "../models/sortingOptions.model";
import  "./CardsService.css";

const CardsService = () => {
    const dispatch=useAppDispatch();
    const state=useAppSelector(state=>state);

    const {hearthstore, controls} = state;

    useEffect(()=>{
        const newPages=Math.ceil(hearthstore.cards.length/controls.itemsPerPage);
        dispatch(ControlsAction.setPages(newPages));
    },[hearthstore.cards]);

    const searchFunction = useCallback((u:IPreloadedCard)=>{
        if (u.name?.toLowerCase().includes(controls.search.toLowerCase())
        || u.text?.toLowerCase().includes(controls.search.toLowerCase())) {
            return true;
        }
    },[controls.search]);    

    const filterFunction = useCallback((u:IPreloadedCard)=>{
        const {costRange} = controls.filter;
        if (costRange) {
            return u.cost >= costRange.selection[0] && u.cost<=costRange.selection[1];
        }
        return true;
    }, [controls.filter]);

    const sliceStart=(controls.page-1)*controls.itemsPerPage;
    const sliceEnd = sliceStart+controls.itemsPerPage;

    const cardsInCart = hearthstore.cart;

    const filteredCards = hearthstore.cards.filter(filterFunction).filter(searchFunction);
    const sortedCards = filteredCards.sort(sortingOptions[controls.sort]);
    const cardsToShow = sortedCards.slice(sliceStart, sliceEnd);

    const pages = Math.ceil(filteredCards.length/controls.itemsPerPage);
    return (
        <div className="main">
            <ControlsContainer page={controls.page} pages={pages}/>
            <CardsList cards={cardsToShow} cart={cardsInCart}/>
        </div>
    );
};

export default CardsService;