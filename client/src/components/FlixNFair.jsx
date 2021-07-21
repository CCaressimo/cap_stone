import React, {useState, useEffect} from "react";
import { useSpring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";

import "./css/Background.css";
import "./css/fonts.css"

import Retro from './Images/retro.png'

function FlixNFair() {

    const [flixPick, setFlix] = useState ([])
    const [fares, setFares] = useState ([])
    const [drinks, setDrinks] = useState ([])

    function processFlix() {
        const genreType = document.getElementById('genreType');
        const mediaType = document.getElementById('mediaType');
        const streamingSource = document.getElementById('streamingSource');
        var selectedGenre = genreType.value;
        var selectedMedia = mediaType.value;
        var selectedSource = streamingSource.value;
        
        console.log(selectedGenre)
        console.log(selectedMedia)
        console.log(selectedSource)    

        const faresUrl = `${process.env.REACT_APP_SERVER_URL}/fares/${selectedGenre}`;
            fetch(faresUrl)
                .then((res) => res.json())
                    .then((json) => {
                        setFares(json)
                    })
        
        const drinksUrl = `${process.env.REACT_APP_SERVER_URL}/drinks/${selectedGenre}`;
            fetch(drinksUrl)
                .then((res) => res.json())
                    .then((json) => {
                        setDrinks(json)
                    })

        let flixUrl = `${process.env.REACT_APP_SERVER_URL}/flix/${selectedGenre}?mediatype=${selectedMedia}&streaming_source=${selectedSource}`;
           fetch(flixUrl)
             .then((res) => res.json())
               .then((json) => {
                    setFlix(json)
               })
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
                <section className="relative">
                    <div className="lg:flex justify-start max-w-6xl mx-auto">
                        <div className="pb-12 md:pt-8 px-6" >
                            <div className="w-full overflow-y-hidden">
                                <div className="pt-6 pb-8">
                                    <NavLink 
                                        to="/"
                                        className="dataButton underline text-xs md:text-lg py-2" 
                                    >
                                        HASTA LA VISTA
                                    </NavLink>
                                </div>
                                <NavLink 
                                to="/home"
                                className=""
                                >
                                    <img
                                    src={Retro}
                                    alt="Retro flixs n fairs"
                                    className="w-36 border border-green-500 border-opacity-100 rounded-xl"
                                    />
                                </NavLink>
                            </div>
                            <div className="pt-12 md:pt-8" id="result"></div>
                            <div className="border border-green-500 border-opacity-100 rounded-xl overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                                <div className="py-3">
                                    <label htmlFor="genre" className="dataText md:text-4xl text-2xl pr-4">Genre: </label>
                                        <select className="textFont mt-2 py-1 px-2 sm:w-56 rounded-xl shadow-lg md:text-2xl text-lg bg-blue-400 border border-green-500 border-opacity-100" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="genre" id="genreType">
                                            <option defaultValue className="textFont block px-4 py-2 text-sm ">Select</option>
                                            <option value="Action" className="textFont block px-4 py-2 text-sm">Action</option>
                                            <option value="Comedy" className="textFont block px-4 py-2 text-sm">Comedy</option>
                                            <option value="Drama" className="textFont block px-4 py-2 text-sm">Drama</option>
                                            <option value="Family" className="textFont block px-4 py-2 text-sm">Family</option>
                                            <option value="Horror" className="textFont block px-4 py-2 text-sm">Horror</option>
                                            <option value="Romance" className="textFont block px-4 py-2 text-sm">Romance</option>
                                            <option value="Sci-Fi" className="textFont block px-4 py-2 text-sm">Sci-Fi</option>
                                        </select>
                                </div>
                                <div className="py-3">
                                    <label htmlFor="Media" className="dataText md:text-4xl text-2xl pr-4">Media: </label>
                                    <select className="mt-2 py-1 px-2 sm:w-56 rounded-xl shadow-lg textFont md:text-2xl text-lg bg-red-400 border border-green-500 border-opacity-100" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="Media" id="mediaType">
                                        <option defaultValue className="textFont block px-4 py-2 text-sm">Select</option>
                                        <option value="Movie" className="textFont block px-4 py-2 text-sm">Movie</option>
                                        <option value="Series" className="textFont block px-4 py-2 text-sm">Series</option>
                                    </select>
                                </div>
                                <div className="py-3">
                                    <label htmlFor="Media" className="dataText md:text-4xl text-2xl pr-4">Stream:</label>
                                    <select className="mt-2 py-1 px-2 sm:w-56 rounded-xl shadow-lg textFont md:text-2xl text-lg bg-red-400 border border-green-500 border-opacity-100" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="Media" id="streamingSource">
                                        <option defaultValue className="textFont block px-4 py-2 text-sm">Select</option>
                                        <option value="Netflix" className="textFont block px-4 py-2 text-sm">Netflix</option>
                                        <option value="Hulu" className="textFont block px-4 py-2 text-sm">Hulu</option>
                                        <option value="Amazon Prime" className="textFont block px-4 py-2 text-sm">Amazon Prime</option>
                                        <option value="HBO Max" className="textFont block px-4 py-2 text-sm">HBO Max</option>
                                        <option value="Disney" className="textFont block px-4 py-2 text-sm">Disney+</option>
                                    </select>
                                </div>
                                <div className="py-4">
                                    <button onClick={processFlix} className="dataButton py-2 border border-green-500 rounded-xl text-2xl px-2">
                                        GET SLIMED
                                    </button>
                                </div>
                            </div>
                            <div className="py-12">
                                <NavLink 
                                    to="/credits"
                                    className="dataButton underline text-xs md:text-lg py-2 shadow" 
                                    >
                                    YOU CAN BE MY WINGMEN ANYTIME.
                                </NavLink>
                            </div>
                        </div>
                        <div className="py-12 md:pt-8 px-6" >
                            <div className="border border-green-500 border-opacity-100 rounded-xl overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                                <h1 className="textFont md:text-4xl text-2xl text-center">Here are some choices from what you have picked: </h1>
                                {flixPick.map(flix => {
                                    // console.log(flix)
                                    return (
                                        <>
                                            <div className="w-full p-6 flex flex-col flex-grow flex-shrink">
                                                <div className="flex-1 rounded-xl overflow-hidden shadow-lg flex h-screen justify-center items-center">
                                                    <div className="">
                                                        <img src={flix.poster_url} alt="Movie Poster" className="moviePoster object-cover rounded-lg shadow-md mx-auto" />    
                                                        <div className="relative px-4 max-w-sm  mx-auto">
                                                            <div className="bg-blue-400  bg-opacity-75 rounded-lg shadow-lg mx-auto">
                                                                <div className="mt-1 text-2xl md:text-3xl text-center textFont2 px-6">
                                                                    {flix.title}
                                                                </div>
                                                                <div className="mt-1 text-xl md:text-2xl textFont2 text-right">
                                                                    {flix.release_date}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="py-12 md:pt-8 px-6" >
                            <div className="border border-green-500 border-opacity-100 rounded-xl overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                                <h1 className="textFont text-center md:text-4xl text-2xl">Some fares that fit with your choice:</h1>                    
                                {fares.map(fare => {
                                    return (
                                        <>
                                           <div className="w-full p-6 flex flex-col flex-grow flex-shrink">
                                                <div className="flex-1 rounded-xl overflow-hidden shadow-lg flex h-screen justify-center items-center">
                                                    <div className="">
                                                        <img src={fare.imgurl} alt="fares" className="faresPoster object-cover rounded-lg shadow-md mx-auto" />    
                                                        <div className="relative max-w-sm mx-auto">
                                                            <div className="bg-red-400 bg-opacity-75 rounded-lg shadow-lg">
                                                                <div className="mt-1 text-lg md:text-2xl text-center textFont px-4 mb-5">
                                                                    {fare.farename}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })} 
                                
                                {drinks.map(drink => {
                                    return (
                                        <>
                                            <div className="w-full p-6 flex flex-col flex-grow flex-shrink">
                                                <div className="flex-1 rounded-xl overflow-hidden shadow-lg flex h-screen justify-center items-center">
                                                    <div className="">
                                                        <img src={drink.imgurl} alt="drinks" className="faresPoster object-cover rounded-lg shadow-md mx-auto" />    
                                                        <div className="relative max-w-sm mx-auto">
                                                            <div className="bg-red-400 rounded-lg shadow-lg">
                                                                <div className="mt-1 text-lg md:text-2xl text-center textFont px-4 mb-5">
                                                                    {drink.drinkname}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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