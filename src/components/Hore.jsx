"use client"
import React from 'react';
import heroBG from "../../public/images/banner.jpg";
import Image from 'next/image';



function Hore() {
    return (
        <div id="home">

            <div
                className="hero min-h-screen"
            >
                <Image src={heroBG} alt="Hero Bg Image"
                className="h-screen w-screen"
                loading="lazy"/>

                <div className="hero-overlay bg-opacity-60"
                    style={{ background: "linear-gradient(rgba(0,0,0,0.6),#009688)" }}
                >

                </div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-9xl font-['tangerine'] font-bold">Heir Studio</h1>
                        <h3 className="text-3xl">Style your heir is style your life</h3>
                        <div>
                            <div className="lg:flex sm:inline-block justify-center mt-16">
                                {/* Button 1 with horizontal animation */}
                                <button className="group relative overflow-hidden border-2 border-white text-black uppercase px-5 py-3 min-w-[200px] mx-2 my-3">
                                    <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.5,1.6,0.4,0.7)] group-hover:scale-x-100"></span>
                                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-400">
                                        Find Out
                                    </span>
                                </button>

                                {/* Button 2 with vertical animation */}
                                <button className="group relative overflow-hidden border-2 border-white text-black uppercase px-5 py-3 min-w-[200px] mx-2 my-3">
                                    <span className="absolute inset-0 bg-white transform scale-y-0 origin-top transition-transform duration-500 ease-[cubic-bezier(0.5,1.6,0.4,0.7)] group-hover:scale-y-100"></span>
                                    <span className="relative z-10 text-white group-hover:text-black transition-colors duration-400">
                                        Read More
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hore
