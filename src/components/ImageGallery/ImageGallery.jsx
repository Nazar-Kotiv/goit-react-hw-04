import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.list}>
      <li>
        <ImageCard cards={items} onImageClick={onImageClick}></ImageCard>
      </li>
    </ul>
  );
}
