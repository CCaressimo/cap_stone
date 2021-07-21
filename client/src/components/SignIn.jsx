import React from 'react'
import { NavLink } from "react-router-dom";
import "./css/Background.css"

export default function SignIn() {
    return (
      <main className="leading-normal tracking-normal">
        <section className="relative">
          <div className="py-48 md:py-60 px-6 max-w-2xl mx-auto">
            <form onSubmit="*" className="border border-green-500 border-opacity-100 rounded">
              <div className="w-full m-0 p-12 bg-cover">
                <div className="max-w-4xl mx-auto text-center break-normal">
                  <p className="textFont text-4xl md:text-6xl text-center pt-2">
                    Sign In
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-12 md:pl-12 md:pr-4">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  ></label>
                  <label htmlFor="email" className="text-2xl textFont"><h1 className="pt-2">Email</h1> </label>
                  <input
                    className="textFont2 text-lg bg-blue-400 bg-opacity-70 border border-green-500 border-opacity-100 rounded block w-full p-3 mt-2"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="w-full md:w-1/2 px-12 md:pr-12 md:pl-4">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  ></label>
                  <label htmlFor="psw" className="text-2xl textFont"><h1 className="pt-2">Password</h1> </label>
                  <input
                    className="textFont2 text-lg bg-blue-400 bg-opacity-70 border border-green-500 border-opacity-100 rounded block w-full p-3 mt-2"
                    id="grid-last-name"
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                </div>
              </div>
              <div className="text-center pb-6">
                <NavLink
                  to="/signup"
                  className="dataButton text-xs md:text-md py-2 px-4 shadow border border-green-500 border-opacity-100 rounded">
                  Not signed up?
                </NavLink>
              </div>
              <div className="text-center pb-6">
                <NavLink
                  to="./home"
                  className="dataButton text-lg md:text-2xl py-2 px-4 shadow border border-green-500 border-opacity-100 rounded"
                  type="submit"
                  value="Send"
                >
                  WAX ON
                </NavLink>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
}