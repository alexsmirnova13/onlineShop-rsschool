import styled from "styled-components";

import IPreloadedCard from "../Interfaces/PreloadedCard.interface";
import Card from "./Card.component";

interface ICardsListProps {
    cards: IPreloadedCard[],
    cart: string[]
}

const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    // background: url("https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltce7bd012a7273e91/5f602445b013c94f2078d0e4/homepage_blue_felt_update.jpg") center center / 100% 100% repeat-x;
    background: url("https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt0c6db71db535f97a/5f8df46861a67a1420846b72/homepage_tavern_background.jpg") center center / cover no-repeat;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: row;
    }
`;

const CardsList = (props: ICardsListProps) => {
    const {cards, cart}=props;
    return (
        <Wrapper>
            {cards.map(u=>(
                <Card key={u.id} card={u} inCartQuantity={cart.filter(u2=>u2===u.id).length}/>
            ))}
        </Wrapper>
    );
};

export default CardsList;