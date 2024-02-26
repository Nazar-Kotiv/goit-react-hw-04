import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
export default function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = e.target;
    const submit = myForm.elements.submit.value;

    if (myForm.elements.submit.value.trim() === "") {
      toast.error("Please enter search term!");
    }
    onSubmit(submit);
    myForm.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <FaSearch className={css.icon} />
        <input
          className={css.inputSearch}
          type="text"
          name="submit"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
}
