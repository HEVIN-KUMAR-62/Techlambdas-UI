
import React, { useState } from 'react';
import './Dashboard.css';
import { Table, Button, Drawer, Form, Input , } from 'antd';
const EmployeeTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [form] = Form.useForm();


  const columns = [
    {
      title: 'S.No',
      dataIndex: 'sno',
      key: 'sno',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Employee Name',
      dataIndex: 'employeeName',
      key: 'employeeName',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobileNumber',
      key: 'mobileNumber',
    },
    {
      title: 'Qualification',
      dataIndex: 'qualification',
      key: 'qualification',
    },
  ];

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  
  const handleSubmit = (values) => {
    setDataSource([...dataSource, { key: dataSource.length, ...values }]);
    form.resetFields();
    closeDrawer();
  };

  return (
    <>
      <div className='Container-table'>
      <div className='Box'>
     <h1> <span>Tech</span> Lambdas</h1>
      </div>
      <div className='Table-form'>
      <p>ALl Employee</p>
      <Button  onClick={showDrawer}>
        Add New
      </Button>

      <Table dataSource={dataSource} columns={columns} pagination={false} />
      
      <Drawer
        title="Add Employee"
        width={360}
        onClose={closeDrawer}
        visible={drawerVisible}

        footer={
          <div>
            <Button onClick={closeDrawer} style={{ marginRight: 30 }}>
              Close
            </Button>
            <Button type="primary" onClick={() => form.submit()}>
              Submit
            </Button>
          </div>
        }
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          initialValues={{
            employeeName: 'Hevin Kumar',
            mobileNumber: '9600348862',
            qualification: 'BCA',
          }}
        >
          <Form.Item
            label="Employee Name"
            name="employeeName"
            rules={[{ required: true, message: 'Please input the employee name!' }]}
          >
            <Input placeholder="Enter employee name" />
          </Form.Item>

          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
            rules={[
              { required: true, message: 'Please Enter the mobile number!' },
              { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit mobile number!' },
            ]}
          >
            <Input placeholder="Enter mobile number" />
          </Form.Item>

          <Form.Item
            label="Qualification"
            name="qualification"
            rules={[{ required: true, message: 'Please input the qualification!' }]}
          >
            <Input placeholder="Enter qualification" />
          </Form.Item>
        </Form>
      </Drawer>
      </div>
      </div>
    </>
  );
};
export default EmployeeTable;
