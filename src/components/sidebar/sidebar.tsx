import { SideLink } from "../navlink/navlink";
import styles from "./style.module.css";
import closeSvg from "../../../public/close.svg";
export function SideBar({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
}) {
  return (
    <div className={`${styles.sidebar} ${open ? styles["sidebar--Open"] : ""}`}>
      <img
        className={styles.iconClose}
        src={closeSvg}
        alt="close-icon"
        onClick={handleOpen}
      />
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
