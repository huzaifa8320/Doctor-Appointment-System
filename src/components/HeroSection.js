'use client'

import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function HeroSection() {
    return (
        <section className="text-[#1E3A8A] container body-font mx-auto mt-28 md:mt-10 px-5 lg:px-16 overflow-hidden">
            <div className="container flex md:flex-row flex-col items-center">
                <div className="lg:flex-grow font-medium md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
                    {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Your health journey starts here </h1> */}
                    <ReactTyped
                        className="title-font text-blue-900 sm:text-4xl text-3xl mb-4"
                        strings={[
                            "Your health journey starts here.",
                            "Healthcare at Your Fingertips.",
                            "Skip the Wait, Book with Ease."
                        ]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    />
                    <p className="mb-8 leading-relaxed font-medium">Revolutionize your healthcare experience with our intuitive platform, making appointment booking as effortless as enjoying a cold-pressed juice. Connect with compassionate professionals for routine check-ups or specialized care, all just a click away. Take the first step towards a healthier, happier you today!</p>
                    <div className="flex flex-wrap sm:flex-nowrap gap-3">
                        <button className="min-w-40 text-[#1E3A8A] p-2  shadow shadow-[#1E3A8A] font-thi border-[#1E3A8A]  focus:outline-none rounded text-lg">Meet Your Doctor</button>
                        <button className="min-w-40 text-white p-2 shadow-md focus:outline-none rounded text-lg bg-[#1E3A8A]">Apply as Doctor</button>
                    </div>
                </div>
                <div className="lg:max-w-lg slide-in-right lg:w-full md:w-1/2 w-5/6 flex justify-center">
                    <Image
                        className="object-cover object-center rounded"
                        alt="hero"
                        height={400}
                        width={400}
                        src="/doctor_main.png"
                    />
                </div>
            </div>
        </section >
    );
}
