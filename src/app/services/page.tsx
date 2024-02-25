import Link from "next/link";
import React from "react";
import Container from "../_components/Conatiner";

function Page() {
  return (
    <Container>
       <div className="text-5xl text-center font-primary text-blue-800 font-bold my-4">
        Services
      </div>
      <section className="py-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-10">
        <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
          <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2
              id="pricing"
              className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl"
            >
              Simple, Transparent Pricing
            </h2>
            <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl"></p>
          </div>

          <div
            id="pricing"
            className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3"
          >
            {/* Price 1 */}
            <div data-aos="fade-right" className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
              <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                  $1
                </p>
                <p className="box-border m-0 border-solid">/ month</p>
              </div>
              <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg
                    className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  1 Website
                </li>
                <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg
                    className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  SSL (HTTPS)
                </li>

                <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg
                    className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  SiteFast Domain
                </li>
              </ul>
              <Link
                href="panier"
                className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
              >
                Start Now
              </Link>
            </div>
            {/* Price 2 */}
            <div data-aos="fade-down" className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                Basic
              </h3>
              <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                  $29
                </p>
                <p
                  className="box-border m-0 border-solid"
                  style={{ borderImage: "initial" }}
                >
                  / month
                </p>
              </div>
              <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg
                    className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  15 Websites
                </li>

                <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg
                    className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  SSL (HTTPS)
                </li>

                <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg
                    className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Custom Domain
                </li>

                <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <svg
                    className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  SiteFast Branding Removal
                </li>
              </ul>

              <Link
                href="/panier"
                className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg"
              >
                Start Now
              </Link>
            </div>
            {/* Price 3 */}
            <div data-aos="fade-left" className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
            <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                Plus
            </h3>
            <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                    $49
                </p>
                <p className="box-border m-0 border-solid" style={{ borderImage: 'initial' }}>
                    / month
                </p>
            </div>
            <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                    <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                    50 Websites
                </li>
                <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SiteFast Branding Removal
                    </li>


                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Google Analytics
                    </li>

                    <li className="inline-flex items-center  w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Email Integration
                    </li>
                {/* Include other list items similarly */}
            </ul>
            <a href="#"
                className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                Start Now
            </a>
        </div>
          </div>
        </div>
      </section>
    </Container>
    
  );
}

export default Page;
