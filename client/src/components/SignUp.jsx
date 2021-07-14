import React from "react";

export default function SignUp() {
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
                <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required=""></input>
              </span>
              <span class="w-1/2">
                <label for="lastname" class="text-lg font-semibold px-5">Lastname</label>
                <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required=""></input>
              </span>
            </div>
            <div>
              <label htmlFor="email" class="text-lg font-semibold "><h1>email</h1> </label> 
              <input type="text" placeholder ='Enter Email' name="email" class="w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />  

              <label htmlFor="psw" class="text-lg font-semibold "><h1>password</h1> </label> 
              <input type="Password" placeholder="Enter Password" name="psw" id="psw" class="w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required/>
              
              <label htmlFor="psw-repeat" class="text-lg font-semibold "><h1>Repeat password</h1> </label> 
              <input type="Password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" class=" w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required/>
              <hr />
              <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
             
              <button type="submit" class=" w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">Sign up</button>

            </div>
              <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"><a href="#">Already registered?</a></p>

            </form>
           
          
        </div>
      </section>
    </main>
  );
}
