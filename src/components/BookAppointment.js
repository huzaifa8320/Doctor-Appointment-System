'use client';
import React, { useState } from 'react';
import { Modal, Button, Form, Input, DatePicker, TimePicker, Select } from 'antd';
import moment from 'moment';

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
        <div className=''>
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
                // getContainer={false}  // Render modal directly to the body to avoid extra space
                okButtonProps={{
                    style: { backgroundColor: '#1E3A8A', borderColor: '#1E3A8A' },
                }}
                cancelButtonProps={{
                    style: { color: '#3b82f6', borderColor: '#3b82f6' },
                }}
                bodyStyle={{ padding: '20px' }}  // Remove body margin
                style={{ top: 0, margin: '10x' }}
            >
                <Form form={form} layout="vertical">
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
                        rules={[{ required: true, message: 'Please enter your contact number' }]}
                    >
                        <Input placeholder="Enter your contact number" />
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
                    <Form.Item
                        label={<span style={{ color: '#1E3A8A' }}>Time</span>}
                        name="appointmentTime"
                        rules={[{ required: true, message: 'Please select a time' }]}
                    >
                        <TimePicker style={{ width: '100%' }} format="HH:mm" />
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ color: '#1E3A8A' }}>Doctor</span>}
                        name="doctor"
                        rules={[{ required: true, message: 'Please select a doctor' }]}
                    >
                        <Select placeholder="Select a doctor">
                            <Select.Option value="Dr. Smith">Dr. Smith</Select.Option>
                            <Select.Option value="Dr. John">Dr. John</Select.Option>
                            <Select.Option value="Dr. Doe">Dr. Doe</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
