'use client';
import React, { useState } from 'react';
import { Modal, Button, Form, Input, DatePicker, TimePicker, Select } from 'antd';
import moment from 'moment';
import { number } from 'zod';

export default function BookAppointmentModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                console.log('Appointment Details:', values);
                form.resetFields();
                setIsModalOpen(false);
            })
            .catch(info => {
                console.log('Validation Failed:', info);
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={showModal}
                className="h-12 px-3 bg-[#1E3A8A] hover:bg-[#3b82f6] text-white font-semibold rounded-lg shadow-md transition-all"
            >
                Book Appointment
            </Button>
            <Modal
                title={<span style={{ color: '#1E3A8A' }}>Book an Appointment</span>}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Confirm"
                cancelText="Cancel"
                centered
                okButtonProps={{
                    style: { backgroundColor: '#1E3A8A', borderColor: '#1E3A8A' },
                }}
                cancelButtonProps={{
                    style: { color: '#3b82f6', borderColor: '#3b82f6' },
                }}
                bodyStyle={{ padding: '20px' }}
                style={{
                    maxWidth: '100%', // For small devices
                }}

                className="sm:w-auto px-3 w-full"  // Set responsive width
            >
                <Form form={form} layout="vertical" className=''>
                    <Form.Item
                        label={<span style={{ color: '#1E3A8A' }}>Full Name</span>}
                        name="fullName"
                        rules={[{ required: true, message: 'Please enter your full name' }]}
                    >

                        <Input placeholder="Enter your name" />
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ color: '#1E3A8A' }}>Contact Number</span>}
                        name="contactNumber"
                        rules={[
                            { required: true, message: 'Please enter your contact number' },
                            { pattern: /^\d+$/, message: 'Contact number must be numeric' },
                        ]}
                    >
                        <Input placeholder='Enter Contact Number' maxLength={15} />
                    </Form.Item>

                    <Form.Item
                        label={<span style={{ color: '#1E3A8A' }}>Date</span>}
                        name="appointmentDate"
                        rules={[{ required: true, message: 'Please select a date' }]}
                    >
                        <DatePicker
                            style={{ width: '100%' }}
                            disabledDate={(current) => current && current < moment().startOf('day')}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
