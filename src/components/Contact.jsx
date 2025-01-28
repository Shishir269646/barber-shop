"use client"
import React, { useState } from "react";
import Image from "next/image";

import conImg from "../../public/images/contact_1.png";
import Leaf from "./Leaf";



const ContactForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <form
            className="md:pr-12"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
        >
            <div className="mb-4">
                <input
                    type="text"
                    className="min-h-[48px] leading-[48px] bg-slate-100 dark:bg-[#1B2635] border border-transparent rounded-xl focus:outline-none focus:border focus:border-black w-full px-5"
                    placeholder="Enter Name"
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    className="min-h-[48px] leading-[48px] bg-slate-100 dark:bg-[#1B2635] border border-transparent rounded-xl focus:outline-none focus:border focus:border-black w-full px-5"
                    placeholder="Enter Email"
                />
            </div>
            <div className="mb-4">
                <textarea
                    name="message"
                    className="min-h-11 leading-10 bg-slate-100 dark:bg-[#1B2635] border border-transparent rounded-xl focus:outline-none focus:border focus:border-black w-full px-5"
                    placeholder="Enter Message"
                    rows="4"
                ></textarea>
            </div>
            <div className="text-end">
                <button
                    type="submit"
                    className="btn bg-red-400 hover:opacity-75 px-10 py-3 rounded-md mb-4 transition-opacity"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="ezy__contact1 light py-10 md:py-14 bg-white dark:bg-teal-600 text-white overflow-hidden text-center">
            <div className="items-center justify-items-center">
                <div className="relative inline-block mt-16">
                    <p className="text-lg text-teal-600 uppercase relative z-10">Contact Us</p>
                    <Leaf/>
                </div>
                <h1 className="text-7xl font-bold font-['tangerine'] mt-4 text-black">We list your menu online.</h1>
            </div>
            <div className="container px-4 relative">
                <div className="grid grid-cols-12 py-12">
                    <div className="col-span-12 lg:col-span-6 mb-4 lg:mb-0">
                        <div className="h-full flex items-center">
                            <Image
                                src={conImg}
                                alt=""
                                className="max-w-full h-auto relative z-[2] rounded-tr-[100px] rounded-br rounded-bl-[100px] mx-auto"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 xl:col-span-5 px-6 relative">
                        <div className="absolute top-0 left-0 lg:-left-[20%] right-0 bottom-0 bg-teal-600 dark:bg-[#162231] rounded-tl rounded-tr-[30px] rounded-br-[150px] rounded-bl-[50px]"></div>

                        <div className="relative rounded my-12 py-6">

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;