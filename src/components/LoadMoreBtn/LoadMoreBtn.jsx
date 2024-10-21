import { BiLeftDownArrowCircle } from 'react-icons/bi';

import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMoreClick }) => {
  return (
    <div className={styles.btn_wrap}>
      <button className={styles.btn} onClick={onLoadMoreClick}>
        <BiLeftDownArrowCircle className={styles.ico} />
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
