import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css"

const Nav = (props) => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.linksContainer}>
                <Link className={styles.link}to="/about">about</Link>
                <Link className={styles.link}to="/home">home</Link>
                <Link className={styles.link}to="/create">create</Link>
                <Link className={styles.link}to="/favorites">favorites</Link>
            </div>
            <div className={styles.searchBarContainer}>
                <SearchBar onSearch={props.onSearch} />
            </div>
        </div>
    )
}

export default Nav