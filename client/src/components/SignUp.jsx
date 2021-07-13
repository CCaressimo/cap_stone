import React from "react";
export default function SignUp() {
  return (
    <main className="leading-normal tracking-normal">
      <section className="relative leading-normal tracking-normal pt-6">
        <div className="signinSize relative border border-gray-400 rounded-b rounded-t overflow-hidden shadow-lg leading-normal tracking-normal max-w-6xl mx-auto">
          <form
            onSubmit="*"
            className="splashBx mx-auto text-center break-normal"
          >
            <div className="w-full m-0 p-12 bg-cover bg-bottom">
              <div className="mx-auto text-center break-normal">
                <p className="headerText shadow-inner font-bold text-3xl md:text-5xl">
                  Sign up
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 pl-6 pr-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                ></label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="First Name"
                  name="first name"
                />
              </div>
              <div className="w-full md:w-1/2 pr-6 pl-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                ></label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last Name"
                  name="last name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 pl-6 pr-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                ></label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="w-full md:w-1/2 pr-6 pl-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                ></label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>
            <div className="text-center pb-6">
              <button
                className="headerText nextButton text-2xl py-2 px-4 border border-gray-200 rounded shadow"
                type="submit"
                value="Send"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
