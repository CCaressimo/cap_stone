import React from "react";

import "./css/Background.css";
import "./css/fonts.css"

import Retro from './Images/retro.png'
import Movie from './Images/movie.jpg'
import { NavLink } from "react-router-dom";

export default function Splash() {

  
  return (
    <main>
      
      <section className="relative">
        <div className="py-12 md:py-8 px-6 max-w-6xl mx-auto">
          <div className="w-full overflow-y-hidden px-4">
              <img
              src={Retro}
              alt="Retro flixs n fairs"
              className="pb-12"
            />
            <div className="border border-gray-400 rounded-t rounded-b">
              <p className="dataFont subText text-xs md:text-2xl text-center">
                Having a hard time finding something new to watch?
              </p>
              <p className="dataFont subText text-xs md:text-2xl text-center">
                Well let our app choice something new for you to start binging and
                also getting a recommendation on what to eat and drink while
                watching your new show!
              </p>
            </div>
          </div>
            <div className="text-center py-12">
              <NavLink 
                to="/FlixsNFair"
                className="dataButton text-2xl py-2 px-4 shadow"
              >
                Let's get started
              </NavLink>
            </div>
              <img
              src={Movie}
              alt="Movie poster"
              className="border rounded-t rounded-b"
            />
        </div>
      </section>
    </main>
  );
}
