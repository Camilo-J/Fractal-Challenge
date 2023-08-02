import { NavLink } from "react-router-dom";
import { SideLinkProps } from "../../types/types";

export function SideLink({ to, name }: SideLinkProps) {
  return (
    <div className="bg-white w-48 p-2 text-center rounded-lg text-xl text-stone-550 font-semibold sm:text-2xl sm:w-60 lg:w-80 xl:w-64">
      <NavLink to={to}>{name}</NavLink>
    </div>
  );
}
