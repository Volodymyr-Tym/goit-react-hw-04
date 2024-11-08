import { CgClose } from 'react-icons/cg';
import { BsCamera2 } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import styles from './ImageModal.module.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     width: '90%',
//     height: '90%',
//     //   right: 'auto',
//     //   bottom: 'auto',
//     //   marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

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
      className={styles.modal}
      overlayClassName={styles.overlay}
      shouldFocusAfterRender={false}
      onRequestClose={onCloseModalClick}
      ariaHideApp={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      // style={customStyles}
      contentLabel="Example Modal"
    >
      {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
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
