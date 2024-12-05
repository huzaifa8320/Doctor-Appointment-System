"use client";

import React, { useState } from "react";
import { Form, Input, Button, Select, message, TimePicker } from "antd";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import dayjs from 'dayjs';
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { addRequest } from "@/action/requests";

const { Option } = Select;

// Define the Zod schema
const formSchema = z.object({
    name: z.string().min(2, "Name must have at least 2 characters").max(25, "Name cannot exceed 25 characters"),
    bio: z.string().min(5, "Bio must have at least 5 characters").max(120, "Bio cannot exceed 120 characters"),
    hospital: z.string().min(2, "Hospital name must have at least 2 characters"),
    fees: z.number().min(1, "Fees must be a greater than Zero"),
    specialist: z.string().min(2, "Specialist field must have at least 2 characters"),
    gender: z.enum(["Male", "Female", "Other"], { errorMap: () => ({ message: "Please Select Gender" }) }),
    experience: z.number().min(1, "Experience must be greater than Zero"),
    contact: z.object({
        phone: z.string().regex(/^\+?[0-9\s-]+$/, "Invalid phone number"),
        email: z.string().email("Invalid email address"),
    }),
    certifiedFrom: z.string().min(2, "Certification must have at least 2 characters"),
    availability: z
        .array(
            z.object({
                day: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], { errorMap: () => ({ message: "Please Select Day" }) }),
                time: z.string().nonempty("Time is required"),
            })
        )
        .nonempty("At least one availability slot is required"),
});

