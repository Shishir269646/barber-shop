"use client"
import React from 'react';
import Image from 'next/image';

import LogoImg from "../../public/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {


    const smIcones = [faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn];
    const currentYear = new Date().getFullYear();


    return (
        <section id="footer" className="bg-teal-600 py-12">
            <footer>
                <div className="container mx-auto px-6 flex flex-wrap-reverse justify-between items-center">
                    {/* Left Column */}
                    <div className="left-col w-full lg:w-auto text-center lg:text-left mb-8 lg:mb-0">
                        <Image src={LogoImg} alt="Logo Image" className="w-36 mx-auto lg:mx-0" loading="lazy" />
                        <div className="social-media flex justify-center lg:justify-start mt-4">
                            {smIcones.map((smIcone, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-gray-800 h-8 w-8 text-xl mr-6 hover:text-red-400 transition-colors"
                                >

                                    <FontAwesomeIcon icon={smIcone} className="h-full w-full" />
                                </a>
                            ))}

                        </div>
                        <p className="mt-4 text-gray-700 text-sm">
                            © {currentYear} Created By Manjirul Islam Shishir. All Rights Reserved.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="right-col w-full lg:w-auto sm:items-center sm:text-center lg:text-left">
                        <h1 className="text-white text-2xl font-semibold">Our Newsletter</h1>
                        <div className="border mx-auto lg:mx-0 w-24 h-1 bg-red-400 my-2"></div>
                        <p className="text-gray-100 mb-4">Enter Your Email to get our news and updates.</p>
                        <form className="newsletter-form space-x-3 flex flex-wrap justify-center lg:justify-end">

                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn bg-red-400 hover:opacity-75 px-10 py-3 rounded-md mb-4 transition-opacity">Subscribe</button>
                        </form>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
