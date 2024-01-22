"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Cross from "../svgs/Cross";
import Menu from "../svgs/Bars3Icon";
import Button from "../button";
import Light from "../svgs/Light";
import Dark from "../svgs/Dark";
import Link from "next/link";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Company = "Monk Wall";

  useEffect(() => {
    // Apply dark/light theme logic here
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const Sections = ["Home", "Our Story", "Testimonials", "Contact Us"];

  const ToggleButton = () => {
    return (
      <Button
        onClick={(e) => {
          e.preventDefault;
          e.stopPropagation();
          toggleTheme();
        }}
        theme={isDarkMode}
        aria-hidden="true"
      >
        {isDarkMode ? (
          <Light className="h-6 w-6 text-sky-50" aria-hidden="true" />
        ) : (
          <Dark className="h-6 w-6" aria-hidden="true" />
        )}
      </Button>
    );
  };

  return (
    <>
      <header>
        <nav
          className="fixed top-0 left-0 right-0 mx-auto flex max-w-screen-2xl items-center justify-between py-6 lg:px-4 z-50 light-nav dark:dark-nav"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 px-3">
            <Link rel="canonical" href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">{Company}</span>
              <Image
                width={65}
                height={65}
                objectFit="contain"
                src="/logo.png"
                alt={Company}
              />
              <h1>{Company}</h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            {ToggleButton()}
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-8 w-8 mx-3" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 lg:justify-end items-center">
            {Sections.map((section, index) => (
              <Link
                rel="canonical"
                href={"#" + section.toLocaleLowerCase().replace(/\s+/g, "-")}
                key={index + "-section"}
                className="text-sm font-semibold leading-6"
              >
                {section}
              </Link>
            ))}
            {ToggleButton()}
          </div>
        </nav>
        <div
          className={`lg:hidden fixed inset-0 z-10  ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 bg-black opacity-50 "></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 light dark:dark">
            <div className="flex items-center justify-between mb-6">
              <Link rel="canonical" href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">{Company}</span>
                <Image
                  width={65}
                  height={65}
                  src="/logo.png"
                  alt={Company}
                  objectFit="contain"
                />
                <h1>{Company}</h1>
              </Link>
              <div>
                {ToggleButton()}
                <button
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <Cross className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              {Sections.map((section, index) => (
                <Link
                  rel="canonical"
                  href={"#" + section.toLocaleLowerCase().replace(/\s+/g, "-")}
                  key={index + "-sectiom"}
                  className="block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50"
                >
                  {section}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
