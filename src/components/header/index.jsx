import React from "react";
import Logo from "./logo";
import NavBar from "./navbar";

function Header() {
  return (
    <header className="md:sticky top-0 z-50 shadow-md flex flex-col lg:flex-row py-12 px-10 lg:py-4 bg-[#f4f1f7] justify-around  items-center    border-b-4 border-[#15202b]">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;
