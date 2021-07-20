import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import Axios from 'axios'

export default function SignUp() {
  const [emailReg, setEmail] = useState("");
  const [passwordReg, setPassword] = useState("");
  const [firstName, setFirstName] =  useState("");
  const [lastName, setLastName] = useState("");
  const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const body = { emailReg, passwordReg, firstName, lastName }
        const response = await fetch ("http://retro-flixnfares-capstone.herokuapp.com/register", {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(body)
        });
          console.log(response);
      } catch (err) {
          console.error(err.message);
      }
  };
  // const register = () => {
  //     Axios.post ("http://localhost8080/register", {email: emailReg, password: passwordReg}).then((response)=> {
  //       console.log(response)
  //     });
  //   };
  return (
    <main className="leading-normal tracking-normal">
      <section className="relative">
        <div className="py-48 md:py-60 px-6 max-w-2xl mx-auto">
          <form action="" onSubmit={onSubmitForm} className="border border-green-500 border-opacity-100 rounded p-12">
            <div className="text-center mb-10">
            <h1 className="textFont text-4xl md:text-6xl">REGISTER</h1>
            </div>
            <hr />
            <div className="flex justify-between gap-3">
              <span className="w-1/2 pt-2">
                <label htmlFor="firstname" className="text-2xl textFont px-5">Firstname</label>
                <input id="firstname" type="text" name="firstname" onChange={e => setFirstName(e.target.value)} value={firstName} placeholder="John" autoComplete="given-name" className="textFont2 text-lg bg-blue-400 bg-opacity-70 border border-green-500 border-opacity-100 rounded block w-full p-3 mt-2"></input>
              </span>
              <span className="w-1/2 pt-2">
                <label htmlFor="lastname" className="text-2xl textFont px-5">Lastname</label>
                <input id="lastname" type="text" name="lastname" onChange={e => setLastName(e.target.value)} value={lastName} placeholder="Doe" autoComplete="family-name" className="textFont2 text-lg bg-blue-400 bg-opacity-70 border border-green-500 border-opacity-100 rounded block w-full p-3 mt-2"></input>
              </span>
            </div>
            <div>
              <label htmlFor="email" className="text-2xl textFont"><h1 className="pt-2">Email</h1> </label>
              <input type="text" placeholder ='Enter Email' onChange={e => setEmail(e.target.value)} name="email" value={emailReg} className="textFont2 text-lg bg-blue-400 bg-opacity-70 border border-green-500 border-opacity-100 rounded block w-full p-3 mt-2"/>
              <label htmlFor="psw" className="text-2xl textFont"><h1 className="pt-2">Password</h1> </label>
              <input type="Password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} className="textFont2 text-lg bg-blue-400 bg-opacity-70 border border-green-500 border-opacity-100 rounded block w-full p-3 mt-2 mb-4"/>
              <hr/>
              {/* <p>By creating an account you agree to our Terms & Privacy.</p> */}
              <div className="text-center pt-6">
                <a href="/">
                  <button 
                  to="/" type="submit"  className=" dataButton text-lg md:text-2xl py-2 px-4 shadow border border-green-500 border-opacity-100 rounded">I'LL BE BACK!</button>
                </a>
              </div>
            </div>
              <NavLink 
                to="/" className="textFont flex justify-between inline-block mt-4 text-xs  cursor-pointer hover:text-black">
                  Already registered?
                </NavLink>
            </form>
        </div>
      </section>
    </main>
  );
}