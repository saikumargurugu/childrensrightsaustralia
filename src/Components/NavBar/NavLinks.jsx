import { Link } from "react-scroll";
import ThemeToggle from "../ThemeToggle/ThemeToggleButton";

const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
        duration: 3000
      });
    }
  };

const NavLinks = () => (
    <ul className="hidden md:flex space-x-8">
      <li>
      <Link
        to="home"
        onClick={()=>{
            handleScroll("home");
        }}
        className="cursor-pointer hover:text-gray-300 text-white font-bold hover:border-b-2 transition"
      >
        Home
      </Link>
      </li>
      <li>
        <Link
            to="about"
            onClick={()=>{
                handleScroll("about");
            }}
            className="cursor-pointer hover:text-gray-300 text-white font-bold from-neutral-100 hover:border-b-2 transition"
            >
        About
        </Link>
      </li>
      <li>
        <Link
            to="inquries"
            onClick={()=>{
                handleScroll("inquries");
            }}
            className="cursor-pointer hover:text-gray-300 text-white font-bold from-neutral-100 hover:border-b-2 transition"
            >
        INQUIRIES
        </Link>
      </li>
      <li>
        <Link
            to="Services"
            onClick={()=>{
                handleScroll("Services");
            }}
            className="cursor-pointer hover:text-gray-300 text-white font-bold from-neutral-100 hover:border-b-2 transition"
            >
                Services
        </Link>
      </li>
      <li>
        <Link
            to="meettheteam"
            onClick={()=>{
                handleScroll("meettheteam");
            }}
            className="cursor-pointer hover:text-gray-300 text-white font-bold from-neutral-100 hover:border-b-2 transition"
            >
                MEET THE TEAM
        </Link>
      </li>
      <li>
        <Link
            to="Contact"
            onClick={()=>{
                handleScroll("Contact");
            }}
            className="cursor-pointer hover:text-gray-300 text-white font-bold from-neutral-100 hover:border-b-2 transition"
            >
                Contact
        </Link>
      </li>
      <li>
        <ThemeToggle />
      </li>
    </ul>
  );
  
  export default NavLinks;
  


//  Home
// INQUIRIES
// About F.R.A.
// Contact Us
// GET HELP
// MEET THE TEAM