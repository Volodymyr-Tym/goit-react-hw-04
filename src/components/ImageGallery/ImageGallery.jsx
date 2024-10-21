import ImageCard from '../ImageCard/ImageCard';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={styles.list}>
        {images.length !== 0 &&
          images.map(image => {
            return (
              <li className={styles.list_item} key={image.id}>
                <ImageCard image={image} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
