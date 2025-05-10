import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button, Card, Flex, Space } from "antd";
import axios from "axios";
import { usePolicy } from "../Context/PolicyContext";

const { Option } = Select;
const hostDetail = process.env.REACT_APP_API_POLICY_DETAIL;

const Policy = () => {
  const { selectedPolicy } = usePolicy();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  
  useEffect(() => {
    
    const fetchDetail = async()=>{
      setLoading(true);
      const headers = {
        "Content-Type": "application/json"
      }
      
      const policyno = selectedPolicy.policyno;
      await axios.get(`${hostDetail}/${policyno}`, {headers})
        .then((res) => {
          console.log('policy detail: ', res.data);
          setTimeout(() => {
            
            setLoading(false);
          }, Math.random()*3 * 1000);
        })
    }
    
    if(selectedPolicy != null)
      fetchDetail();
  },[selectedPolicy])

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Card
      title="Policy"
      size="small"
      loading={loading}
      style={{ height: "fit-content", width:200}}
    >
      {selectedPolicy === null ? (
        <div className="has-text-centered is-italic">No data selected</div>
      ) : (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          size="small"
        >
          <Form.Item
            label="Policy No."
            name="policyNo"
            rules={[{ required: true, message: "Please enter Policy Number" }]}
            style={{ marginBottom: 5 }}
          >
            <Input placeholder="Enter policy number" />
          </Form.Item>

          <Form.Item
            label="Product"
            name="product"
            rules={[{ required: true, message: "Please enter Product Number" }]}
            style={{ marginBottom: 5 }}
          >
            <Input placeholder="Enter Product" />
          </Form.Item>

          <Form.Item
            label="Policy Status"
            name="policyStatus"
            rules={[{ required: true, message: "Please select Policy Status" }]}
            style={{ marginBottom: 5 }}
          >
            <Select placeholder="Select status">
              <Option value="active">Active</Option>
              <Option value="expired">Expired</Option>
              <Option value="cancelled">Cancelled</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Customer Name"
            name="customerName"
            rules={[{ required: true, message: "Please enter Customer Name" }]}
            style={{ marginBottom: 5 }}
          >
            <Input placeholder="Enter customer name" />
          </Form.Item>

          <Form.Item label="Premium" name="premi" style={{ marginBottom: 5 }}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Input Date"
            name="inputDate"
            style={{ marginBottom: 5 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Application Date"
            name="applicationDate"
            style={{ marginBottom: 5 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Paid To Date"
            name="paidToDate"
            rules={[{ required: true, message: "Please enter Paid To Date" }]}
            style={{ marginBottom: 5 }}
          >
            <Input placeholder="Enter paid to date (e.g., 2025-12-31)" />
          </Form.Item>

          <Form.Item label="Cancel Date" name="cancelDate">
            <Input />
          </Form.Item>

          <Space className="pt-6">
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
            <Button type="default" block>
              Cancel
            </Button>
          </Space>
        </Form>
      )}
    </Card>
  );
};

export default Policy;
