export default function ImageCard({ cards }) {
  return (
    <div>
      {" "}
      {cards.map((card) => (
        <div key={card.id}>
          <img src={card.urls.small} alt={card.alt_description} />
        </div>
      ))}
    </div>
  );
}
