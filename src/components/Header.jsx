import { useEffect, useRef, useState } from "react";

import "../App.css";

function Header() {
  const [links, setLinks] = useState([
    { id: 1, name: "Features", url: "#" },
    { id: 2, name: "Teams", url: "#" },
    { id: 3, name: "Sign in", url: "#" },
  ]);

  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#171f2a";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    });
  }, [headerRef]);

  return (
    <header
      ref={headerRef}
      className="w-full top-0 z-50 py-[50px] transition-all duration-200 fixed bg-transparent"
    >
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="logo  ">
          <img src="/src/assets/imgs/logo.svg" alt="Logo" />
        </div>
        <ul className="flex items-center gap-[50px] text-white ">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`${link.url}`}
                className="text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-300 p-[20px]"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
export default Header;
