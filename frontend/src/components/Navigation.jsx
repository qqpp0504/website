import { VscListSelection } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

import classes from "./Navigation.module.css";

export default function Navigation() {
  const [isToggle, setIsToggle] = useState(false);

  function handleToggleMenu() {
    setIsToggle((prev) => !prev);
  }

  return (
    <>
      <nav className="mt-3 hidden lg:block">
        <ul className="flex gap-5 text-2xl justify-end">
          <li className={`${classes.line}`}>
            <a href="#about">About</a>
          </li>
          <li className={`${classes.line}`}>
            <a href="#skills">Skills</a>
          </li>
          <li className={`${classes.line}`}>
            <a href="#projects">Projects</a>
          </li>
          <li className={`${classes.line}`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="mt-3 flex justify-end lg:hidden">
        <button onClick={handleToggleMenu} className="cursor-pointer">
          {isToggle ? (
            <IoMdClose size="1.6rem" />
          ) : (
            <VscListSelection size="1.5rem" />
          )}
        </button>
      </div>

      {isToggle && (
        <nav className="lg:hidden">
          <ul className="flex flex-col gap-5 text-2xl right-12 top-24 bg-white p-10 rounded-xl">
            <li className={`${classes.line}`}>
              <a href="#about">About</a>
            </li>
            <li className={`${classes.line}`}>
              <a href="#skills">Skills</a>
            </li>
            <li className={`${classes.line}`}>
              <a href="#projects">Projects</a>
            </li>
            <li className={`${classes.line}`}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
