import { useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Logo from "../Logo";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleFunction = () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.value === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  };
  const scrollFunction = () => {
    if (window.scrollY > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", scrollFunction);

  return (
    <header
      id="header"
      className={
        scroll
          ? "bg-dark-transparent-100 sm:py-2 transition-all dark:bg-dark-transparent-100 fixed w-screen duration-400 inset-x-0 top-0 z-10"
          : "sm:py-2 fixed w-screen duration-400 inset-x-0 top-0"
      }
    >
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="" to="/">
              <Logo
                className={
                  "fill-light-primary duration-250 hover:fill-light-secondary dark:fill-dark-primary dark:hover:fill-dark-secondary"
                }
              />
            </Link>
          </div>

          <div className=" flex flex-row ">
            <nav aria-label="Global">
              <ul className="flex items-center md:gap-4 gap-2 text-xs md:text-4xl sm:text-2xl font-reemKufi font-medium">
                <li>
                  <Link
                    className="text-light-primary duration-250 hover:text-light-secondary dark:text-dark-primary dark:hover:text-dark-secondary"
                    to="/"
                  >
                    مواقيت الصلاة
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-light-primary duration-250 hover:text-light-secondary dark:text-dark-primary dark:hover:text-dark-secondary"
                    to="/"
                  >
                    القرآن الكريم
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <DarkModeSwitch
            className="xl:size-10 lg:size-8 md:size-6 size-4"
            checked={dark}
            onChange={toggleFunction}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
