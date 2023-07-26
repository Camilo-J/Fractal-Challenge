import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

type SideLinkProps = {
  to: string;
  name: string;
};

export function SideLink({ to, name }: SideLinkProps) {
  return (
    <div className={styles.linkContainer}>
      <NavLink to={to}>{name}</NavLink>
    </div>
  );
}
