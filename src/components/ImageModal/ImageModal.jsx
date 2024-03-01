import Modal from "react-modal";
import { useEffect, useRef } from "react";

Modal.setAppElement("#root");
export default function ImageModal({ regular, closeModal }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <Modal isOpen={true} onRequestClose={closeModal}>
      <div ref={modalRef}>
        <img src={regular} />
      </div>
    </Modal>
  );
}
