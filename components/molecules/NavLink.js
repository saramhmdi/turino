"use client";

import Link from "next/link";
import { useState } from "react";

import AirplaneSquare from "../atoms/icons/AirplaneSquare";
import Call from "../atoms/icons/Call";
import Home from "../atoms/icons/Home";
import Volume from "../atoms/icons/Volume";
import ImageIcon from "../atoms/icons/ImageIcon";
import { usePathname } from "next/navigation";

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        className="block md:hidden w-[20px] h-[16px]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <ImageIcon iconName="hamburger-menu" className="w-[20px] h-[16px]" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-10"
          onClick={handleCloseMenu}
        ></div>
      )}

      <nav
        className={`fixed top-0 right-0 h-[calc(100%-1rem)] w-1.5/3 bg-background z-20 border rounded-xl m-2 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-[120%]"
        } md:static md:translate-x-0 md:flex md:flex-row md:border-none lg:mr-12`}
      >
        <ul className="flex flex-col md:flex-row text-base font-semibold">
          <li>
            <Link
              href="/"
              className={`${
                pathName === "/" ? "text-primary" : "text-text"
              } hover:text-primary flex items-center px-1 lg:px-4`}
              onClick={handleCloseMenu}
            >
              {isOpen && <Home />}
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`${
                pathName === "/services" ? "text-primary" : "text-text"
              } hover:text-primary items-center px-1 lg:px-4`}
              onClick={handleCloseMenu}
            >
              {isOpen && <AirplaneSquare />}
              خدمات گردشگری
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathName === "/about" ? "text-primary" : "text-text"
              } hover:text-primary flex items-center px-1 lg:px-4`}
              onClick={handleCloseMenu}
            >
              {isOpen && <Volume />}
              درباره ما
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathName === "/contact" ? "text-primary" : "text-text"
              } hover:text-primary flex items-center px-1 lg:px-4`}
              onClick={handleCloseMenu}
            >
              {isOpen && <Call />}
              تماس با ما
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
