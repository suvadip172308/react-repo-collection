import { useRef } from "react";
import styles from './Search.module.css';

const Search = ({ search }) => {
  const searchInputRef = useRef();

  const handleSearch = () => {
    const searchText = searchInputRef.current.value.trim();

    search(searchText);
  };

  const handleOnInputSearch = (text) => {
    const searchText = text.trim();

    if(searchText.length > 3) {
      console.log(searchText);

      setTimeout(() => {
        search(searchText);
      }, 1500);
    }
  }
  
  return(
    <div>
      <input
        className={styles.searchText}
        type="text"
        ref={searchInputRef}
        placeholder="Search Product"
        onChange={(event) => handleOnInputSearch(event.target.value)}
      />
      <button
        className={styles.searchBtn}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default Search;