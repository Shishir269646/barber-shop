"use client"
import React, { useState } from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import TesImg1 from "../../public/images/img-1.jpg";
import TesImg2 from "../../public/images/img-2.jpg";
import TesImg3 from "../../public/images/img-3.jpg";
import Leaf from "./Leaf";






const testimonialList = [
    {
        photo: TesImg1,
        name: "John Coates",
        position: "Content Writer",
        from: "UK",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur.",
    },
    {
        photo: TesImg2,
        name: "Ellica Perry",
        position: "Project Manager",
        from: "BD",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur.",
    },
    {
        photo: TesImg3,
        name: "Ellica Perry",
        position: "Project Manager",
        from: "BD",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur.",
    },
];


function Testimonial() {


    const [index, setIndex] = useState(0);
    const { photo, name, position, content, from } = testimonialList[index];

    const handleControl = (type) => {
        if (type === "prev") {
            setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
        } else if (type === "next") {
            setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
        }
    };


    return (
        <div id="testimonial">

            <section className="px-4 py-12 bg-gray-50 text-center">

                <div className="items-center justify-items-center">
                <div className="relative inline-block mt-16">
                    <p className="text-lg text-teal-600 relative z-10">TESTIMONIAL</p>
                    <Leaf />
                </div>
                <h1 className="text-7xl font-['tangerine'] font-bold mt-4">What Client Says??</h1>
                </div>



                <div className="ezy__testimonial19 light py-14 md:py-24 dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
                    <div>
                        <div className="grid grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-6">
                            <div className="col-span-12 md:col-span-6 md:col-start-2 relative">
                                <div className="flex justify-center items-center h-full">
                                    <div>
                                        <div className="bg-white shadow-xl dark:bg-slate-800 rounded-xl z-10 relative py-14 px-9 md:py-20 md:px-12 md:-mr-24">
                                            <p className="mb-6 text-2xl text-teal-600">
                                                <FontAwesomeIcon icon={faQuoteLeft}/>
                                                {content}
                                                <FontAwesomeIcon icon={faQuoteRight}/>
                                                </p>
                                            <h5 className="text-base font-medium">
                                                -{name}, {position}, {from}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4 text-center md:text-start">
                                <div className="flex items-center justify-center h-full">
                                    <Image
                                        src={photo}
                                        alt={name}
                                        className="lg:w-full rounded-xl -z-[1] mx-auto"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            className="absolute top-1/2 -translate-y-1/2 left-3 md:-left-3 bg-teal-600 text-white bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
                            onClick={() => handleControl("prev")}
                        >
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button
                            className="absolute top-1/2 -translate-y-1/2 right-3 md:-right-3 bg-teal-600 text-white bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
                            onClick={() => handleControl("next")}
                        >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Testimonial
