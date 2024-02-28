import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul>
      <li>
        <ImageCard cards={items}></ImageCard>
      </li>
    </ul>
  );
}
