import { Link } from "react-router-dom";
import styles from "./Info.module.scss";

function Info({
  imgSrc, // /img/fav-sad.png
  title,
  description,
  buttonText,
  onButtonClick,
  buttonLink,
}) {
  return (
    <div className={styles.pageEpmty}>
      <img src={imgSrc} alt="Empty state" />
      <h3>{title}</h3>
      <p>{description}</p>
      {buttonLink ? (
        <Link to={buttonLink}>
          <button>{buttonText}</button>
        </Link>
      ) : (
        <button onClick={onButtonClick}>{buttonText}</button>
      )}
    </div>
  );
}

export default Info;
