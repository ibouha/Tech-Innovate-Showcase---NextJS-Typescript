import Image from "next/image";
import React from "react";
import image from "../../images/work.png";
import Container from "./Conatiner";

function About() {
  return (
    <section className="bg-gray-100 py-16">
      <Container>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
            About Tech Innovate
          </h2>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row  items-center justify-center space-y-8 md:space-y-0">
            <div
              data-aos="fade-right"
              className=" items-center justify-center md:w-1/2 md:mr-8 h-auto bg-white shadow-lg rounded-lg p-7"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                Tech Innovate is a leading provider of innovative technology
                solutions. We specialize in leveraging the latest technologies
                to help businesses thrive in the digital age. Our team of
                experts is dedicated to delivering cutting-edge solutions
                tailored to meet the unique needs of each client.
              </p>
            </div>
            <div data-aos="fade-left" className="md:w-1/2">
              <Image
                src={image.src}
                alt="About Tech Innovate"
                className="rounded-lg "
                width={400}
                height={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
