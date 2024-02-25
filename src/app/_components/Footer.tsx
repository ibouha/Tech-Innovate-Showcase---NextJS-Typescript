import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../images/Tech.svg";
import Container from "./Conatiner";

function Footer() {
  return (
    <div className="h-[470px] text-lg bg-blue-900 text-white overflow-hidden">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Image
              src={logo.src}
              alt="Tech Innovate Logo"
              width={400}
              height={100}
              
            />
          </div>
          <div>
            <p className="text-black text-sm md:text-base mt-4 md:mt-0">
              Leading the way in innovation and technology solutions. <br />
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-black text-sm md:text-base mt-4 md:mt-0">
            © {new Date().getFullYear()} Tech Innovate. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
