import React from 'react'
import "./css/Background.css"
import "./css/authentication.css"

export default function SignIn() {
    return (
     <main className="leading-normal tracking-normal">
       <section class="grid min-h-screen place-items-center">
<div class="container mx-auto p-4 h-full relative pt-36 lg:pt-48 px-20">
    <div class="flex content-center items-center justify-center h-full">
       <div class="w-full  px-4">
         <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border border-green-500 border-opacity-100">
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-center mb-3 p-5">
            <h1 class="t font-bold dataText">Sign in</h1>
              <p class="  font-bold dataText">Sign in to access your account</p>
              </div>
              <hr class="mt-6 border-b-1 border-green-900"/>
      <form>
          <div class="relative w-full mb-3 item-center p-5">
            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 dataText" for="grid-password">Email</label>
          
            <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-gradient-to-r from-green-50 to-green-900 " placeholder="Email"></input>
          </div>

          <div  class="relative w-full mb-3">
            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2 dataText" for="grid-password">Password</label>
            <input type="password"class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-gradient-to-r from-green-50 to-green-900 " placeholder="password"></input> 
          </div>
          <div class="text-center mt-6">
            <button class=" dataButton" type="button">Sign In</button>
          </div>
          <p class="textFont text-base cursor-pointer hover:text-black"><a href="/signUp" >Need an account?</a></p>
      </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>
      </main>
      
    );
}