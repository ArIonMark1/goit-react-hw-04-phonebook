import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import './ContactForm.scss';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function addContact(evt) {
    evt.preventDefault();

    const stateName = !name.trim() ? 'empty' : name.trim();
    const stateNumber = number;

    const newContact = { id: nanoid(10), name: stateName, number: stateNumber };
    //----------------------------------
    onSubmit(newContact);
    //----------------------------------
    setName('');
    setNumber('');
  }

  return (
    <form id="form" className="contactsForm" onSubmit={addContact}>
      <label className="nameLabel">
        Name
        <br />
        <input
          className="nameField"
          type="text"
          name="name"
          value={name}
          placeholder="Enter contact name"
          // onChange={changeInputValue}
          onChange={evt => setName(evt.currentTarget.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="nameLabel">
        Number
        <br />
        <input
          className="nameField"
          type="tel"
          name="number"
          value={number}
          placeholder="Enter your number"
          // onChange={changeInputValue}
          onChange={evt => setNumber(evt.currentTarget.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="conformButton" type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
