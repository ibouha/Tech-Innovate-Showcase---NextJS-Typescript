"use client";
import Image from "next/image";
import React from "react";
import Container from "../_components/Conatiner";
import messageIcons from "../../images/MessageIcon.png";
import Link from "next/link";
import ContactForm from "../_components/ContactForm";

function ContactPage() {
  return (
    <Container>
      <div data-aos="fade-up" className="flex items-center justify-start mt-20">
        <Image src={messageIcons.src} alt="" width={100} height={100} />
        <h1 className="text-4xl font-bold">Let&apos;s Talk!</h1>
      </div>
      <div className="flex my-10 ">
        <div className=" w-1  bg-blue-800"></div>

        <h2
          data-aos="fade-up"
          className="text-2xl font-semibold ml-3 leading-loose"
        >
          Tell me all about your project right here, Let me know all about your
          project by emailing me at{" "}
          <Link
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            target="_blank"
            className="text-blue-800"
          >
            ibouhaamin@gmail.com
          </Link>
        </h2>
      </div>
      <ContactForm />
    </Container>
  );
}

export default ContactPage;
