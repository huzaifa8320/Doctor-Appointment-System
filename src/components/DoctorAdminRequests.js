'use client'

import React, { useState, useEffect } from 'react'
import { Table, Tag, Space, Button, Input, Select, Typography, Spin, message } from 'antd'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import { getRequest, updateRequest } from '@/action/requests'
import { redirect } from 'next/navigation'

const { Title } = Typography
const { Option } = Select

export default function DoctorAdminRequests({ session }) {
  if (session?.user?.role != 'admin') {
    redirect('/')
  }
  const [doctorRequests, setDoctorRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRequest()
        const requestsArray = Array.isArray(data) ? data.requests : (data.requests || [])
        setDoctorRequests(requestsArray)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
        message.error('Failed to load doctor requests')
      }
    }
    fetchData()
  }, [])


  const expandedRowRender = (record) => {
    return (
      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-md shadow">
            <p className="font-semibold text-blue-600">Bio:</p>
            <p>{record.bio || 'N/A'}</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow">
            <p className="font-semibold text-blue-600">Certified From:</p>
            <p>{record.certifiedFrom || 'N/A'}</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow">
            <p className="font-semibold text-blue-600">Contact:</p>
            <p>Phone: {record.contact?.phone || 'N/A'}</p>
            <p>Email: {record.contact?.email || 'N/A'}</p>
          </div>
          <div className="bg-white p-3 rounded-md shadow">
            <p className="font-semibold text-blue-600">Fees:</p>
            <p>${record.fees || 'N/A'}</p>
          </div>
          <div className="col-span-1 md:col-span-2 bg-white p-3 rounded-md shadow">
            <p className="font-semibold text-blue-600">Availability:</p>
            {Array.isArray(record.availability) && record.availability.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {record.availability.map((slot, index) => (
                  <li key={index} className="bg-blue-50 p-2 rounded">{slot.day}: {slot.time}</li>
                ))}
              </ul>
            ) : (
              <p>No availability information</p>
            )}
          </div>
        </div>
      </div>
    )
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => (
        <span className="flex items-center">
          <UserOutlined className="mr-2 text-blue-500" />
          {text}
        </span>
      ),
    },
    {
      title: 'Specialist',
      dataIndex: 'specialist',
      key: 'specialist',
      filters: doctorRequests.length > 0 ?
        [...new Set(doctorRequests.map(doctor => doctor.specialist))]
          .filter(Boolean)
          .map(specialist => ({ text: specialist, value: specialist })) :
        [],
      onFilter: (value, record) => record.specialist?.indexOf(value) === 0,
    },
    {
      title: 'Hospital',
      dataIndex: 'hospital',
      key: 'hospital',
      responsive: ['md'],
    },
    {
      title: 'Experience',
      dataIndex: 'experience',
      key: 'experience',
      sorter: (a, b) => Number(a.experience) - Number(b.experience),
      responsive: ['lg'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'pending' ? 'gold' : status === 'rejected' ? 'red' : 'green'}>
          {(status || 'Unknown').toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle" className="flex flex-wrap">
          {record.status === 'pending' && (
            <>
              <Button
  onClick={async () => {
    try {
      await updateRequest(record._id, 'approved');
      setDoctorRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === record._id ? { ...request, status: 'approved' } : request
        )
      );
    } catch (error) {
      message.error('Failed to approve the request');
    }
  }}
  type="primary"
  className="bg-green-500 w-20 hover:bg-green-600 transition-colors duration-300"
>
  Approve
</Button>

<Button
  onClick={async () => {
    try {
      await updateRequest(record._id, 'rejected');
      setDoctorRequests((prevRequests) =>
        prevRequests.map((request) =>
          request._id === record._id ? { ...request, status: 'rejected' } : request
        )
      );
    } catch (error) {
      message.error('Failed to reject the request');
    }
  }}
  danger
  className="hover:bg-red-600 w-20 transition-colors duration-300"
>
  Reject
</Button>

            </>
          )}
        </Space>
      ),
    },
  ]



  const filteredData = doctorRequests.filter(doctor =>
    doctor.name?.toLowerCase().includes(searchText.toLowerCase()) &&
    (statusFilter === 'all' || doctor.status === statusFilter)
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-indigo-100">
        <Spin size="large" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-indigo-100">
        <Title level={3} className="text-red-500">Error: {error}</Title>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 p-4 sm:p-6 md:p-8">
      <p level={2} className="mb-6 text-2xl text-center font-semibold sm:text-3xl text-indigo-800">Doctor Application Requests</p>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <Input
            placeholder="Search by name"
            prefix={<SearchOutlined className="text-gray-400" />}
            className="w-full sm:w-64"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Select
            placeholder="Filter by status"
            className="w-full sm:w-40"
            value={statusFilter}
            onChange={setStatusFilter}
            defaultValue="all"
          >
            <Option value="all">All</Option>
            <Option value="pending">Pending</Option>
            <Option value="approved">Approved</Option>
            <Option value="rejected">Rejected</Option>
          </Select>
        </div>
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey={(record) => record._id || record.id || Math.random().toString()}
          expandable={{
            expandedRowRender,
            // expandRowByClick: true,
          }}
          className="shadow-sm"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ['10', '20', '50'],
          }}
          scroll={{ x: true }}
        />
      </div>
    </div>
  )
}

