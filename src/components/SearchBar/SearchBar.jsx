import { ImSearch } from 'react-icons/im';

import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const emptyFieldMessage = () =>
    toast('Searching field is empty', {
      duration: 4000,
      icon: '🤷‍♂️',
      style: {
        border: '1px solid #713200',
        padding: '8px',
        fontWeight: '500',
        backgroundColor: '#f66060',
      },
    });

  const handleSubmit = event => {
    const inputValue = event.target.searchInput.value;
    event.preventDefault();

    if (inputValue === '') return emptyFieldMessage();

    onSubmit(inputValue);

    event.target.reset();
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.btn} type="submit">
          <ImSearch className={styles.ico} />
        </button>

        <input
          className={styles.input}
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
