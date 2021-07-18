import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import contactsAction from 'redux/contacts/contacts-actions';

import s from './Filter.module.css';

const filterInputId = uuidv4();

const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  const onChangeFilter = e =>
    dispatch(contactsAction.changeFilter(e.target.value));

  return (
    <label htmlFor={filterInputId}>
      <span className={s.span}>Find contacts by name and number</span>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
        id={filterInputId}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;
