import React from 'react'

const Hero = () => {
  return (
    <div>
          <section className="relative py-28 px-6 md:px-16">

              {/* Background Blobs */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-yellow-100 rounded-full blur-3xl"></div>

              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                  {/* LEFT */}
                  <div>
                      <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-bold tracking-wide">
                          ABOUT PUMPA SQUASH ACADEMY
                      </span>

                      <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
                          Start Here…
                          <br />
                          <span className="text-orange-500">
                              Shine Everywhere.
                          </span>
                      </h1>

                      <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                          Pumpa Squash Academy was founded with one mission — to help
                          children and adults enjoy squash, build confidence, and develop
                          a lifelong love for sport.
                      </p>

                      <p className="mt-6 text-gray-600 leading-relaxed">
                          At Pumpa, we believe squash is more than just a game. It teaches
                          discipline, resilience, focus, teamwork, and confidence.
                      </p>

                      <p className="mt-6 text-gray-600 leading-relaxed">
                          We also place strong importance on mental well-being, creating a
                          positive and supportive environment where every player feels safe,
                          motivated, and valued.
                      </p>

                      <div className="mt-10 flex flex-wrap gap-5">
                          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300">
                              Join Academy
                          </button>

                          <button className="border-2 border-orange-300 hover:bg-orange-50 px-8 py-4 rounded-2xl font-bold transition-all duration-300">
                              Learn More
                          </button>
                      </div>
                  </div>

                  {/* RIGHT */}
                  <div className="relative">

                      <div className="absolute -top-10 -right-10 bg-white shadow-2xl p-6 rounded-3xl border border-orange-100 z-20">
                          <h2 className="text-4xl font-black text-orange-500">22+</h2>
                          <p className="text-gray-600 font-medium">
                              Years of Experience
                          </p>
                      </div>

                      <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl border border-orange-100 rotate-1 hover:rotate-0 duration-500">
                          <img
                              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200&auto=format&fit=crop"
                              alt="Squash Academy"
                              className="rounded-[2rem] h-[650px] object-cover w-full"
                          />
                      </div>

                  </div>
              </div>
          </section>
    </div>
  )
}

export default Hero