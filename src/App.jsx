export default function App() {
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
        <div className="container flex flex-col-reverse justify-between p-6 lg:flex-row ">
          {/* left side */}
          <div className=" flex flex-col space-y-10  mt-16 mb-44 lg:w-1/2 xl:mb-52">
            <h2 className="text-5xl font-bold text-center lg:text-left lg:text-6xl lg:max-w-md">More than just shorter links</h2>
            <p className="text-2xl text-gray-400 text-center lg:text-left lg:max-w-md">Build your brand from your biggest competitors is key to sustaining success. But if you want customers to pick your brand over others, you need to cultivate undeniable brand recognition and awareness</p>
            <div className="mx-auto lg:mx-0">
              <a href="" className=" text-2xl px-6 py-3 bg-cyan-500 rounded-full text-white font-bold">Get Started</a>
            </div>
          </div>
          {/* right side */}
          <div className=" mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <img src="../src/images/illustration-working.svg" alt="" />
          </div>
        </div>
        <div>Hiiiii</div>
      </section>
    </div>
  )
}