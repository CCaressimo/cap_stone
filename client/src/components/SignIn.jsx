import React from 'react'
import "./css/Background.css"

export default function SignIn() {
    return (
       <div class="container mx-auto p-4 h-full relative pt-36 lg:pt-48 px-20
       ">
      <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <div class="relative w-full mb-3">
        <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="grid-password">Email</label>
        <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email"></input>
        </div>

        <div class="relative w-full mb-3">
        <label class="block uppercase text-gray-600 text-xs font-bold mb-2" for="grid-password">Password</label>
        <input type="password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password">
        </input>
        </div>
        <div class="text-center mt-6"><button class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none" type="button">Sign In</button>
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
}