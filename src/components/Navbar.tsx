import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", href: "/#home", type: "link" },
    { name: "Sobre", href: "/#sobre", type: "link" },
    { name: "Serviços", href: "/#servicos", type: "link" },
    { name: "Projetos", href: "/projetos", type: "link" },
    { name: "Contato", href: "/#contato", type: "link" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 gap-4">
          <Link to="/" className="flex items-center flex-shrink-0 -ml-1">
            <img
              src="/lovable-uploads/Nimu_Vector.svg"
              alt="NIMU Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors font-medium ${
                  isScrolled
                    ? "text-gray-900 hover:text-nimu-teal"
                    : "text-white hover:text-nimu-teal"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/#contato">
              <Button className="bg-gradient-nimu hover:opacity-90 transition-opacity">
                Solicitar orçamento
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none flex-shrink-0"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`py-2 block transition-colors ${
                  isScrolled
                    ? "text-[#00B1F3] hover:text-nimu-teal"
                    : "text-gray-900 hover:text-nimu-teal"
                }`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/#contato" onClick={toggleMenu}>
              <Button className="bg-gradient-nimu hover:opacity-90 transition-opacity w-full">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
