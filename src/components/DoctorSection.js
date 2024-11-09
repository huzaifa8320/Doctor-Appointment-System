'use client'

import { doctors } from "@/lib/Data";
import { SettingOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Avatar, Card } from 'antd';
import Meta from "antd/es/card/Meta";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'; // Import AOS styles

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:px-5 md:px-10">
                {doctors.map((doctor, index) => (
                    <Card data-aos="zoom-in"
                        cover={
                            <div className="rounded p-2">
                                <img
                                    alt="example"
                                    src="/doctor_main.png"
                                    className="h-[180px] w-[180px] sm:h-[200px] shadow-lg border m-auto sm:w-[200px] rounded-full" // Make image responsive
                                />
                            </div>
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="/doctor_main.png" />}
                            title={doctor.name}
                            description={doctor.specialist}
                        />
                    </Card>

                ))}
            </div>
        </div>
    )
}