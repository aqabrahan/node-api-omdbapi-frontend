import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addOption, removeOption } from '../../actions';
import './styles.sass'

const FieldsSelector = (props) => {
  const { options, selected } = props;
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onSelect = (event, option) => {
    event.preventDefault();
    setOpen(false);
    dispatch(addOption(option));
  }

  const onUnSelect = (event, select) => {
    event.preventDefault();
    dispatch(removeOption(select));
  }

  const onHandler = () => {
    setOpen(true);
  }
  return <div className="list-container">
    <div className="list-container-selected">
      {selected.length > 0 && selected.map((select, i) => {
        return <div key={`isv${i}`} className="list-container-selected__select">
          <span className="text">{select}</span>
          <span onClick={(event) => onUnSelect(event, select)} className="icon">x</span>
        </div>
      })}
    </div>
    <span className="list-container-icon" onClick={onHandler}>+</span>
    {open && <div className="list-container-items">
      {options.length > 0 && options.map((option, index) => {
        if (!selected.includes(option)) {
          return <a href="" className="list-container-items__item" onClick={(event) => onSelect(event, option)} value={option} key={`opt${index}`}>{option}</a>
        }
      })}
    </div>}
  </div>
}

export default FieldsSelector
