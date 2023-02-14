import styles from './navigation.module.css';

const SearchBar = () => {
    return (
        <form>
            <input
                type='text'
                className={styles.searchbar}
                placeholder='Search for song'
            />
        </form>
    );
}

export default SearchBar;