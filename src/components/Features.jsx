"use client"
import React from 'react';
import Image from 'next/image';

import featureImg from '../../public/images/barber-man.jpg';
import Leaf from './Leaf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faDollar, faInr, faShield } from '@fortawesome/free-solid-svg-icons';


function Features() {


    const features = [
        {
            icon: faShield,
            title: "Experienced Staff",
            description: "Etiam varius justo viverra urna condimentum, ac gravida lectus molestie.",
        },
        {
            icon: faCheckSquare,
            title: "Per Booking Online",
            description: "Etiam varius justo viverra urna condimentum, ac gravida lectus molestie.",
        },
        {
            icon: faDollar,
            title: "Affordable Cost",
            description: "Etiam varius justo viverra urna condimentum, ac gravida lectus molestie.",
        },
    ];


    return (
        <div id="features" className="container bg-gray-50 mx-auto text-center flex flex-col items-center pb-12">


            <div className="relative inline-block mt-16">
                <p className="text-lg text-teal-600 relative z-10">FEATURES</p>
                <Leaf />
            </div>
            <h1 className="text-7xl font-['tangerine'] font-bold mt-4">Why Choose Us?</h1>

            <div className="hero min-h-screen bg-gray-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image
                        src={featureImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt="Feature Image"
                        loading="lazy"
                    />

                    <div className="max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 mt-8"
                            >
                                {/* Icon */}
                                <span className="flex items-center justify-center w-12 h-12 text-2xl text-teal-600 border border-teal-600 rounded-md">
                                    <FontAwesomeIcon icon={feature.icon} />
                                </span>

                                {/* Content */}
                                <div className="text-gray-700">
                                    <h3 className="text-teal-600 text-2xl font-semibold">{feature.title}</h3>
                                    <p className="mt-1">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Features
