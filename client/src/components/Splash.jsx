import React from "react";
import { useSpring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";

import "./css/Background.css";
import "./css/fonts.css"

import Retro from './Images/retro.png'
import Movie from './Images/movie.jpg'


export default function Splash() {
  
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  
  return (
    <main>
      <animated.div className="App" style={fade}>
      <section className="relative">
        <div className="py-12 md:py-8 px-6 max-w-6xl mx-auto" >
          <div className="w-full overflow-y-hidden px-4">
              <img
              src={Retro}
              alt="Retro flixs n fairs"
              className="pb-12"
            />
            <div className="">
              <p className="textFont subText text-xs md:text-2xl text-center">
                Hungry for that Gen-X childhood vibe?
              </p>
              <p className="textFont subText text-xs md:text-2xl text-center">
                Well let's watch some good ol movies and shows!
              </p>
            </div>
          </div>
            <div className="text-center py-12">
              <NavLink 
                to="/FlixNFair"
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
      </animated.div>
    </main>
    
  );
}