export default function ApplyDoctorForm({ session }) {
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: `${session?.user?.name}`,
            bio: "",
            hospital: "",
            fees: 0,
            specialist: "",
            gender: undefined,
            experience: 0,
            contact: { phone: "", email: `${session?.user?.email}` },
            certifiedFrom: "",
            availability: [{ day: undefined, time: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "availability",
    });

    const onSubmit = async (values) => {
        setLoading(true);
        if (!session?.user?._id) {
            message.error("User session not found");
            setLoading(false);
            return;
        }

        // Include the user ID from the session in the submitted data
        values.user = session.user._id;

        try {
            const response = await addRequest(values);
            message.success(response.msg || "Form submitted successfully!");
            // reset();
        } catch (error) {
            message.error(error.message || "Failed to submit request. Please try again.");
            // reset();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#1E3A8A] to-[#3b82f6] text-white">
            <div className="bg-white relative m-6 text-black p-6 rounded-lg shadow-lg max-w-lg w-full">
                <Link href={'/'} className='absolute left-3 top-3 text-[#387CED]'>
                    <ArrowLeftOutlined className='h-4 w-4 mr-2' />
                </Link>
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Apply as a Doctor</h2>
                <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <Form.Item

                        className="my-8"
                        label="Full Name"
                        validateStatus={errors.name ? "error" : ""}
                        help={errors.name?.message}
                    >
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => <Input readOnly placeholder="Enter Your Name" {...field} />}
                        />
                    </Form.Item>

                    {/* Bio */}
                    <Form.Item
                        className="my-8"
                        label="Short Bio"
                        validateStatus={errors.bio ? "error" : ""}
                        help={errors.bio?.message}
                    >
                        <Controller
                            name="bio"
                            control={control}
                            render={({ field }) => <Input.TextArea placeholder="Bio" rows={3} {...field} />}
                        />
                    </Form.Item>

                    {/* Hospital */}
                    <Form.Item
                        className="my-8"
                        label="Hospital"
                        validateStatus={errors.hospital ? "error" : ""}
                        help={errors.hospital?.message}
                    >
                        <Controller
                            name="hospital"
                            control={control}
                            render={({ field }) => <Input placeholder="Hospital Name" {...field} />}
                        />
                    </Form.Item>

                    {/* Specialist */}
                    <Form.Item
                        className="my-8"
                        label="Specialist Field"
                        validateStatus={errors.specialist ? "error" : ""}
                        help={errors.specialist?.message}
                    >
                        <Controller
                            name="specialist"
                            control={control}
                            render={({ field }) => <Input placeholder="Enter Specialization" {...field} />}
                        />
                    </Form.Item>

                    {/* Gender */}
                    <Form.Item
                        className="my-8"
                        label="Gender"
                        validateStatus={errors.gender ? "error" : ""}
                        help={errors.gender?.message}
                    >
                        <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => (
                                <Select {...field} allowClear placeholder='Select Gender'>
                                    <Option value="Male">Male</Option>
                                    <Option value="Female">Female</Option>
                                    <Option value="Other">Other</Option>
                                </Select>
                            )}
                        />
                    </Form.Item>


                    {/* Experience  */}
                    <Form.Item
                        className="my-8"
                        label="Years of Experience"
                        validateStatus={errors.experience ? "error" : ""}
                        help={errors.experience?.message}
                    >
                        <Controller
                            name="experience"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder="Enter Your Experience"
                                    {...field}
                                    type="number"
                                    value={field.value || ""}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />
                            )}
                        />
                    </Form.Item>


                    {/* Fees */}
                    <Form.Item
                        className="my-8"
                        label="Consultation Fees"
                        validateStatus={errors.fees ? "error" : ""}
                        help={errors.fees?.message}
                    >
                        <Controller
                            name="fees"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder="$Fees"
                                    {...field}
                                    type="number"
                                    value={field.value || ""}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                />)}
                        />
                    </Form.Item>

                    {/* Contact Details */}
                    <Form.Item label="Contact Details" className="my-">
                        <Form.Item
                            validateStatus={errors.contact?.phone ? "error" : ""}
                            help={errors.contact?.phone?.message}
                        >
                            <Controller
                                name="contact.phone"
                                control={control}
                                render={({ field }) => <Input placeholder="Enter phone number" {...field} />}
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={errors.contact?.email ? "error" : ""}
                            help={errors.contact?.email?.message}
                        >
                            <Controller
                                name="contact.email"
                                control={control}
                                render={({ field }) => <Input readOnly type="email" placeholder="Enter email address" {...field} />}
                            />
                        </Form.Item>
                    </Form.Item>

                    {/* Certification */}
                    <Form.Item
                        className="my-8"
                        label="Certified From"
                        validateStatus={errors.certifiedFrom ? "error" : ""}
                        help={errors.certifiedFrom?.message}
                    >
                        <Controller
                            name="certifiedFrom"
                            control={control}
                            render={({ field }) => <Input placeholder="Certifacation" {...field} />}
                        />
                    </Form.Item>

                    {/* Availability */}
                    <h3 className="text-lg font-semibold mt-10">Availability</h3>
                    {fields.map((field, index) => (
                        <div key={field.id} className="sm:flex gap-4 mt-3 mb-8">
                            <div className="flex w-full gap-4">
                                {/* Day Selector */}
                                <Form.Item
                                    validateStatus={errors.availability?.[index]?.day ? "error" : ""}
                                    help={errors.availability?.[index]?.day?.message}
                                    className="w-1/2"
                                >
                                    <Controller
                                        name={`availability.${index}.day`}
                                        control={control}
                                        render={({ field }) => (
                                            <Select placeholder="Select day" {...field}>
                                                <Option value="Monday">Monday</Option>
                                                <Option value="Tuesday">Tuesday</Option>
                                                <Option value="Wednesday">Wednesday</Option>
                                                <Option value="Thursday">Thursday</Option>
                                                <Option value="Friday">Friday</Option>
                                                <Option value="Saturday">Saturday</Option>
                                                <Option value="Sunday">Sunday</Option>
                                            </Select>
                                        )}
                                    />
                                </Form.Item>

                                {/* Time Selector */}
                                <Form.Item
                                    validateStatus={errors.availability?.[index]?.time ? "error" : ""}
                                    help={errors.availability?.[index]?.time?.message}
                                    className="w-1/2"
                                >
                                    <Controller
                                        name={`availability.${index}.time`}
                                        control={control}
                                        render={({ field }) => (
                                            <TimePicker
                                                format="HH:mm"
                                                use12Hours
                                                placeholder="Select time"
                                                onChange={(time) => field.onChange(time ? dayjs(time).format("HH:mm") : "")}
                                            />
                                        )}
                                    />
                                </Form.Item>
                            </div>

                            {/* Remove Button */}
                            {fields.length > 1 && (
                                <Button danger onClick={() => remove(index)}>
                                    Remove
                                </Button>
                            )}
                        </div>
                    ))}

                    {/* Add Availability Button */}
                    <Button
                        type="dashed"
                        block
                        className="mb-8"
                        onClick={() => append({ day: undefined, time: "" })}
                    >
                        Add More Availability
                    </Button>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block loading={loading}>
                            Submit Application
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

