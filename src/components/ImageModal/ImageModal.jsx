import { CgClose } from 'react-icons/cg';
import { BsCamera2 } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';

import Modal from 'react-modal';

import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onCloseModalClick, imageInfo }) => {
  if (!imageInfo) return;

  const { src, descr, likes, author } = imageInfo;

  return (
    <Modal
      isOpen={isOpen}
      className={styles.modal}
      overlayClassName={
        isOpen ? `${styles.overlay} ${styles.is_open}` : styles.overlay
      }
      shouldFocusAfterRender={true}
      onRequestClose={onCloseModalClick}
      ariaHideApp={true}
      preventScroll={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel="Photo and images library"
    >
      <button className={styles.btn_close} onClick={onCloseModalClick}>
        <CgClose className={styles.btn_close_icon} />
      </button>
      <div className={styles.card_wrap}>
        <p className={styles.img_descr}>{descr}</p>
        <img className={styles.img} src={src} alt={descr} />
        <div className={styles.info_wrap}>
          <p className={styles.info}>
            <BsCamera2 className={styles.info_icon} /> {author}
          </p>
          <p className={styles.info}>
            <AiOutlineLike className={styles.info_icon} /> {likes}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
