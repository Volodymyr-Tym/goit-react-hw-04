import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ error }) => {
  return (
    <div className={styles.error_wrap}>
      <p className={styles.title}>Ooooops... something get wrong...</p>
      <p className={styles.text}>
        The reason is: <span className={styles.message}>{error}</span>
      </p>
    </div>
  );
};

export default ErrorMessage;
