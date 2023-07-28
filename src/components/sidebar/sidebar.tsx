import { SideLink } from "../navlink/navlink";
import styles from "./style.module.css";

export function SideBar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebar__links}>
        <SideLink to={"/countries"} name={"Inicio"} />
      </nav>
    </div>
  );
}
