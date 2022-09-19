import styled from 'styled-components';
import Search from './Search.component';
import {useAppDispatch} from '../hooks/redux.hook';
import ControlsAction from '../redux/controls/controls.action';
import Sort from './Sort.component';
import Filter from './Filter.component';

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background: url("https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/bltce7bd012a7273e91/5f602445b013c94f2078d0e4/homepage_blue_felt_update.jpg") center center / 100% 100% repeat-x;
    // background: url("https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt0c6db71db535f97a/5f8df46861a67a1420846b72/homepage_tavern_background.jpg") center center / cover no-repeat;
    padding: 10px 20px;
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
    }
    
`;

interface Props {
    page: number;
    pages: number;
}

const ControlsContainer = (props: Props) => {
    const dispatch = useAppDispatch();
    const {pages, page} = props;

    const handlePrevPage = () => {
        if (page>1) {
            dispatch(ControlsAction.setPage(page-1));
        }
    };

    const handleNextPage = () => {
        if (page<pages) {
            dispatch(ControlsAction.setPage(page+1));
        }
    };

    return (
        <Wrapper className='controls'>
            <Search/>
            <Sort/>
            <Filter/>
            <div>
                <button onClick={handlePrevPage}>{'<'}</button>
                <span>{page}</span>
                <button onClick={handleNextPage}>{'>'}</button>
            </div>
        </Wrapper>
    );
};

export default ControlsContainer;