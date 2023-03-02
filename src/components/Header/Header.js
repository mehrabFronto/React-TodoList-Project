import Filter from "../Filter/Filter";
import NavBar from "../NavBar/NavBar";
import styles from "./header.module.css";

const Header = () => {
   return (
      <header className={styles.header}>
         <NavBar />
         <h2 className={styles.text}>What's your plan today?</h2>
         <Filter />
      </header>
   );
};

export default Header;
