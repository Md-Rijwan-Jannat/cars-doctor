import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { FaSearch, FaShoppingBag } from "react-icons/fa";

const Header = () => {
    const navLink = <>
         <li className="text-gray-500 font-bold"><Link to={'/'}>Home</Link></li>
         <li className="text-gray-500 font-bold"><Link to={'/about'}>About</Link></li>
         <li className="text-gray-500 font-bold"><Link to={'/service'}>Service</Link></li>
         <li className="text-gray-500 font-bold"><Link to={'/blog'}>Blog</Link></li>
         <li className="text-gray-500 font-bold"><Link to={'/contact'}>Contact</Link></li>
         <li className="text-gray-500 font-bold"><Link to={'/login'}>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                         </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navLink}
                </ul>
            </div>
            <div className="navbar-end text-gray-500 space-x-6">
                <FaShoppingBag/>
                <FaSearch/>
            <button className="btn btn-outline btn-error">Appointment</button>
            </div>
        </div>
    );
};

export default Header;