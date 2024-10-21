import { ImSearch } from 'react-icons/im';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit, message }) => {
  const handleSubmit = event => {
    const inputValue = event.target.searchInput.value;
    event.preventDefault();

    if (inputValue === '') return message();

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
