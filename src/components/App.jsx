import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchContacts from './SearchContacts/SearchContacts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const LOCAL_KEY = 'contacts';
  // ====================================
  //   componentDidMount()
  useEffect(() => {
    const dataStorage = localStorage.getItem(LOCAL_KEY);
    const parsedDataStorage = JSON.parse(dataStorage);
    //
    if (parsedDataStorage && parsedDataStorage.length > 0) {
      // додаткова перевірка, як що користувач видалив записи лишається пустий масив але [] === true !!
      setContacts([...parsedDataStorage]);
    }
  }, []);
  // componentDidUpdate()
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // ********************************************

  function receiveFormData(data) {
    if (
      contacts &&
      contacts.find(
        contact => contact.name === data.name && contact.number === data.number
      )
    ) {
      return toast.error(`${data.name} is already in contacts.`);
    }
    setContacts([...contacts, data]);
    // contacts: [...contacts, data];
    toast.success(`${data.name} added in contacts.`);
  }
  // //******************************************** */

  const filterInputData = debounce(data => setFilter(data.toLowerCase()), 400);

  function filteredContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    ); // повертає новий масив
  }

  function deleteContact(id) {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  }

  return (
    <div className="container">
      <h2>Phone Book</h2>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ContactForm onSubmit={receiveFormData} />
      {contacts.length !== 0 && (
        <>
          <SearchContacts onChange={filterInputData} />
          <ContactList contacts={filteredContacts()} onDelete={deleteContact} />
        </>
      )}
    </div>
  );
}
