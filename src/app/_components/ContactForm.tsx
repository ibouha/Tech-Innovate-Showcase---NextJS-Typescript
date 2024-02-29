import React, { useState } from "react";
import Container from "./Conatiner";
import Input from "../_components/Input";

function ContactForm() {
  const [error, setError] = useState(false);
  return (
    <Container>
      <form>
        <Input
          type="text"
          label="Full Name :"
          placeholder="Cheb Laarbi"
          name="name"
          error={error}
        />
        <Input
          type="email"
          label="Email :"
          placeholder="laarbi@example.com"
          name="email"
          error={error}
        />
        <Input
          type="text"
          label="Subject :"
          placeholder="This project about..."
          name="name"
          error={error}
        />
        <div data-aos="fade-up" className="py-3 flex flex-col">
          <label htmlFor="Description" className="font-semibold py-3">
            Description :
          </label>
          <textarea
            name=""
            id="Description"
            cols="30"
            rows="10"
            className=" p-3 shadow-2xl"
          ></textarea>
        </div>
        <button
          data-aos="fade-up"
          className="w-full h-14 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-3 my-7"
        >
          Contact Us
        </button>
      </form>
    </Container>
  );
}

export default ContactForm;
