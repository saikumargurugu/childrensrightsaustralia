import { Link } from "react-scroll";

const NavLinks = () => (
    <ul className="flex space-x-6">
      <li>
        <Link to="home" className="hover:text-gray-300 text-white font-bold from-neutral-100 hover:border-b-2 transition">Home</Link>
      </li>
      <li>
        <Link to="about" className="hover:text-gray-300 text-white font-bold from-neutral-100 hover:border-b-2 transition">About</Link>
      </li>
      <li>
        <Link to="home" className="hover:text-gray-300 text-white font-bold from-neutral-100 hover:border-b-2 transition">Services</Link>
      </li>
      <li>
        <Link to="home" className="hover:text-gray-300 text-white font-bold from-neutral-100 hover:border-b-2 transition">Contact</Link>
      </li>
    </ul>
  );
  
  export default NavLinks;
  