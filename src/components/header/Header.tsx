import { links } from "~/data/data";
import NavLink from "../../../src/components/nav/NavLink";

export const Header = () => {
  return (
    <div className="border-b-1">
      <div className="text-md dark:bg-black rounded-md py-4 p-2 flex justify-end space-x-4">
        {links.map((l, i) => (
          <NavLink key={i} {...l} />
        ))}
      </div>
    </div>
  );
};
