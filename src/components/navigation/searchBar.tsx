import styles from './navigation.module.css';
import {useRouter} from "next/router";
import {useState} from "react";

const SearchBar = () => {
    const router = useRouter();
    const [search, setSearch] = useState<string>('');

    const onSearch = () => {
        const searchVal = search.replace(' ', '+');
        router.replace(`/search/${searchVal}`);
    }

    return (
        <form onSubmit={(e) => onSearch()}>
            <input
                type='text'
                className={styles.searchbar}
                placeholder='Search for song'
                value={search}
                onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;