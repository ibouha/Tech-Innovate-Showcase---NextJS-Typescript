"use client";
import React, { useEffect } from "react";
import background from "../../images/bgblue.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "./Conatiner";
import Link from "next/link";

function Main() {
  const backgroundStyle = {
    backgroundImage: `url(${background.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundattachment: "scroll",
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <div className="flex h-screen text-white py-20" style={backgroundStyle}>
      <Container>
        <div className="container mx-auto text-center mt-32 ">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-8xl font-bold mb-7"
          >
            <span className="text-blue-700">Welcome</span> to Tech Innovate
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="md:text-xl mb-8 sm:text-sm"
          >
            Leading the way in innovation and technology solutions
          </p>
          <Link href={"/about"}>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-white w-[240px] h-14 text-blue-900 font-bold py-2 px-6 hover:bg-blue-800 hover:text-white transition duration-300"
            >
              Learn More
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Main;
