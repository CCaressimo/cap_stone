import React from "react";
import { useSpring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";

import "./css/Background.css";
import "./css/fonts.css"

import Retro from './Images/retro.png'

export default function FlixNFair() {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

//   const genreSelector = () => {
//       const genreType = document.getElementById('genreType')
//       const result = document.getElementById('result')

//       result.innerHTML = genreType.value
//       console.log(result)
//   }

// const mediaSelector = () => {
//       const mediaType = document.getElementById('genreType')
//       const result = document.getElementById('result')

//       result.innerHTML = genreType.value
//       console.log(result)
//   }

 

    function processFlix() {
     // validate default or choice selected in genere and type
     // assume check both are selected and not the default value

     //retrieve selected items from user
     const genreType = document.getElementById('genreType');
     const mediaType = document.getElementById('mediaType');
     var selectedGenre = genreType.value;
     var selectedMedia = mediaType.value;

     console.log(selectedGenre)
     console.log(selectedMedia)



       const apiUrl = 'http://localhost:8080/fares';
       fetch(apiUrl)
         .then((res) => res.json())
           .then((json) => {
               testFunction(json)
       })
       console.log(apiUrl)
     


  }


  function testFunction(testjson) {
      console.log(testjson)
  }
// https://api.watchmode.com/v1/${genre}/?apiKey=${apiKey}

 

    return (
        <main>
            <animated.div className="App" style={fade}>
                <section className="sm:absolute">
                    <div className="py-12 md:pt-8 px-6 max-w-6xl mx-auto" >
                        <div className="w-full overflow-y-hidden px-4">
                            <NavLink 
                                to="/home"
                                className=""
                            >
                                <img
                                    src={Retro}
                                    alt="Retro flixs n fairs"
                                    className="w-36 pb-12 md:pb-8"
                                />
                            </NavLink>
                        </div>
                        <div  id="result"></div>
                        <div className="border border-gray-400 containerBg rounded overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                            <div className="py-3">
                                <label htmlFor="genre" className="pr-4">Genre: </label>
                                    <select className="mt-2 sm:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="genre" id="genreType">
                                        <option defaultValue>Select</option>
                                        <option value="1">Action</option>
                                        <option value="33">Anime</option>
                                        <option value="4">Comedy</option>
                                        <option value="7">Drama</option>
                                        <option value="8">Family</option>
                                        <option value="28">Game Show</option>
                                        <option value="11">Horror</option>
                                        <option value="14">Romance</option>
                                        <option value="40">Sci-Fi</option>
                                        <option value="25">Soap</option>
                                    </select>
                            </div>
                            <div className="py-3">
                                <label htmlFor="Media" className="pr-4">Media: </label>
                                    <select className="mt-2 sm:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="Media" id="mediaType">
                                        <option defaultValue>Select</option>
                                        <option value="movie">Movie</option>
                                        <option value="tv_series">TV Series</option>
                                    </select>
                            </div>
                            
                            <div className="py-4">
                                <button onClick={processFlix} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                                    Flix
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="py-12 md:pt-8 px-6 max-w-6xl mx-auto" >
                        <div className="border border-gray-400 containerBg rounded overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                            <h1>5 Shows will populate here</h1>
                        </div>
                    </div>
                    <div className="py-12 md:pt-8 px-6 max-w-6xl mx-auto" >
                        <div className="border border-gray-400 containerBg rounded overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                            <h1>1 Snack and bev will populate here</h1>
                        </div>
                    </div>
                </section>
            </animated.div>
        </main>
    )
}

    