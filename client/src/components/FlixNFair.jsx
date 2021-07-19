import React, {useState, useEffect} from "react";
import { useSpring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";

import "./css/Background.css";
import "./css/fonts.css"

import Retro from './Images/retro.png'

function FlixNFair() {

    const [flixPick, setFlix] = useState ([])
    // const [mediaPick, setMedia] = useState ([])
    // const [sourcePick, setSource] = useState ([])
    const [fares, setFares] = useState ([])
    const [drinks, setDrinks] = useState ([])

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

        const faresUrl = `http://localhost:8080/fares/${selectedGenre}`;
            fetch(faresUrl)
                .then((res) => res.json())
                    .then((json) => {
                        setFares(json)
                    })
        
        const drinksUrl = `http://localhost:8080/drinks/${selectedGenre}`;
            fetch(drinksUrl)
                .then((res) => res.json())
                    .then((json) => {
                        setDrinks(json)
                    })

        let flixUrl = `http://localhost:8080/flix/${selectedGenre}?mediatype=${selectedMedia}&streaming_source=${selectedSource}`;
           fetch(flixUrl)
             .then((res) => res.json())
               .then((json) => {
                    setFlix(json)
               })


        // if (selectedGenre && selectedMedia && selectedSource !== null){
        //     flixUrl = `http://localhost:8080/flix/${selectedGenre}?mediatype=${selectedMedia}&streaming_source=${selectedSource}`
        //         fetch(flixUrl)
        //         .then((res) => res.json())
        //         .then((json) => {
        //                 setFlix(json)
        //         })
        // } else if (selectedGenre && selectedMedia !== null && selectedSource === null){
        //     flixUrl = `http://localhost:8080/flix/${selectedGenre}?mediatype=${selectedMedia}`
        //         fetch(flixUrl)
        //         .then((res) => res.json())
        //         .then((json) => {
        //                 setFlix(json)
        //         })
        // } else if (selectedGenre === null && selectedMedia && selectedSource !== null){
        //     flixUrl = `http://localhost:8080/flix/${selectedMedia}&streaming_source=${selectedSource}`
        //         fetch(flixUrl)
        //         .then((res) => res.json())
        //         .then((json) => {
        //                 setFlix(json)
        //         })
        // }

        // const mediaUrl = `http://localhost:8080/flix/${selectedGenre}?mediatype=${selectedMedia}`;
        //    fetch(mediaUrl)
        //      .then((res) => res.json())
        //        .then((json) => {
        //             setMedia(json)
        //        })

        // const sourceUrl = `http://localhost:8080/flix/${selectedMedia}&streaming_source=${selectedSource}`;
        //    fetch(sourceUrl)
        //      .then((res) => res.json())
        //        .then((json) => {
        //             setSource(json)
        //        })

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
                                <div className="py-6">
                                    <NavLink 
                                        to="/"
                                        className="dataButton text-xs md:text-2xl py-2 px-4 shadow border border-green-500 border-opacity-100 rounded" 
                                    >
                                        Sign Out
                                    </NavLink>
                                </div>
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
                            <div className="border border-green-500 border-opacity-100 rounded overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                                <div className="py-3">
                                    <label htmlFor="genre" className="dataText md:text-4xl text-2xl pr-4">Genre: </label>
                                        <select className="textFont mt-2 sm:w-56 rounded-md shadow-lg md:text-2xl text-lg bg-blue-400" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="genre" id="genreType">
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
                                    <select className="mt-2 sm:w-56 rounded-md shadow-lg textFont md:text-2xl text-lg bg-red-400" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="Media" id="mediaType">
                                        <option defaultValue className="textFont block px-4 py-2 text-sm">Select</option>
                                        <option value="Movie" className="textFont block px-4 py-2 text-sm">Movie</option>
                                        <option value="Series" className="textFont block px-4 py-2 text-sm">Series</option>
                                    </select>
                                </div>
                                <div className="py-3">
                                    <label htmlFor="Media" className="dataText md:text-4xl text-2xl pr-4">Stream:</label>
                                    <select className="mt-2 sm:w-56 rounded-md shadow-lg textFont md:text-2xl text-lg bg-red-400" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1" name="Media" id="streamingSource">
                                        <option defaultValue className="textFont block px-4 py-2 text-sm">Select</option>
                                        <option value="Netflix" className="textFont block px-4 py-2 text-sm">Netflix</option>
                                        <option value="Hulu" className="textFont block px-4 py-2 text-sm">Hulu</option>
                                        <option value="Amazon Prime" className="textFont block px-4 py-2 text-sm">Amazon Prime</option>
                                        <option value="HBO Max" className="textFont block px-4 py-2 text-sm">HBO Max</option>
                                        <option value="Disney" className="textFont block px-4 py-2 text-sm">Disney+</option>
                                    </select>
                                </div>
                                <div className="py-4">
                                    <button onClick={processFlix} className="dataButton py-2 px-4 border border-green-500 rounded text-2xl">
                                        Flix
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="py-12 md:pt-8 px-6" >
                            <div className="border border-green-500 border-opacity-100 rounded overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                                <h1 className="textFont md:text-4xl text-2xl text-center">Here are some choices from what you have picked: </h1>
                                {flixPick.map(flix => {
                                    // console.log(flix)
                                    return (
                                        <>
                                            <div className="w-full p-6 flex flex-col flex-grow flex-shrink">
                                                <div className="flex-1 rounded overflow-hidden shadow-lg flex h-screen justify-center items-center">
                                                    <div className="">
                                                        <img src={flix.poster_url} alt="Movie Poster" className="moviePoster object-cover rounded-lg shadow-md " />    
                                                        <div className="relative px-4 max-w-sm">
                                                            <div className="bg-blue-400  bg-opacity-75 rounded-lg shadow-lg">
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
                                {/* {mediaPick.map(media => {
                                    console.log(media + 'help')
                                    return (
                                        <>
                                            <div className="w-full p-6 flex flex-col flex-grow flex-shrink">
                                                <div className="flex-1 rounded overflow-hidden shadow-lg flex h-screen justify-center items-center">
                                                    <div className="">
                                                        <img src={media.poster_url} alt=" Movie Poster" className="w-80 object-cover rounded-lg shadow-md " />    
                                                        <div className="relative px-4 max-w-md">
                                                            <div className="bg-blue-400  bg-opacity-75 rounded-lg shadow-lg">
                                                                <div className="mt-1 text-2xl md:text-3xl text-center textFont px-6">
                                                                    {media.title}
                                                                </div>
                                                                <div className="mt-1 text-xl md:text-2xl textFont text-right">
                                                                    {media.release_date}
                                                                </div>
                                                                <div className="mt-1 text-xl md:text-2xl textFont text-right">
                                                                    {media.streaming_source}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                {sourcePick.map(source => {
                                    console.log(source + 'help me')
                                    return (
                                        <>
                                            <div className="w-full p-6 flex flex-col flex-grow flex-shrink">
                                                <div className="flex-1 rounded overflow-hidden shadow-lg flex h-screen justify-center items-center">
                                                    <div className="">
                                                        <img src={source.poster_url} alt=" Movie Poster" className="w-80 object-cover rounded-lg shadow-md " />    
                                                        <div className="relative px-4 max-w-md">
                                                            <div className="bg-blue-400  bg-opacity-75 rounded-lg shadow-lg">
                                                                <div className="mt-1 text-2xl md:text-3xl text-center textFont px-6">
                                                                    {source.title}
                                                                </div>
                                                                <div className="mt-1 text-xl md:text-2xl textFont text-right">
                                                                    {source.genre}
                                                                </div>
                                                                <div className="mt-1 text-xl md:text-2xl textFont text-right">
                                                                    {source.release_date}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })} */}
                            </div>
                        </div>
                        <div className="py-12 md:pt-8 px-6" >
                            <div className="border border-green-500 border-opacity-100 rounded overflow-hidden shadow-lg md:leading-normal tracking-normal p-4  max-w-6xl mx-auto">
                                <h1 className="textFont text-center md:text-4xl text-2xl">Some fares that fit with you choice:</h1>                    
                                {fares.map(fare => {
                                    return (
                                        <>
                                           <div className="w-full p-6 flex flex-col flex-grow flex-shrink">
                                                <div className="flex-1 rounded overflow-hidden shadow-lg flex h-screen justify-center items-center">
                                                    <div className="">
                                                        <img src={fare.imgurl} alt="fares" className="faresPoster object-cover rounded-lg shadow-md " />    
                                                        <div className="relative max-w-sm">
                                                            <div className="bg-red-400 bg-opacity-75 rounded-lg shadow-lg">
                                                                <div className="mt-1 text-lg md:text-2xl text-center textFont px-6 mb-5">
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
                                                <div className="flex-1 rounded overflow-hidden shadow-lg flex h-screen justify-center items-center">
                                                    <div className="">
                                                        <img src={drink.imgurl} alt="drinks" className="faresPoster object-cover rounded-lg shadow-md " />    
                                                        <div className="relative max-w-sm">
                                                            <div className="bg-red-400 rounded-lg shadow-lg">
                                                                <div className="mt-1 text-lg md:text-2xl text-center textFont px-6 mb-5">
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