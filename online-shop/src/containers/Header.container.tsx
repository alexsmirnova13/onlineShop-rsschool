import {Link} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 4rem;
    background: url(https://d2vkoy1na2a6o6.cloudfront.net/_next/static/media/wood_middle_repeat.b4458ce9f1d0c41bb51b9b8385c0943f.png);
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    >span {
        padding-left: 20px;
    }
    >img {
        height: 48px;
        width: auto;
    }
    > nav {
        display: flex;
        flex-direction: row;
        width: 200px;
        justify-content: space-around;
        a {
            color: #fcd144;
            text-decoration: none;
            text-shadow: 0 1px 3px rgb(0 0 0 / 30%);
            font-family: Belwe Bold;
            letter-spacing: 1px;
            font-size: 16px;
        }
        >:not(:first-child) {
            margin-left: 20px;
        }
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <img alt="hearthstone logo" src="https://d2vkoy1na2a6o6.cloudfront.net/images/logos/logo-rose-6ac85a09bf532a348c56002b9a9d7393d485677460a7d24c61be28bde93ecd11521a29ab5d1fed7b4646b6ec73c9dca1a85e8e82269e79f5a54ead2976682517.png"></img>
            <nav>
                <Link to={'cards'}>Store</Link>
                <Link to={'cart'}>Cart</Link>
            </nav>
        </Wrapper>
    );
};

export default Header;