import React from 'react'
import { useSpring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";

import FrankBack from "./Images/frankbackground.png"
import Frank from "./Images/frank.jfif"
import EddieBack from "./Images/eddiebackground.jfif"
import Eddie from "./Images/eddie.jfif"
import AmandaBack from "./Images/amandabackground.jpg"
import Amanda from "./Images/amanda.jfif"
import ChrisBack from "./Images/chrisbackground2.jpg"
import Chris from "./Images/chris.jfif"
import Retro from './Images/retro.png'

export default function Credits() {

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
                    <div className="pt-6 md:py-8 px-6 max-w-6xl mx-auto">
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
                    <div className="flex justify-start max-w-6xl mx-auto">
                    <div className="pt-6 md:py-8 px-6 max-w-6xl mx-auto">
                        <div className="border border-green-500 border-opacity-100 rounded-xl overflow-hidden shadow-xl max-w-6xl mx-auto p-2">
                            <p className="textFont2 text-xs md:text-2xl text-center">
                                DigitalCraft's January 2021 Part-Time FullStack Web Development 
                            </p>
                            <a
                                href="https://github.com/CCaressimo/cap_stone" target="_blank"> 
                                    <p className="dataButton underline text-xs md:text-2xl text-center">
                                        Retro Flix-N-Fares Team
                                    </p>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="md:flex justify-start max-w-6xl mx-auto">
                        <div className="pb-12 md:pt-8 px-6 mx-auto">
                            <div class="border border-green-500 border-opacity-100 rounded-xl overflow-hidden shadow-xl max-w-xs my-6 mx-auto">
                                <img src={FrankBack} class="w-full h-48 rounded-xl" />
                                <div class="flex justify-center -mt-8">
                                    <img src={Frank} class="rounded-full border-green-500 border-opacity-100 border-2 -mt-3"/>		
                                </div>
                                <div class="text-center px-3 pb-6 pt-2">
                                    <a
                                        href="https://knarf.netlify.app/" target="_blank">
                                        <h3 class="dataButton underline text-lg">Frank</h3>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/8Frank8/" target="_blank">
                                        <h3 class="dataButton underline text-lg">Gomez</h3>
                                    </a>
                                    <p class="textFont2 text-sm mt-4">Front-End, DataBase </p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-12 md:pt-8 px-6 mx-auto">
                            <div class="border border-green-500 border-opacity-100 rounded-xl overflow-hidden shadow-xl max-w-xs my-6 mx-auto">
                                <img src={EddieBack} class="w-full h-48 rounded-xl" />
                                <div class="flex justify-center -mt-8">
                                    <img src={Eddie} class="rounded-full border-green-500 border-opacity-100 border-2 -mt-3"/>		
                                </div>
                                <div class="text-center px-3 pb-6 pt-2">
                                    <a
                                        href="https://eddies-portfolio.netlify.app/" target="_blank">
                                        <h3 class="dataButton underline text-lg">Eddie</h3>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/eddie-juarez-029164100/" target="_blank">
                                        <h3 class="dataButton underline text-lg">Juarez</h3>
                                    </a>
                                    <p class="textFont2 text-sm mt-4">Back-End, DataBase</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-start max-w-6xl mx-auto">
                        <div className="pb-12 md:pt-8 px-6 mx-auto ">
                            <div class="border border-green-500 border-opacity-100 rounded-xl overflow-hidden shadow-xl max-w-xs my-6 mx-auto">
                                <img src={AmandaBack} class="w-full h-48 rounded-xl" />
                                <div class="flex justify-center -mt-8">
                                    <img src={Amanda} class="rounded-full border-green-500 border-opacity-100 border-2 -mt-3"/>		
                                </div>
                                <div class="text-center px-3 pb-6 pt-2">
                                    <a
                                        href="https://www.amanda-merlin.com" target="_blank">
                                        <h3 class="dataButton underline text-lg">Amanda</h3>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/amanda-merlin-05106a9b/" target="_blank">
                                        <h3 class="dataButton underline text-lg">Merlin</h3>
                                    </a>
                                    <p class="textFont2 text-sm mt-4">Team Lead, Technical Writer, Back-End Routing</p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-12 md:pt-8 px-6 mx-auto">
                            <div class="border border-green-500 border-opacity-100 rounded-xl overflow-hidden shadow-xl max-w-xs my-6 mx-auto">
                                <img src={ChrisBack} class="w-full h-48 rounded-xl" />
                                <div class="flex justify-center -mt-8">
                                    <img src={Chris} class="rounded-full border-green-500 border-opacity-100 border-2 -mt-3"/>		
                                </div>
                                <div class="text-center px-3 pb-6 pt-2">
                                    <a
                                        href="https://christophercaressimo.netlify.app" target="_blank">
                                        <h3 class="dataButton underline text-lg">Christopher</h3>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/christopheracaressimo/" target="_blank">
                                        <h3 class="dataButton underline text-lg">Caressimo</h3>
                                    </a>
                                    <p class="textFont2 text-sm mt-4">Scrum Master, Front-End Routing, UI/UX</p>
                                    <a
                                        href="https://christophercaressimo.netlify.app" target="_blank">
                                        <p></p>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/christopheracaressimo/" target="_blank">
                                        <p></p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </animated.div>
        </main>
    )
}
