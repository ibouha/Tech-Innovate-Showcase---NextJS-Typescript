"use client"
import Link from "next/link";
import Container from "./Conatiner";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sticky top-0 w-full z-[1000] opacity-3 text-white bg-black">
        <Container>
          <div className="mx-auto flex justify-between items-center">
            <div>
              <Link href={"/"}>
                <div
                  data-aos="fade-down"
                  className="font-logo text-white text-[18px]"
                >
                  <span className="text-[30px] md:text-[40px] text-blue-800">
                    Tech
                  </span>{" "}
                  Innovate
                </div>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="block text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } md:flex md:items-center`}
              onClick={toggleMenu}
            >
              <ul className="md:flex md:space-x-4">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/services"}>Services</Link>
                </li>
                <li>
                  <Link href={"/team"}>Team</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Nav;
