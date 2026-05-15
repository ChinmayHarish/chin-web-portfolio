


const Navbar = () => {
  const navLinks = ["About", "Capabilities", "My Works", "Contact"];

  return (
    <nav className="w-full flex justify-between items-center pt-6 md:pt-8">
      <div className="flex gap-4 md:gap-8 lg:gap-12 w-full justify-between">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link === "My Works" ? "projects" : link.toLowerCase()}`}
            className="text-accent text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
