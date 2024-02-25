"use client";
import Link from "next/link";
import Container from "./Conatiner";

function Nav() {
  return (
    <>
      <div
        data-aos="fade-down"
        className="sticky top-0 w-[100%] z-[1000] opacity-3 text-white bg-black"
      >
        <Container>
          <div className=" mx-auto  flex justify-between items-center ">
            <div>
              <Link href={"/"}>
                <div
                  data-aos="fade-down"
                  className="font-logo text-white text-[18px] "
                >
                  <span className="text-[30px] md:text-[40px] text-blue-800">
                    Tech
                  </span>
                  Innovate
                </div>
              </Link>
            </div>
            <div data-aos="fade-down" data-aos-delay="250">
              <ul className="flex space-x-4">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"about"}>About</Link>
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
