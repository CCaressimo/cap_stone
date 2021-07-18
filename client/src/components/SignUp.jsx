import React, { useState, useContext } from "react";
import Axios from 'axios'


export default function SignUp() {

  const [emailReg, setEmail] = useState("");
  const [passwordReg, setPassword] = useState("");

  const register = () => {
      Axios.post ("http://localhost8080/register", {email: emailReg, password: passwordReg}).then((response)=> {

        console.log(response)

      });
    };


  return (
    <main className="leading-normal tracking-normal">
      <section class="grid min-h-screen place-items-center">
      <div class="container mx-auto p-4 h-full relative pt-36 lg:pt-48 px-20 "> 
      <div class="flex content-center items-center justify-center h-full">
         <div class="w-full  px-4">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border border-green-500 border-opacity-100 p-5">
          <form action="">
            <div class="text-center mb-10">
            <h1 class="font-bold text-3xl  dataText">REGISTER</h1>
            </div>
            <hr class="mt-6 border-b-1 border-green-900"/>
            <div class="flex justify-between gap-3">
              <span class="w-1/2">
                <label for="firstname" class="text-lg font-semibold px-5 dataText">Firstname</label>
                <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-gradient-to-r from-green-50 to-green-900 "></input>
              </span>
              <span class="w-1/2">
                <label for="lastname" class="text-lg font-semibold px-5 dataText">Lastname</label>
                <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-gradient-to-r from-green-50 to-green-900 " ></input>
              </span>
            </div>
            <div>
              <label htmlFor="email" class="text-lg font-semibold dataText"><h1>email</h1> </label> 
              <input type="text" placeholder ='Enter Email' onChange={(e) => {
                
                setEmail(e.target.value);

              }} name="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-gradient-to-r from-green-50 to-green-900 " />  
              <label htmlFor="psw" class="text-lg font-semibold dataText"><h1>password</h1> </label> 
              <input type="Password" placeholder="Enter Password" onChange={(e) => {
                
                setPassword(e.target.value);

              }} class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 bg-gradient-to-r from-green-50 to-green-900 " />
            
              <hr />
              <p class="textFont text-base p-5">By creating an account you agree to our Terms & Privacy.</p>
              <div class="text-center mt-6">
              <button onClick={register} type="submit"  class="dataButton ce">Sign up</button>
              </div>
            </div>
              <p class="textFont text-base cursor-pointer hover:text-black"><a href="/" >Already registered?</a></p>
            </form>
            </div>
            </div>
            </div>
        </div>
      </section>
    </main>
  );
}