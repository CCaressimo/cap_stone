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
      <section className="grid min-h-screen place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <form action="">
            <div className="text-center mb-10">
            <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
            </div>
            <hr />
            <div className="flex justify-between gap-3">
              <span className="w-1/2">
                <label htmlFor="firstname" className="text-lg font-semibold px-5">Firstname</label>
                <input id="firstname" type="text" name="firstname" placeholder="John" autoComplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"></input>
              </span>
              <span className="w-1/2">
                <label htmlFor="lastname" className="text-lg font-semibold px-5">Lastname</label>
                <input id="lastname" type="text" name="lastname" placeholder="Doe" autoComplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" ></input>
              </span>
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-semibold "><h1>email</h1> </label> 
              <input type="text" placeholder ='Enter Email' onChange={(e) => {
                
                setEmail(e.target.value);

              }} name="email" className="w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />  
              <label htmlFor="psw" className="text-lg font-semibold "><h1>password</h1> </label> 
              <input type="Password" placeholder="Enter Password" onChange={(e) => {
                
                setPassword(e.target.value);

              }} className="w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
            
              <hr />
              <p>By creating an account you agree to our Terms & Privacy.</p>
              <button onClick={register} type="submit"  className=" w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">Sign up</button>
            </div>
              <a href="/signin" className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</a>
            </form>
        </div>
      </section>
    </main>
  );
}