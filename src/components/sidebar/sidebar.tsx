import { SideLink } from "../navlink/navlink";
import closeSvg from "../../../public/close.svg";
export function SideBar({
  open,
  handleOpen,
}: {
  open: boolean;
  handleOpen: () => void;
}) {
  return (
    <div
      className={`fixed w-full min-h-screen z-50 bg-stone-550 transition-all duration-500 ${
        open ? "left-0" : "-left-full"
      } xl:static xl:w-96 xl:p-1`}
    >
      <img
        className="w-10 m-1 cursor-pointer xl:hidden"
        src={closeSvg}
        alt="close-icon"
        onClick={handleOpen}
      />
      <nav className="mt-8 grid grid-cols-1 gap-4 place-items-center">
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
