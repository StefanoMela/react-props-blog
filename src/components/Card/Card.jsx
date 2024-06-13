import Button from "../Button/Button";
import cardStyle from "./Card.module.css";

const Card = ({ title, image, content, tags, published }) => {
  return (
    <div
      className={`${cardStyle.card} ${published ? "" : cardStyle.notPublished}`}
    >
      <img
        src={image ? image : "https://picsum.photos/600/400"}
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
