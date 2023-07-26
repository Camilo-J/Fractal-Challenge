import { SideLink } from "../navlink/navlink";
import styles from "./style.module.css";

export function SideBar() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.sidebar__links}>
        <SideLink to={"/continents"} name={"Inicio"} />
        <SideLink to={"/countries"} name={"Paises"} />
        <SideLink to={"/continents"} name={"Continentes"} />
        <SideLink to={"/continents"} name={"Lista 1"} />
        <SideLink to={"/continents"} name={"Lista 2"} />
        <SideLink to={"/continents"} name={"Lista 3"} />
      </nav>
    </div>
  );
}
