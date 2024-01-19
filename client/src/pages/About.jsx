import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold  mb-4 text-slate-800">About</h1>
      <p className="mb-4 font-main text-justify font-medium md:text-lg text-md  text-slate-700">
        This application is built using the MERN stack, which includes MongoDB,
        Express, React, and Node.js. It has authentication functionality that
        allows users to create an account, login, and logout. Authenticated
        users have access to protected routes. The front-end of the application
        is developed with React and utilizes React Router for client-side
        routing. The back-end is created with Node.js and Express, and it uses
        MongoDB as the database. Authentication is implemented using JSON Web
        Tokens (JWT).
      </p>
    </div>
  );
}
