import { SideLink } from "../navlink/navlink";
import styles from "./style.module.css";

export function SideBar({ open }: { open: boolean }) {
  return (
    <div className={`${styles.sidebar} ${open ? styles["sidebar--Open"] : ""}`}>
      <nav className={styles.sidebar__links}>
        <SideLink to={"/countries"} name={"Inicio"} />
        <SideLink to={"/europe"} name={"Europa"} />
        <SideLink to={"/america"} name={"America"} />
        <SideLink to={"/asia"} name={"Asia"} />
        <SideLink to={"/africa"} name={"Africa"} />
        <SideLink to={"/oceania"} name={"Oceania"} />
      </nav>
    </div>
  );
}
