import React, { useState } from "react";
import Logo from "../Logo/Logo";
import NavLinks from "./NavLinks";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
      <Logo />
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <MobileMenuToggle isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default NavBar;
