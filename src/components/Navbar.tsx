import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      <div className="h-full flex items-center justify-center">
        {/* Mobile */}
        <Link href={"/"}>LAMA</Link>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
