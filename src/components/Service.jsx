"use client"
import React from 'react';
import Image from 'next/image';

import SerImg1 from '../../public/images/pic-1.jpg';
import SerImg2 from '../../public/images/pic-2.jpg';
import SerImg3 from '../../public/images/pic-3.jpg';
import SerImg4 from '../../public/images/pic-4.jpg';
import Leaf from './Leaf';

function Service() {


    const services = [
        {
            image: SerImg1,
            title: "Hair Styling",
            description:
                "This is test under description of barber foundation. This is test under description of barber foundation.",
        },
        {
            image: SerImg2,
            title: "Beard Trim",
            description:
                "This is test under description of barber foundation. This is test under description of barber foundation.",
        },
        {
            image: SerImg3,
            title: "Hair Out",
            description:
                "This is test under description of barber foundation. This is test under description of barber foundation.",
        },
        {
            image: SerImg4,
            title: "Dry Shampoo",
            description:
                "This is test under description of barber foundation. This is test under description of barber foundation.",
        },
    ];


    return (
        <div id="service">

            <section id="service" className="bg-gray-200 py-16">
                <div className="container mx-auto text-center">
                    {/* Service Content */}
                    <div className="relative inline-block mt-16">
                        <p className="text-lg text-teal-600 relative z-10">SERVICE</p>
                        <Leaf/>
                    </div>
                    <h1 className="text-7xl font-['tangerine'] font-bold mt-4">We Provide Better</h1>


                    {/* Service Box */}
                    <div className="mt-12 grid lg:grid-cols-2 sm:grid-cols-1 justify-between mx-auto max-w-5xl sm:w-full gap-3">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="relative flex-1 max-w-full sm:max-w-full rounded-md text-white overflow-hidden cursor-pointer group"
                            >
                                {/* Image */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full rounded-md"
                                    loading="lazy"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-teal-600 rounded-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>

                                {/* Service Description */}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-1000 w-4/5 text-center pb-8">
                                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                                    <hr className="bg-white h-[2px] my-3 w-3/5 mx-auto" />
                                    <p className="text-xl">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Service
