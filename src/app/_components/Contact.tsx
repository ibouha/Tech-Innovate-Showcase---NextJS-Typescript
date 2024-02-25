import React from 'react'
import Container from './Conatiner'
import Link from 'next/link'

function Contact() {
  return (
    <Container>
      
    <div className="flex items-center justify-center min-h-screen">
      <section className="py-12">
        <div className="container mx-auto px-4 ">
          <h2 data-aos="fade-up" className="text-3xl font-semibold text-center mb-5">
            Need help with a project?
          </h2>
          <h1 data-aos="fade-up" className='font-bold text-7xl text-center mb-16 text-blue-800'>Let&apos;s Talk! </h1>
          <p data-aos="fade-up" className="text-lg font-bold text-center mb-16">
            Boost your startup&apos;s success. I tailor my process to
            meet your unique <p>business needs.</p>
          </p>
          <div className="flex justify-center">
            <Link href={"/contact"} >
            <button data-aos="fade-up" className=" w-[240px] h-14 bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-6  mr-4">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>  
    </Container>
)}

export default Contact