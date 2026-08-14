import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-4">
      <nav className="w-full flex items-center justify-between py-4">
        <span className="text-lg font-bold text-slate-800">
          Given || Koda B9 React
        </span>

        <ul className="flex gap-5 text-sm text-slate-600">
          <li className="hover:text-orange-500 cursor-pointer"> <Link to={"/"}>Home</Link></li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link to={"/operation"}>Operation</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer"> <Link to={"/pokemon"}>Pokemon</Link></li>
          <li className="hover:text-orange-500 cursor-pointer"> <Link to={"/product"}>Product</Link></li>
          <li className="hover:text-orange-500 cursor-pointer"> <Link to={"/controlled"}>FormControlled</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
