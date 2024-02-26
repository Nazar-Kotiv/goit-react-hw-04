import Contact from "../Contact/Contact";

export default function ContactList({ phonebooks, onDeleteContact }) {
  return (
    <div>
      {phonebooks.map((phonebook) => (
        <Contact key={phonebook.id} {...phonebook} onDelete={onDeleteContact} />
      ))}
    </div>
  );
}
