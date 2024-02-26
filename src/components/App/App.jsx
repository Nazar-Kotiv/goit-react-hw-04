import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import "./App.css";

export default function App() {
  const [phonebooks, setPhonebook] = useState(() => {
    const savedNumbers = window.localStorage.getItem("saved-phonebooks");
    if (savedNumbers !== null) {
      return JSON.parse(savedNumbers);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    window.localStorage.setItem("saved-phonebooks", JSON.stringify(phonebooks));
  }, [phonebooks]);

  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  const handleAddContact = (newContact) => {
    setPhonebook([...phonebooks, newContact]);
  };
  const filteredPhonebooks = phonebooks.filter((contact) =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleDeleteContact = (contactId) => {
    const updatedContacts = phonebooks.filter(
      (phonebook) => phonebook.id !== contactId
    );
    setPhonebook(updatedContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox onFilterChange={handleFilterChange} filterText={filterText} />
      <ContactList
        phonebooks={filteredPhonebooks}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
