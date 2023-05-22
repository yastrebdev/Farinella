import { ReactComponent as SearchIcon } from '../../../assets/image/search-icon.svg'
import mod from './Search.module.scss'

const Search = () => {
  return (
    <button className={mod.button}>
      <SearchIcon />
    </button>
  );
}

export default Search