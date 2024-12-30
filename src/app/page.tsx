'use client'

import React from 'react'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import heroImage from '../../public/image/logo.jpg'
import heroImage2 from '../../public/image/logo 2.png'
import heroImage3 from '../../public/image/logo 3.jpg'
import heroImage4 from '../../public/image/logo 4.jpg'
import heroImage5 from '../../public/image/logo 5.jpg'


import heroImage6 from '../../public/image/github logo.png'
import { FaGithub } from "react-icons/fa";
import { DiJavascript, DiVisualstudio } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa6";








export default function Home() {


  return (
    <main>
      <title> SYED ALI AZHAR PROTFOLIO</title>
      {/* Header Section */}

      {/* Nav Bar Includes Some Pages and Socail Urls */}

      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-white">Home</a>
            <a className="mr-5 hover:text-white">About Us</a>
            <a className="mr-5 hover:text-white">Contact Us</a>
            <a className="hover:text-white">Privacy Policy</a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl xl:block lg:hidden">SYED ALI AZHAR</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-white mt-4 md:mt-0">Git Hub
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>





      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded" alt="hero-image" src={heroImage} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"><Typewriter
              options={{
                strings: ['Graphic Designer', 'Web Developer', 'Web Designer', 'SEO Specialist', 'Content Creator'],
                autoStart: true,
                loop: true,
              }}
            />

            </h1>
            <p className="mb-8 leading-relaxed">Hello, my name is Syed Ali Azhar. I am a skilled professional with a Bachelor of Science degree in Computer Science (BSCS) and 4 to 5 years of experience in various fields including graphic design, web development, and content creation. I am currently pursuing my BSCS degree at Federal Urdu University, Karachi, Pakistan. Over the years, I have honed my expertise in web and graphic design, accounting, social media marketing, content writing, and video production. My goal is to bring creativity and technical proficiency to every project I undertake.

              .</p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-400">Newsletter</label>
                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full"></p>
            <div className="flex lg:flex-row md:flex-col text-gray-300">
              <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-indigo-600 hover:text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-400 mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-gray-800 inline-flex py-3 px-5 rounded-lg items-center hover:bg-green-700 hover:text-white focus:outline-none lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-400 mb-1">Download on the</span>
                  <span className="title-font font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>









      <div className="flex flex-wrap justify-center md:space-x-6 lg:space-x-8 overflow-x-auto p-4 bg-gray-100">
        {/* Image Cards */}
        {[heroImage2, heroImage3, heroImage4, heroImage5].map((image, index) => (
          <div key={index} className="bg-white shadow-lg border p-4 w-full sm:w-64 md:w-72 lg:w-80 h-96 rounded-lg font-sans overflow-hidden flex flex-col items-center mb-4">
            <Image
              src={image}
              alt={`hero-image${index + 1}`}
              className="w-full h-40 object-cover rounded-lg" // Fixed height for uniform image sizes
            />
            <h3 className="text-xl font-black mt-3 text-center">
              {["What's in Web Designing", "Exploring New Tools", "Design Trends 2024", "Future of Web Development"][index]}
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed text-center">
              {[
                "Exploring web designing in 2024 while learning it easily and enjoy it ",
                "Get insights into the tools in web design and explore my portfolio to see my skills.",
                "Discover upcoming design trends and innovations, making a mark in graphic design.",
                "Insights into the future of web development and design trends."
              ][index]}
            </p>
            <button
              aria-label={`Read more about ${["What's New in Web Designing", "Exploring New Tools", "Design Trends 2024", "Future of Web Development"][index]}`}
              className="mt-4 px-5 py-2 w-full rounded-lg text-white text-sm tracking-wider font-semibold bg-blue-600 hover:bg-indigo-900"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-black text-center title-font text-yellow-500  mb-4">Project Features and Commands</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Explore the essential features of each Graphic Designing projects </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Company Flyer Design</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Website Design</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Logo Design</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-sky-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Web Development</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">WordPress</span>
              </div>
            </div>


            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium text-white">Social Media Marketing</span>
              </div>
            </div>
          </div>



          <button className="flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-yellow-600 hover:bg-opacity-100 focus:outline-none  bg-sky-600">
            <Image className="w-9 h-9" src={heroImage6}
              alt="heroImage3"
            />


            <span className="ml-4 flex items-start flex-col leading-none">
              <span className="text-xs text-white mb-1">GIT HUB</span>
              <span className="title-font font-bold text-black">@Syed Ali Azhar</span>
            </span>
          </button>

        </div>







      </section>

      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          {/* Heading Section */}
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-4xl font-medium title-font mb-2 text-white transition-transform duration-500 hover:scale-105">
                Unlock My Skill Set &apos;s Hidden Talents
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-white text-opacity-90">
              Highlight the range of skills and expertise, emphasizing the impact and value brought to my projects.
            </p>
          </div>

          {/* Scrolling Icons and Text Section */}
          <div className="relative overflow-hidden w-full">
            <div
              className="flex items-center space-x-12 animate-marquee"
              style={{ whiteSpace: "nowrap" }}
            >
              {[
                { icon: <DiVisualstudio className="text-orange-500" />, label: "Visual Studio Code" },
                { icon: <FaGithub className="text-yellow-500" />, label: "GitHub" },
                { icon: <DiJavascript className="text-blue-500" />, label: "JavaScript" },
                { icon: <FaPython className="text-green-500" />, label: "Python" },
                { icon: <SiTypescript className="text-red-500" />, label: "TypeScript" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center text-white"
                >
                  <div className="text-6xl">{item.icon}</div>
                  <span className="mt-2 text-lg font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSS */}
        <style jsx>{`
    .animate-marquee {
      display: inline-flex;
      animation: marquee 15s linear infinite;
    }
    @keyframes marquee {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  `}</style>
      </section>



      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-black title-font mb-4 text-yellow-500 tracking-widest uppercase">Contact Us</h1>
            <p className="lg:w=2/3 mx-auto leading-relaxed text-base">Fill this form for any queries</p>
          </div>
        </div>

        <section className="container px-2 py-2 mx-auto text-gray-400 bg-gray-900 body-font relative">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" scrolling="yes" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" />
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">Contact Us </h2>
                <p className="mt-1">Please fill this form if you have any queries or complains or if you have any message for us  </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-400 leading-relaxed">syedali8975123@gmail.com</a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">+92 3112156484</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5">please response us for the shape of your feedback </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">PLease read our privacy policy for any issues</p>
          </div>


        </section>
      </section>

    </main>



  )
}