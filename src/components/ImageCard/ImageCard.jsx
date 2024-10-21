import styles from './ImageCard.module.css';

const ImageCard = ({ image }) => {
  return (
    <div className={styles.image_card}>
      <img
        className={styles.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
