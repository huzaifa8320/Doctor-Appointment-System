'use client'

import React, { useState, useEffect } from 'react'
import { Table, Tag, Space, Button, Input, Select, Typography, Spin, message } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { getRequest } from '@/action/requests'

const { Title } = Typography
const { Option } = Select



export default function AdminDoctorRequests() {
  const [doctorRequests, setDoctorRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRequest()
        // Ensure data is an array
        const requestsArray = Array.isArray(data) ? data.requests : (data.requests || [])
        console.log("All request",requestsArray);
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

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
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
    },
    {
      title: 'Experience',
      dataIndex: 'experience',
      key: 'experience',
      sorter: (a, b) => Number(a.experience) - Number(b.experience),
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
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" className="bg-blue-500 hover:bg-blue-600">
            View
          </Button>
          {record.status === 'pending' && (
            <>
              <Button type="primary" className="bg-green-500 hover:bg-green-600">
                Approve
              </Button>
              <Button danger>
                Reject
              </Button>
            </>
          )}
        </Space>
      ),
    },
  ]

  const expandedRowRender = (record) => {
    return (
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Bio:</p>
            <p>{record.bio || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold">Certified From:</p>
            <p>{record.certifiedFrom || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold">Contact:</p>
            <p>Phone: {record.contact?.phone || 'N/A'}</p>
            <p>Email: {record.contact?.email || 'N/A'}</p>
          </div>
          <div>
            <p className="font-semibold">Fees:</p>
            <p>${record.fees || 'N/A'}</p>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Availability:</p>
            {Array.isArray(record.availability) && record.availability.length > 0 ? (
              <ul>
                {record.availability.map((slot, index) => (
                  <li key={index}>{slot.day}: {slot.time}</li>
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

  const filteredData = doctorRequests.filter(doctor => 
    doctor.name?.toLowerCase().includes(searchText.toLowerCase()) &&
    (statusFilter === '' || doctor.status === statusFilter)
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Title level={3} className="text-red-500">Error: {error}</Title>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title level={2} className="mb-6">Doctor Application Requests</Title>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <Input
            placeholder="Search by name"
            prefix={<SearchOutlined />}
            className="w-64"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Select
            placeholder="Filter by status"
            className="w-40"
            value={statusFilter}
            onChange={setStatusFilter}
            allowClear
          >
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
            expandRowByClick: true,
          }}
          className="shadow-sm"
          pagination={true}
        />
      </div>
    </div>
  )
}

