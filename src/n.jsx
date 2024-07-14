import React from 'react'

export default function n() {
  return (
    <div>
      {/* nav */}
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center  justify-between">
          {/* left menu */}
          <div className="flex space-x-20 items-center">
            <img src="../src/images/logo.svg" alt="" />
            <div className="hidden space-x-8 font-bold lg:flex">
              <a href="" className="text-gray-400 hover:text-gray-700">Features</a>
              <a href="" className="text-gray-400 hover:text-gray-700">Pricing</a>
              <a href="" className="text-gray-400 hover:text-gray-700">Resource</a>
            </div>
          </div>
          {/* right menu */}
          <div className="hidden font-bold text-gray-400 space-x-6 lg:flex items-center">
            <a href="" className="hover:text-gray-700">Login</a>
            <a href="" className="px-6 py-3 text-white bg-cyan-500 rounded-full hover:opacity-70">Sign Up</a>
          </div>
          {/* todo hamburger */}
        </div>
        {/* todo menu*/}
      </nav>
      {/* hero section */}
      <section id="hero">
        <div className="container flex flex-col-reverse justify-between p-6 md:px-12 lg:flex-row ">
          {/* left side */}
          <div className=" flex flex-col space-y-10  mt-16 mb-44 lg:w-1/2 xl:mb-52">
            <h2 className="text-5xl font-bold text-center lg:text-left lg:text-6xl lg:max-w-md">More than just shorter links</h2>
            <p className="text-2xl text-gray-400 text-center lg:text-left lg:max-w-md">Build your brand from your biggest competitors is key to sustaining success. But if you want customers to pick your brand over others, you need to cultivate undeniable brand recognition and awareness</p>
            <div className="mx-auto lg:mx-0">
              <a href="" className=" text-2xl px-6 py-3 bg-cyan-500 ho hover:opacity-70 rounded-full text-white font-bold">Get Started</a>
            </div>
          </div>
          {/* right side */}
          <div className=" mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <img src="../src/images/illustration-working.svg" alt="" />
          </div>
        </div>  
      </section>

      {/* shorten */}
      <section id="shorten" className="relative bg-gray-200">
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <form className="relative -mt-20 flex flex-col w-full p-10 bg-gray-800 rounded-lg md:flex-row space-y-4 md:space-y-0 md:space-x-3 ">
            <input type="text" className=" flex-1 px-2 py-3 placeholder-yellow-500 focus:outline-none rounded-lg md:px-2" placeholder="Shorten a link here" />
            <button className="text-white font-bold bg-cyan-500 py-3 px-2 rounded-lg hover:bg-cyan-400">Shorten</button>
          </form>
          {/* Item1 */}
          <div className="flex flex-col items-center md:flex-row justify-between w-full rounded-lg px-6 py-3 bg-white">
            <div>https://www.instagram.com/</div>
            <div className=" flex flex-col items-center md:flex-row space-y-3 md:space-y-0 md:space-x-5">
              <div className="text-cyan-500">https:/rei.rnkk4lkyk</div>
              <button className="bg-cyan-500 text-white rounded-lg py-2 px-3 hover:opacity-70">Copy</button>
            </div>
          </div>
          {/* Item2 */}
          <div className="flex flex-col items-center md:flex-row justify-between w-full rounded-lg px-6 py-3 bg-white">
            
            <div>https://www.twitter.com/frontendmintor/</div>
            <div className=" flex flex-col items-center md:flex-row space-y-3 md:space-y-0 md:space-x-5">
              <div className="text-cyan-500">https:/rei.rnkk4lkyk</div>
              <button className="bg-gray-900 text-white rounded-lg py-2 px-3 hover:bg-gray-800">Copy</button>
            </div>
          </div>
          {/* Item3 */}
          <div className="flex flex-col items-center md:flex-row justify-between w-full rounded-lg px-6 py-3 bg-white">
            <div>https://www.frontendmintor/</div>
            <div className=" flex flex-col items-center md:flex-row space-y-3 md:space-y-0 md:space-x-5">
              <div className="text-cyan-500">https:/rei.rnkk4lkyk</div>
              <button className="bg-cyan-500 text-white rounded-lg py-2 px-3 hover:opacity-70">Copy</button>
            </div>
          </div>
        </div>
      </section>
      {/* statistics section */}
      <section id="stats" className="p-24 bg-gray-200">
        <div className=" container mx-auto  px-3">
          <h1 className="text-2xl font-bold mb-6 text-center lg:text-4xl">Advance Statistics</h1>
          <p className="max-w-xs mx-auto text-gray-400 text-center md:max-w-md">simply dummy text of the printing and typesetting industry.</p>
        </div>
      </section>
      {/* Feature box section */}
      <section id="feature" className="pb-24 bg-gray-200">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          <div className="hidden absolute top-24 left-28 w-10/12 h-3 bg-cyan-400 md:block"></div>
          <div className="absolute w-2 h-full left-1/2 -ml-1 bg-cyan-500 md:hidden"></div>
          {/* box 1 */}
          <div className="relative flex flex-col p-6 bg-white rounded-lg md:w-1/3">
            {/* image position */}
            <div className="absolute -ml-10 -top-10 left-1/2 md:left-16">
              <div className="flex flex-col items-center justify-center bg-black rounded-full w-20 h-20 p-4">
              <img src="../src/images/icon-brand-recognition.svg" alt="" />

              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">Brand Recognition</h5>
            <p className="text-center text-gray-400 md:text-left">Build your brand from your biggest competitors is key to sustaining success. But if you want customers to pick your brand over others, you need to cultivate undeniable brand recognition and awareness</p>
          </div>
          {/* box 2 */}
          <div className="relative flex flex-col mt-20 md:mt-8 p-6 bg-white rounded-lg md:w-1/3">
            {/* image position */}
            <div className="absolute -ml-10 -top-10 left-1/2 md:left-16">
              <div className="flex flex-col items-center justify-center bg-black rounded-full w-20 h-20 p-4">
              <img src="../src/images/icon-brand-recognition.svg" alt="" />

              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">Brand Recognition</h5>
            <p className="text-center text-gray-400 md:text-left">Build your brand from your biggest competitors is key to sustaining success. But if you want customers to pick your brand over others, you need to cultivate undeniable brand recognition and awareness</p>
          </div>
          {/* box 3 */}
          <div className="relative flex flex-col mt-20 p-6 bg-white rounded-lg md:w-1/3">
            {/* image position */}
            <div className="absolute -ml-10 -top-10 left-1/2 md:left-16">
              <div className="flex flex-col items-center justify-center bg-black rounded-full w-20 h-20 p-4">
              <img src="../src/images/icon-brand-recognition.svg" alt="" />

              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">Brand Recognition</h5>
            <p className="text-center text-gray-400 md:text-left">Build your brand from your biggest competitors is key to sustaining success. But if you want customers to pick your brand over others, you need to cultivate undeniable brand recognition and awareness</p>
          </div>
        </div>
      </section>
    </div>
  )
}
