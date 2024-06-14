import Button from "../Button/Button";
import cardStyle from "./Card.module.css";

const Card = ({ title, image, content, tags, published }) => {
  return (
    <div
      className={`${cardStyle.card} ${published ? "" : cardStyle.notPublished}`} // andava fatto una condizione per mostrare o no il post su main.jsx
    >
      <img
        src={image ? image : "https://picsum.photos/600/400"}
        // soluzione più corretta sarebbe stata l'operatore ||,
        // poiché essendo un circuito chiuso il ternario è superfluo e possiamo fare direttamente
        //  src={image || "https://picsum.photos/600/400"}
        alt="post-image"
      />
      <div className={cardStyle.cardBody}>
        <h3 className={cardStyle.textLeft}>{title}</h3>
        <p>{content}</p>
        {tags.length > 0 && (
          <div className={cardStyle.tagContainer}>
            <span>
              <b>Tags:</b>
            </span>
            {tags.map((tag, index) => (
              <span
                key={`tag${index}`}
                className={`${cardStyle.tag} ${cardStyle[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Button />
      </div>
    </div>
  );
};

export default Card;
