import { Link } from "react-router-dom";
import logo from "../assets/Logo.png"
import { MdShoppingCart } from "react-icons/md";
export default function Navbar() {
  return (
    <nav className="w-full flex flex-wrap gap-4 justify-center lg:justify-between md:justify-between items-center py-10 px-8 md:px-20">
        <Link to="/"><img src={logo} alt="logo" className="w-36" /></Link>
        <div className="h-10 gap-2 flex">
            <input type="text" placeholder="Search for products" className="border border-[#7AC74F] w-80 pl-4 h-full rounded-md" />
            <button className="capitalize px-6 rounded-md bg-[#7AC74F] h-full text-white">search</button>
        </div>
        <div className="flex justify-between items-center h-10 gap-6">
        <Link to="/checkout"><MdShoppingCart className="text-2xl" /></Link>
        <button className="capitalize px-6 rounded-md bg-[#7AC74F] h-full text-white">my account</button>
        </div>
    </nav>
  )
}
