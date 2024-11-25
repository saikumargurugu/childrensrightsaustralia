import { Link } from "react-scroll";

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

const MobileMenu = () => (
    <ul className="md:hidden backdrop-blur-md space-y-2 p-4">
      <li>
      <Link
        to="home"
        onClick={()=>{
            handleScroll("home");
        }}
        className="cursor-pointer block py-2 from-neutral-100 hover:text-gray-300 text-white font-bold hover:border-b-2 transition"
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
            className="cursor-pointer block py-2 from-neutral-100 hover:text-gray-300 text-white font-bold  hover:border-b-2 transition"
            >
        About
        </Link>
      </li>
      <li>
        <Link
            to="Services"
            onClick={()=>{
                handleScroll("Services");
            }}
            className="cursor-pointer block py-2 from-neutral-100 hover:text-gray-300 text-white font-bold  hover:border-b-2 transition"
            >
                Services
        </Link>
      </li>
      <li>
        <Link
            to="Contact"
            onClick={()=>{
                handleScroll("Contact");
            }}
            className="cursor-pointer block py-2 from-neutral-100 hover:text-gray-300 text-white font-bold  hover:border-b-2 transition"
            >
                Contact
        </Link>
      </li>
    </ul>
  );
  
  export default MobileMenu;
  