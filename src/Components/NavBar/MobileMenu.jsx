const MobileMenu = () => (
    <ul className="md:hidden backdrop-blur-md space-y-2 p-4">
      <li>
        <a href="/" className="block py-2 hover:text-gray-300 text-black font-bold from-neutral-100 hover:border-b-2 transition">Home</a>
      </li>
      <li>
        <a href="/" className="block py-2 hover:text-gray-300 text-black font-bold from-neutral-100 hover:border-b-2 transition">About</a>
      </li>
      <li>
        <a href="/" className="block py-2 hover:text-gray-300 text-black font-bold from-neutral-100 hover:border-b-2 transition">Services</a>
      </li>
      <li>
        <a href="/" className="block py-2 hover:text-gray-300 text-black font-bold from-neutral-100 hover:border-b-2 transition">Contact</a>
      </li>
    </ul>
  );
  
  export default MobileMenu;
  