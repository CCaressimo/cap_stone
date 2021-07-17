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
        <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <form action="">
            <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
            </div>
            <hr />
            <div class="flex justify-between gap-3">
              <span class="w-1/2">
                <label for="firstname" class="text-lg font-semibold px-5">Firstname</label>
                <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"></input>
              </span>
              <span class="w-1/2">
                <label for="lastname" class="text-lg font-semibold px-5">Lastname</label>
                <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" ></input>
              </span>
            </div>
            <div>
              <label htmlFor="email" class="text-lg font-semibold "><h1>email</h1> </label> 
              <input type="text" placeholder ='Enter Email' onChange={(e) => {
                
                setEmail(e.target.value);

              }} name="email" class="w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />  
              <label htmlFor="psw" class="text-lg font-semibold "><h1>password</h1> </label> 
              <input type="Password" placeholder="Enter Password" onChange={(e) => {
                
                setPassword(e.target.value);

              }} class="w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
            
              <hr />
              <p>By creating an account you agree to our Terms & Privacy.</p>
              <button onClick={register} type="submit"  class=" w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">Sign up</button>
            </div>
              <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
            </form>
        </div>
      </section>
    </main>
  );
}