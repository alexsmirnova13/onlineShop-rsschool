import {useRef} from "react";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../hooks/redux.hook";
import ControlsAction from "../redux/controls/controls.action";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
`;

const Search = () => {
    const dispatch = useAppDispatch();

    const state = useAppSelector(state=>state.controls.search);

    const inputRef=useRef<HTMLInputElement>(null);

    const handleSearchSubmit = () => {
        const filterValue=inputRef.current.value;
        dispatch(ControlsAction.setSearch(filterValue));
    };

    return (
        <Wrapper>
            <input ref={inputRef} defaultValue={state}></input>
            <button onClick={handleSearchSubmit}>Search</button>
        </Wrapper>
    );
};

export default Search;