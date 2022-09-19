import {useAppDispatch, useAppSelector} from "../hooks/redux.hook";
import sortingOptions from "../models/sortingOptions.model";
import ControlsAction from "../redux/controls/controls.action";
import styled from 'styled-components';

const Sort = () => {
    const Wrapper = styled.select`
        display: inline-block;
        box-sizing: border-box;
        font-size: 1em;
        color: black;
        border-radius: 6px;
        margin-left: 10px;
        padding: 0.5em 1em;
        border-radius: 6px;
        background-image: linear-gradient(to right, rgb(18, 44, 56), rgb(46, 167, 206), rgb(18, 44, 56));
`;
    const dispatch = useAppDispatch();

    const state=useAppSelector(state=>state.controls.sort);

    const options = Object.keys(sortingOptions);

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        dispatch(ControlsAction.setSort(value));
    };

    return (
        <div>
            <Wrapper  onChange={handleChange} defaultValue={state}>
                {options.map((u:string)=><option key={u}>{u}</option>)}
            </Wrapper>
        </div>
    );
};

export default Sort;