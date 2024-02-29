import Link from "next/link";
import React from "react";
import Container from "./Conatiner";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Container>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <p className="text-black text-sm md:text-xl font-semibold mt-4 md:my-4">
            © {new Date().getFullYear()} Tech Innovate. All rights reserved.
          </p>
        </div>

        <div className="flex justify-center mb-5 text-gray-400 gap-x-7 text-2xl">
          <Link href={"https://www.x.com"}>
            <FaXTwitter />
          </Link>
          <Link href={"https://www.x.com"}>
            <FaFacebookF />
          </Link>
          <Link href={"https://www.x.com"}>
            <FiInstagram />
          </Link>
          <Link href={"https://www.x.com"}>
            <FaLinkedinIn />
          </Link>
          <Link href={"https://www.x.com"}>
            <FaGithub />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
