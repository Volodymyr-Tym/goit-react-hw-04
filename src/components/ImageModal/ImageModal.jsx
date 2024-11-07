import { useEffect } from 'react';
import styles from './ImageModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '90%',
    height: '90%',
    //   right: 'auto',
    //   bottom: 'auto',
    //   marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal = ({ isOpen, onCloseModalClick, imageInfo }) => {
  if (!imageInfo) return;
  const { src, descr, likes, author } = imageInfo;
  // let subtitle;

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   // subtitle.style.color = '#f00';
  // }

  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={onCloseModalClick}
      ariaHideApp={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
      <button onClick={onCloseModalClick}>close</button>
      <div className={styles.cardWrap}>
        <img src={src} alt={descr} />
        <div>
          <p>Author: {author}</p>
          <p>Likes: {likes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
