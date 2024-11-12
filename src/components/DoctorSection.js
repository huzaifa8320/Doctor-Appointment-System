'use client'

import { Avatar, Card } from 'antd';
import Meta from "antd/es/card/Meta";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Image from "next/image";
import { doctors } from "@/lib/Data";
import Link from "next/link";

export default function DoctorSection({ isHome }) {

    const filter_doctor = isHome ? doctors.slice(0, 3) : doctors;

    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);

    return (
        <div className="px-3 bg-gray-100">
            <div className="flex py-10 justify-between items-center sm:px-14">

                <p className="text-center text-xl text-[#1E3A8A] sm:text-4xl font-semibold">
                    Doctors Available
                </p>
                {isHome &&
                    <Link href={'/doctors'}><button className="bg-[#1E3A8A] h-10 w-20 rounded-md text-white">See All</button></Link>
                }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:px-5 md:px-14">
                {filter_doctor.map((doctor, index) => (
                    <Card data-aos="zoom-in"
                        hoverable
                        key={index}
                        className="p-4"
                        cover={
                            isHome &&
                            <div className="rounded">
                                <Image
                                    width={500}
                                    height={500}
                                    alt="example"
                                    src={doctor.image}
                                    className="h-[180px] w-[180px]  shadow object-cover border m-auto  rounded-full"
                                />
                            </div>
                        }
                    >
                        <div className="mb-5">
                            <Meta
                                className={`${isHome && 'text-center'}`}
                                avatar={
                                    !isHome &&
                                    <Avatar src={doctor.image} />}
                                title={<span className="text-[#1E3A8A]">{doctor.name}</span>}
                                description={<span style={{ color: 'gray' }}>{doctor.specialist}</span>}
                            />
                        </div>
                        {!isHome &&
                            <div className="text-gray-600 space-y-3 mt-2 text-sm">
                                <p><strong>Appointment Time:</strong> {doctor.appointmentTime}</p>
                                <p><strong>Fees:</strong> ${doctor.fees}</p>
                                <p><strong>Hospital:</strong> {doctor.hospital}</p>
                                <p><strong>Gender:</strong> {doctor.gender}</p>
                            </div>
                        }
                            <Link className='flex' href={`/doctors/${doctor.id}`}>

                                <button className={`bg-[#1E3A8A] font-semibold hover:bg-[#2B4FB2] ${!isHome && 'mt-5'} hover:scale-105 duration-150 ${isHome && 'mx-auto'} text-white w-36 h-11 rounded-md`}>Book Appointment</button>
                            </Link>
                    </Card>

                ))}
            </div>
        </div>
    )
}