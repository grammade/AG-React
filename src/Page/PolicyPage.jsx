import React from "react";
import { Form, Input, Select, Button, Card, Flex } from "antd";

const { Option } = Select;

const PolicyPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="is-flex">
      <Card title="Policy">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          disabled={true}
        >
          <Form.Item
            label="Policy No."
            name="policyNo"
            rules={[{ required: true, message: "Please enter Policy Number" }]}
          >
            <Input placeholder="Enter policy number" />
          </Form.Item>

          <Form.Item
            label="Product"
            name="product"
            rules={[{ required: true, message: "Please enter Product Number" }]}
          >
            <Input placeholder="Enter Product" />
          </Form.Item>

          <Form.Item
            label="Policy Status"
            name="policyStatus"
            rules={[{ required: true, message: "Please select Policy Status" }]}
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
          >
            <Input placeholder="Enter customer name" />
          </Form.Item>

          <Form.Item label="Premium" name="premi">
            <Input />
          </Form.Item>
          <Form.Item label="Input Date" name="inputDate">
            <Input />
          </Form.Item>

          <Form.Item label="Application Date" name="applicationDate">
            <Input />
          </Form.Item>

          <Form.Item
            label="Paid To Date"
            name="paidToDate"
            rules={[{ required: true, message: "Please enter Paid To Date" }]}
          >
            <Input placeholder="Enter paid to date (e.g., 2025-12-31)" />
          </Form.Item>

          <Form.Item label="Cancel Date" name="cancelDate">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default PolicyPage;
