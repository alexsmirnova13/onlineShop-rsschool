import IPreloadedCard from "../Interfaces/PreloadedCard.interface";
import styled from 'styled-components';
import {useAppDispatch} from "../hooks/redux.hook";
import HearthstoreAction from "../redux/hearthstore/hearthstore.action";

interface ICard {
    card: IPreloadedCard,
    inCartQuantity: number
}

const Wrapper = styled.div<{inCart:boolean}>`
    width: 256px;
    background-color: ${props=>props.inCart? 'green' : ''};

    // @media(min-width: 767px) {
    //     width:100%;
    //     background:black;
    // }

    > img {
        width:100%;
        cursor: pointer;
    };

    button {
        display: inline-block;
        box-sizing: border-box;
        font-size: 1em;
        color: aliceblue;
        border-radius: 6px;
        margin-left: 10px;
        padding: 0.5em 1em;
        border-radius: 6px;
        background-image: linear-gradient(to right, rgb(18, 44, 56), rgb(46, 167, 206), rgb(18, 44, 56));
    };    
`;

const Card = (props:ICard) => {
    const dispatch = useAppDispatch();
    const {card, inCartQuantity}=props;
    const imgURL=`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`;

    const handleCardClick=()=>{
        dispatch(HearthstoreAction.addToCart(card.id));
    };


    return (
        <Wrapper inCart={Boolean(inCartQuantity)}>
            <img alt={card.id} src={imgURL} onClick={handleCardClick}></img>
            <p>{inCartQuantity}</p>
            <button onClick={()=>dispatch(HearthstoreAction.addToCart(card.id))}>add</button>
            <button onClick={()=>dispatch(HearthstoreAction.removeFromCart(card.id))}>remove</button>
        </Wrapper>
    );
};

export default Card;