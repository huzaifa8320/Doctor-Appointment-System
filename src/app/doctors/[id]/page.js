'use client'

import { doctors } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";
import 'aos/dist/aos.css';
import Aos from "aos";

export default function DoctorDetail({ params }) {

    useEffect(() => {
        Aos.init({
          duration: 500,
          easing: 'ease-in-out',
          once: false,
        });
      }, []);

    console.log("Param", params);
    const doctorInfo = doctors.find((doctor) => doctor.id == params.id)
    return (
        <div className="min-h-screen pt-16">

            {/* Hero Section */}
            <section className="relative px-3 sm:px-10 bg-gradient-to-r from-[#1E3A8A] to-[#3b82f6] text-white py-20">
                <div className="container overflow-x-hidden mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    {/* Left Section (Doctor Info) */}
                    <div data-aos="fade-right" className="w-full md:w-1/2 text-left">
                        <ReactTyped
                            className="text-3xl sm:text-4xl font-bold"
                            strings={[doctorInfo.name]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                        <p className="mt-2 text-xl">{doctorInfo.specialist}</p>
                        <div className="flex items-center mt-4">
                            <span>Rating:</span>
                            <span className="ml-2 text-yellow-400">★★★★★</span>
                            <span className="ml-4">20 Reviews</span>
                        </div>
                        <p className="mt-6 text-lg">
                            With over {doctorInfo.experience} years of experience in {doctorInfo.specialist}, {doctorInfo.name} offers {doctorInfo.offers}
                        </p>
                        {/* Button Section */}
                        <div className="mt-6 flex gap-3 flex-wrap">
                            <button className="h-12 px-3 bg-[#1E3A8A] hover:bg-[#3b82f6] text-white font-semibold rounded-lg shadow-md transition-all">
                                Book Appointment
                            </button>
                            <button className="h-12 px-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] font-semibold rounded-lg shadow-md transition-all">
                                View Profile
                            </button>
                        </div>
                    </div>
                    {/* Right Section (Doctor Image) */}
                    <div data-aos="fade-left" className="w-full md:w-1/3 mt-8 md:mt-0">
                        <Image
                            width={500}
                            height={500}
                            className="w-full rounded-lg shadow-xl object-cover"
                            src={doctorInfo.image}
                            alt="Doctor's Image"
                        />
                    </div>
                </div>
            </section>

            {/* Doctor Details Section */}
            <section className="bg-white container px-3 sm:px-10 mx-auto py-16">
                <div data-aos="zoom-in" className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Left Section (Details) */}
                    <div className="md:w-2/3 p-6">
                        <h2 className="text-2xl font-semibold text-[#1E3A8A]">
                            About {doctorInfo.name}
                        </h2>
                        <p className="mt-4 text-gray-700">
                            {doctorInfo.name} is an expert {doctorInfo.offers}
                        </p>
                        {/* Availability Section */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-[#1E3A8A]">
                                Availability
                            </h3>
                            <ul className="list-disc ml-5 mt-2 text-gray-600">
                                {doctorInfo.availability.map((slot, index) => (
                                    <li key={index}>{slot.day}: {slot.time}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Contact Section */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-[#1E3A8A]">
                                Contact Information
                            </h3>
                            <Link href={`tel:${doctorInfo.contact.phone}`} className="mt-2 block text-gray-600">Phone: {doctorInfo.contact.phone}</Link>
                            <Link href={`mailto:${doctorInfo.contact.email}`} className="mt-2 block text-gray-600">Email: {doctorInfo.contact.email}</Link>
                        </div>
                    </div>

                    {/* Right Section (Additional Details) */}
                    <div className="md:w-1/3 bg-[#F0F4FF] p-6">
                        <h3 className="text-xl font-semibold text-[#1E3A8A]">
                            Specializations
                        </h3>
                        <ul className="mt-4 list-disc ml-5 text-gray-600">
                            <li>{doctorInfo.specialist}</li>
                        </ul>
                        {/* Certifications Section */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-[#1E3A8A]">
                                Certifications
                            </h3>
                            <ul className="mt-4 list-disc ml-5 text-gray-600">
                                <li>{doctorInfo.certifiedFrom}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}