import React from 'react';
import './SearchContacts.scss';
import { useState, useEffect } from 'react';

export default function SearchContacts({ onChange }) {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    onChange(filter);
  }, [filter]);

  return (
    <label>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        className="nameField"
        value={filter}
        onChange={evt => setFilter(evt.currentTarget.value.trim())}
        placeholder="Filter contacts..."
      ></input>
    </label>
  );
}
