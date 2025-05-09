import React from "react";
import { Form, Input, Select, Button, Card, Space, Flex } from "antd";

const { Option } = Select;

const Insured = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Card title="Insured Information" size="small" style={{height:'fit-content'}}>
      <Form form={form} layout="vertical" onFinish={handleSubmit} size="small">
        <Form.Item label="Title ID" name="titleId" style={{ marginBottom: 5 }}>
          <Input placeholder="Enter Title ID" />
        </Form.Item>

        <Form.Item
          label="First Name"
          name="firstName"
          style={{ marginBottom: 5 }}
        >
          <Input placeholder="Enter First Name" />
        </Form.Item>

        <Form.Item label="Sex ID" name="sexId" style={{ marginBottom: 5 }}>
          <Select placeholder="Select Gender">
            <Option value="M">Male</Option>
            <Option value="F">Female</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Birth Date"
          name="birthDate"
          style={{ marginBottom: 5 }}
        >
          <Input placeholder="Enter Birth Date (YYYY-MM-DD)" />
        </Form.Item>

        <Form.Item label="Plan ID" name="planId" style={{ marginBottom: 5 }}>
          <Input placeholder="Enter Plan ID" />
        </Form.Item>

        <Form.Item label="Premium" name="premium" style={{ marginBottom: 5 }}>
          <Input placeholder="Enter Premium Amount" />
        </Form.Item>

        <Form.Item
          label="Identity Type ID"
          name="identityTypeId"
          style={{ marginBottom: 5 }}
        >
          <Input placeholder="Enter Identity Type ID" />
        </Form.Item>

        <Form.Item label="Identity No." name="identityNo">
          <Input placeholder="Enter Identity Number" />
        </Form.Item>
        <Space className="pt-6">
          <Button type="primary" size="small" htmlType="submit">
            Submit
          </Button>
          <Button type="default" size="small">
            Cancel
          </Button>
        </Space>
      </Form>
    </Card>
  );
};

export default Insured;
