import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { SideLinkProps } from "../../types/types";

export function SideLink({ to, name }: SideLinkProps) {
  return (
    <div className={styles.linkContainer}>
      <NavLink to={to}>{name}</NavLink>
    </div>
  );
}
