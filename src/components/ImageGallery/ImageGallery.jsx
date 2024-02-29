import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.list}>
      <li>
        <ImageCard cards={items}></ImageCard>
      </li>
    </ul>
  );
}
