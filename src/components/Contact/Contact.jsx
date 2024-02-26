import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.listItem}>
      <div className={css.positionContainer}>
        <div className={css.iconContainer}>
          <FaUser />
          <span className={css.text}>{name}</span>
        </div>
        <div className={css.iconContainer}>
          <FaPhone />
          <span className={css.text}>{number}</span>
        </div>
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
