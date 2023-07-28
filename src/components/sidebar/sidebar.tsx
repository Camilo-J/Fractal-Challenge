import { SideLink } from "../navlink/navlink";
import styles from "./style.module.css";

export function SideBar({ open }: { open: boolean }) {
  return (
    <div className={`${styles.sidebar} ${open ? styles["sidebar--Open"] : ""}`}>
      <nav className={styles.sidebar__links}>
        <SideLink to={"/countries"} name={"Inicio"} />
      </nav>
    </div>
  );
}
