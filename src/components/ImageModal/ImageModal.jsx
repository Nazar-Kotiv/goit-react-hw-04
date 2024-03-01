import Modal from "react-modal";
import { useEffect, useRef } from "react";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ regular, closeModal }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const handleClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [closeModal]);

  return (
    <Modal
      className={css.customModal}
      overlayClassName={css.modalOverlay}
      isOpen={true}
      onRequestClose={closeModal}
    >
      <div ref={modalRef} className={css.modalContent}>
        <img src={regular} alt="Large Preview" />
      </div>
    </Modal>
  );
}
