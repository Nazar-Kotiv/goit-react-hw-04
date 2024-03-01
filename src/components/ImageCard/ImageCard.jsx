import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({ cards, onImageClick }) {
  return (
    <div className={css.containerCard}>
      {cards.map((card) => (
        <div key={card.id}>
          <img
            onClick={() => onImageClick(card.urls.regular)}
            src={card.urls.small}
            alt={card.alt_description}
            className={css.img}
          />
        </div>
      ))}
    </div>
  );
}
