import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul className={styles.list}>
        {Array.isArray(images) &&
          images.map(image => {
            return (
              <li className={styles.list_item} key={image.id}>
                <ImageCard image={image} onImageClick={onImageClick} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
