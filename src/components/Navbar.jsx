"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import LogoImg from "../../public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const sectionIds = ["Home", "Features", "Service", "Testimonial", "Contact"];
  const [activeLink, setActiveLink] = useState("hero");
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to a section by its ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 0; // Adjust if needed
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  // Determine the active section while scrolling
  const determineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i].toLowerCase());
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(sectionIds[i].toLowerCase());
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar bg-teal-600 transition-all duration-300 ${
        isSticky ? "sticky top-0 shadow-lg z-50" : "relative"
      }`}
    >
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center">
          <Image src={LogoImg} alt="Logo Image" loading="lazy" />
        </div>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            {sectionIds.map((sectionId, i) => (
              <li key={i}>
                <a
                  className={`${
                    activeLink === sectionId.toLowerCase() &&
                    sectionId !== "Home"
                      ? "text-red-400"
                      : "text-white"
                  } hover:text-red-400 cursor-pointer`}
                  onClick={() => scrollToSection(sectionId.toLowerCase())}
                >
                  {sectionId}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-teal-700">
          <ul className="menu menu-vertical px-4 py-2 space-y-2">
            {sectionIds.map((sectionId, i) => (
              <li key={i}>
                <a
                  className={`${
                    activeLink === sectionId.toLowerCase() &&
                    sectionId !== "Home"
                      ? "text-red-400"
                      : "text-white"
                  } hover:text-red-400 cursor-pointer`}
                  onClick={() => {
                    scrollToSection(sectionId.toLowerCase());
                    setMenuOpen(false); // Close menu on click
                  }}
                >
                  {sectionId}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
