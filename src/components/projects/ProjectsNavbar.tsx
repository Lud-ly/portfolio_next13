import { FunctionComponent } from "react";
import { Category } from "../../../types/types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green-500";
  if (active === value) className += " text-green-500";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none text-black dark:text-white">
      <NavItem value="all" {...props} />
      <NavItem value="FLUTTER" {...props} />
      <NavItem value="NEXT" {...props} />
      <NavItem value="SYMFONY" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
