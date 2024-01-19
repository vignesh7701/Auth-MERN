import React from 'react'
import Github from "../assets/Github.png"

const Home = () => {
  return (
    <div>
      <div className="px-4 py-12 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold  mb-4 text-slate-800">
          Welcome to my Authenticator App!
        </h1>
        <p className="mb-4 text-lg text-justify font-main font-medium text-slate-700">
          I'm glad that you have visited my app, Down here is my Github Profile
          where I'll be posting web dev contents daily and other technology
          related concepts
          <br />
          Do Follow me!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-3">
        <h1>My Github</h1>
        <a href="https://github.com/vignesh7701/" target="_blank">
          <img className='w-24' src={Github} alt="Github" />
        </a>
      </div>
    </div>
  );
}

export default Home