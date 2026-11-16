import { useEffect, useState } from "react";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState<string | null>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);

      let current = "";
      document.querySelectorAll<HTMLElement>("section[id]").forEach((el) => {
        const top = el.getBoundingClientRect().top - el.offsetHeight * 0.2;
        if (top < 0 && top + el.offsetHeight > 0) current = el.id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary/95 border-b border-[#1c3a29] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src="./logo.svg" alt="logo" className="h-9 w-9 object-contain" />
          <p className="font-display flex cursor-pointer text-[18px] font-bold text-white">
            Riyaaz<span className="text-gon hidden sm:inline">&nbsp;|&nbsp;</span>
            <span className="text-gold hidden sm:block">Hunter</span>
          </p>
        </a>

        <ul className="hidden list-none flex-row gap-8 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-gon" : "text-secondary"
              } font-display cursor-pointer text-[16px] font-medium uppercase tracking-wider hover:text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl border border-[#1c3a29] p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-display cursor-pointer text-[16px] font-medium uppercase ${
                    active === nav.id ? "text-gon" : "text-secondary"
                  }`}
                  onClick={() => setToggle(false)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
