import styles from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  const handleClick = () => {
    const imageInfo = {
      src: image.urls.regular,
      descr: image.alt_description,
      likes: image.likes,
      author: image.user.name,
    };

    onImageClick(imageInfo);
  };
  return (
    <div className={styles.image_card}>
      <img
        onClick={handleClick}
        className={styles.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
