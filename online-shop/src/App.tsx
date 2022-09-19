import {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./containers/Header.container";
import {useAppDispatch, useAppSelector} from "./hooks/redux.hook";
import {ICostRange} from "./Interfaces/FilterOptions.interface";
import IPreloadedCard from "./Interfaces/PreloadedCard.interface";
import useRoutes from "./Pages/routes";
import ControlsAction from "./redux/controls/controls.action";
import HearthstoreAction from "./redux/hearthstore/hearthstore.action";
import styled from "styled-components";

const Wrapper=styled.div`
    flex-grow:1;
    display:flex;
`
const routes=useRoutes();

const App = () => {
    const dispatch = useAppDispatch();
    const cards=useAppSelector(state=>state.hearthstore.cards);
    
    useEffect(()=>{
        dispatch(HearthstoreAction.loadCards());
    },[]);

    useEffect(()=>{
        const costs=cards.map((u:IPreloadedCard)=>u.cost||0);
        const costRangeMin=Math.min(...costs);
        const costRangeMax= Math.max(...costs);

        const costRangeFilter:ICostRange={
            min:costRangeMin,
            max:costRangeMax,
            selection: [costRangeMin,costRangeMax]
        };
        
        dispatch(ControlsAction.setFilterCostRange(costRangeFilter));
    },[cards]);

    return (
        <BrowserRouter>
            <Header/>
                <Wrapper>{routes}</Wrapper>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;