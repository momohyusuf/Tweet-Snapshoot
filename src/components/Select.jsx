import React from 'react';
import { useDispatch } from 'react-redux';
import {
  updateBgColor,
  updateTextColor,
  updateTextFont,
} from '../features/tweet/tweetSlice';
import { fonts } from '../utils';
import './select.css';

const Select = () => {
  const dispatch = useDispatch();
  const changeBgColor = (e) => {
    dispatch(updateBgColor(e.target.value));
  };
  const changeTextColor = (e) => {
    dispatch(updateTextColor(e.target.value));
  };
  return (
    <div className="tools">
      <div>
        {' '}
        <label htmlFor="choose-color">Change Bg color: </label>
        <input type="color" name="" onChange={changeBgColor} id="" />
      </div>

      <div>
        {' '}
        <label htmlFor="choose-color">Change Text Color: </label>
        <input type="color" name="" onChange={changeTextColor} id="" />
      </div>
      <div>
        <label htmlFor="text font">Change text font: </label>
        <select
          name="fonts"
          id=""
          onClick={(e) => dispatch(updateTextFont(e.target.value))}
        >
          {/* <option value="">Change text font</option> */}
          {fonts.map((item, index) => (
            <option
              key={index}
              value={item.title}
              style={{
                fontFamily: item.textStyle,
              }}
            >
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
