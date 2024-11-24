'use client'

import { useState } from 'react';
import { Tabs, Input, Button, Form } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

export default function LoginSignup() {
  const [activeTab, setActiveTab] = useState('login');
  const handleTabChange = (key) => setActiveTab(key);

  return (
    <div className="flex h-screen overflow-auto p-5 justify-center bg-gradient-to-r from-[#1E3A8A] to-[#3b82f6]">
      <div className="w-full relative max-w-4xl bg-white m-auto shadow-lg rounded-lg overflow-hidden md:flex">
      <button><ArrowLeftOutlined className='absolute left-3 top-3 text-[#1F3C8D] md:text-white text-xl'  onClick={() => window.history.back()}/></button>
        {/* Left Section */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#1E3A8A] to-[#3b82f6] text-white p-8 flex-col justify-center">
          <p className="text-white text-4xl font-bold">
           {activeTab == 'login' ?  'Welcome Back!' : 'Create Account!'}
          </p>
          <p className="mt-4 text-gray-200 leading-relaxed">
           {activeTab == 'login' ? 'Login to book appointments with our expert doctors.' : "Haven't signed up yet? Create an account and get started today!"}
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-center">
              <span className="inline-block w-4 h-4 bg-white rounded-full mr-3"></span>
              Book appointments instantly
            </li>
            <li className="flex items-center">
              <span className="inline-block w-4 h-4 bg-white rounded-full mr-3"></span>
              Access detailed medical history
            </li>
            <li className="flex items-center">
              <span className="inline-block w-4 h-4 bg-white rounded-full mr-3"></span>
              Get reminders for follow-ups
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-6">
            <p className="text-[#1E3A8A] text-2xl md:text-3xl font-bold">
            You&apos;r Healthify
            </p>
            <p className="text-center text-gray-500 mt-2">
              {activeTab == 'login' ? 'Login or to continue' : 'Signup to continue'}
            </p>
          </div>

          {/* Tabs */}
          <Tabs activeKey={activeTab} onChange={handleTabChange} centered>
            <TabPane tab="Login" key="login">
              <Form layout="vertical" className="space-y-4">
                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[{ required: true, message: 'Please enter your email!' }]}
                >
                  <Input placeholder="example@domain.com" className='py-2'/>
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                  <Input.Password placeholder="Enter your password" className='py-2'/>
                </Form.Item>
                <Button
                  type="primary"
                  className="w-full py-5 font-semibold bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                  htmlType="submit"
                >
                  Login
                </Button>
                <p className="block text-center mt-4 text-[#2563eb] hover:underline cursor-pointer">
                  Forgot password?
                </p>
              </Form>
            </TabPane>
            <TabPane tab="Signup" key="signup">
              <Form layout="vertical" className="space-y-4">
                <Form.Item
                  name="name"
                  label="Full Name"
                  rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                  <Input placeholder="Enter your full name" className='py-2'/>
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[{ required: true, message: 'Please enter your email!' }]}
                >
                  <Input placeholder="example@domain.com" className='py-2'/>
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[{ required: true, message: 'Please enter your password!' }]}
                >
                  <Input.Password placeholder="Enter your password" className='py-2'/>
                </Form.Item>
                <Button
                  type="primary"
                  className="w-full py-5 font-semibold bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
                  htmlType="submit"
                >
                  Signup
                </Button>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
