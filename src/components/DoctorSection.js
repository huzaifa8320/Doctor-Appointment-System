'use client'

import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Avatar, Card } from 'antd';
import Meta from "antd/es/card/Meta";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'; // Import AOS styles
import { doctors } from '@/lib/Data';
import Image from "next/image";

export default function DoctorSection() {

    useEffect(() => {
        Aos.init({
            duration: 700, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing option
            once: false, // Animation only happens once on scroll
        });
    }, []);

    return (
        <div className="px-3 bg-gray-100">
            <p className="text-center text-3xl text-[#1E3A8A] sm:text-4xl p-5 pt-10 font-semibold">
                Doctors Available
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:px-5 md:px-14">
                {doctors.map((doctor, index) => (
                    <Card data-aos="zoom-in"
                        hoverable
                        className="p-5"
                        cover={
                            <div className="rounded">
                                <Image
                                    width={500}
                                    height={500}
                                    alt="example"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="h-[180px] w-[180px]  shadow border m-auto  rounded-full" // Make image responsive
                                />
                            </div>
                        }
                    >
                        <div className="flex gap-3 flex-col">
                            <Meta
                                className="text-center"
                                title={<span style={{ color: '#1E3A8A' }}>{doctor.name}</span>}
                                description={<span style={{ color: 'gray' }}>{doctor.specialist}</span>}
                            />
                            <button className="bg-[#1E3A8A] hover:bg-[#2B4FB2] hover:scale-105 duration-150 mx-auto text-white w-36 h-11 rounded-md">Huzaifa</button>
                        </div>
                    </Card>

                ))}
            </div>
        </div>
    )
}