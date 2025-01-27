import React from "react";
import Logo from "./logo";
import NavBar from "./navbar";

function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md flex flex-col sm:flex-row bg-[#f4f1f7] justify-around  items-center  py-4 px-10  border-b-4 border-[#15202b]">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
