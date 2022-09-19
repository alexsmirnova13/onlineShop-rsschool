import * as React from 'react';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';
import ControlsAction from '../redux/controls/controls.action';
import {useAppDispatch, useAppSelector} from '../hooks/redux.hook';
import {ICostRange} from '../Interfaces/FilterOptions.interface';

const minDistance = 1;
const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 11,
      label: '11',
    },
  ];

const Wrapper = styled.div`
  width: 400px;
  span {
    color: #fcd144;
    font-family:'Courier New', Courier, monospace;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 25px;
  }
`;

const Filter = () => {
  const dispatch = useAppDispatch();
  const controls = useAppSelector(state=>state.controls);

  const rangeMin = controls.filter.costRange?.min || 0;
  const rangeMax = controls.filter.costRange?.max || 100;

  const marks = [
    {value:rangeMin, label:rangeMin},
    {value:rangeMax, label:rangeMax},
  ];

  const [value, setValue] = React.useState<number[]>([0, 11]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  const handleSubmit = () => {
    const filterRange:ICostRange = {
      min:controls.filter.costRange.min,
      max: controls.filter.costRange.max,
      selection: [value[0],value[1]]
    };
    dispatch(ControlsAction.setFilterCostRange(filterRange));
  };

  return (
    <Wrapper>
        <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            marks = {marks}
            min = {rangeMin}
            max = {rangeMax}
        />
        <button onClick={handleSubmit}>Submit</button>
      </Wrapper>
  );
};

export default Filter;