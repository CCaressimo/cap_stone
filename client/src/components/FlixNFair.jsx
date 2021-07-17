import React, {useState} from "react";
import { useSpring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";

import "./css/Background.css";
import "./css/fonts.css"

import Retro from './Images/retro.png'

function FlixNFair() {

const [fares, setFares] = useState ([])

function processFlix() {
     // validate default or choice selected in genere and type
     // assume check both are selected and not the default value
     
     //retrieve selected items from user
     const genreType = document.getElementById('genreType');
     const mediaType = document.getElementById('mediaType');
     const streamingSource = document.getElementById('streamingSource');
     var selectedGenre = genreType.value;
     var selectedMedia = mediaType.value;
     var selectedSource = streamingSource.value;
     
     console.log(selectedGenre)
     console.log(selectedMedia)
     console.log(selectedSource)

     
     const apiUrl = `http://localhost:8080/fares/${selectedGenre}`;
     fetch(apiUrl)
     .then((res) => res.json())
     .then((json) => {
         setFares(json)
        })
        
        
        const flixUrl = `http://localhost:8080/flix/${selectedGenre}?mediatype=${selectedMedia}&streaming_source=${selectedSource}`;
           fetch(flixUrl)
             .then((res) => res.json())
               .then((json) => {
                       testFunction(json)
               })
               console.log(flixUrl)
            
               function testFunction(testjson) {
                   console.log(testjson)
               }
}


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
                <section className="sm:absolute">
                    <div className="py-12 md:pt-8 px-6 max-w-6xl mx-auto" >
                        <div className="w-full overflow-y-hidden">
                            <NavLink 
                                to="/home"
                                className=""
                                >
                                <img
                                    src={Retro}
                                    alt="Retro flixs n fairs"
                                    className="w-36 border border-green-500 border-opacity-100 rounded"
                                    />
                            </NavLink>
                        </div>
                        <div className="pt-12 md:pt-8" id="result"></div>
                        <div className="border border-green-500 border-opacity-100 rounded overflow-hidden shadow-lg md:leading-normal tracking-normal p-4 max-w-6xl mx-auto">
                            <div className="py-3">
                                <label htmlFor="genre" className="dataText md:text-4xl text-2xl pr-4">Genre: </label>
                                    <select className="textFont mt-2 sm:w-56 rounded-md shadow-lg md:text-2xl text-lg bg-blue-400" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="genre" id="genreType">
                                        <option defaultValue className="textFont block px-4 py-2 text-sm ">Select</option>
                                        <option value="Action" className="textFont block px-4 py-2 text-sm">Action</option>
                                        <option value="Comedy" className="textFont block px-4 py-2 text-sm">Comedy</option>
                                        <option value="Family" className="textFont block px-4 py-2 text-sm">Family</option>
                                        <option value="Horror" className="textFont block px-4 py-2 text-sm">Horror</option>
                                        <option value="Romance" className="textFont block px-4 py-2 text-sm">Romance</option>
                                        <option value="Sci-Fi" className="textFont block px-4 py-2 text-sm">Sci-Fi</option>
                                        <option value="Soap" className="textFont block px-4 py-2 text-sm">Soap</option>
                                    </select>
                            </div>
                            <div className="py-3">
                                <label htmlFor="Media" className="dataText md:text-4xl text-2xl pr-4">Media: </label>
                                    <select className="mt-2 sm:w-56 rounded-md shadow-lg textFont md:text-2xl text-lg bg-red-400" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="Media" id="mediaType">
                                        <option defaultValue className="textFont block px-4 py-2 text-sm">Select</option>
                                        <option value="movie" className="textFont block px-4 py-2 text-sm">Movie</option>
                                        <option value="tv_series" className="textFont block px-4 py-2 text-sm">Series</option>
                                    </select>
                            </div>
                            <div className="py-3">
                                <label htmlFor="Media" className="dataText md:text-4xl text-2xl pr-4">Source: </label>
                                    <select className="mt-2 sm:w-56 rounded-md shadow-lg textFont md:text-2xl text-lg bg-red-400" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="Media" id="streamingSource">
                                        <option defaultValue className="textFont block px-4 py-2 text-sm">Select</option>
                                        <option value="Netflix" className="textFont block px-4 py-2 text-sm">Netflix</option>
                                        <option value="Hulu" className="textFont block px-4 py-2 text-sm">Hulu</option>
                                        <option value="Amazon Prime" className="textFont block px-4 py-2 text-sm">Amazon Prime</option>
                                        <option value="HBO Max" className="textFont block px-4 py-2 text-sm">HBO Max</option>
                                        <option value="Disney+" className="textFont block px-4 py-2 text-sm">Disney+</option>
                                    </select>
                            </div>
                            
                            <div className="py-4">
                                <button onClick={processFlix} className="dataButton py-2 px-4 border border-green-500 rounded text-2xl">
                                    Flix
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="py-12 md:pt-8 px-6 max-w-6xl mx-auto" >
                        <div className="border border-green-500 border-opacity-100 rounded overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                            <h1 className="textFont md:text-4xl text-2xl">5 Shows will populate here</h1>
                            {/* <form action="../../server.js" method="POST" id="playlist_generator">
                                ${data.map(song => {
                                    return `<iframe src="${song.embed_link}" width="250" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
                                }).join('')}
                            </form> */}
                                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                    <img src="https://source.unsplash.com/random/350x350" alt=" random imgee" className="w-60 object-cover object-center rounded-lg shadow-md" />    
                                    <div class="relative pl-4 -mt-12  ">
                                        <div class="bg-white p-6 rounded-lg shadow-lg">
                                            <div class="flex items-baseline"> 
                                            </div>
                                            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">Title</h4>
                                            <div class="mt-1">
                                                year
                                            </div>
                                            <div class="mt-4">
                                                <a class="text-teal-600 text-md font-semibold">streamingSource </a>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    <div className="py-12 md:pt-8 px-6 max-w-6xl mx-auto" >
                        <div className="border border-green-500 border-opacity-100 rounded overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                            <h1 className="textFont md:text-4xl text-2xl">1 Snack and bev will populate here</h1>
                            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                                {fares.map(fare => {
                                    return (
                                    <>
                                    <img src={fare.imgurl} alt="" className="w-60 object-cover object-center rounded-lg shadow-md" />
                                    <div class="relative px-4 -mt-16  ">
                                    <div class="bg-white p-6 rounded-lg shadow-lg">
                                        <div class="flex items-baseline"> 
                                        </div>
                                        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{fare.farename}</h4>
                                    </div> 
                                    </div>
                                    </>
                                    )
                                })} 
                            </div>
                        </div> 
                    </div>
                </section>
            </animated.div>
        </main>
    )
}

export default FlixNFair    