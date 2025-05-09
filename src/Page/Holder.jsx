import React, { useState } from "react";
import { Form, Input, Select, Button, Card, Space } from "antd";

const { Option } = Select;

const Holder = () => {
  const [form] = Form.useForm();
  const [identityType, setIdentityType] = useState("OTH");

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  const selectBefore = (
    <Select
      value={identityType}
      onChange={(value) => {
        setIdentityType(value);
        // Also update the form value for identityType
        form.setFieldValue("identityType", value);
      }}
      style={{ width: 80 }}
    >
      <Option value="OTH">OTH</Option>
      <Option value="KK">KK</Option>
      <Option value="KTP">KTP</Option>
      <Option value="SIM">SIM</Option>
      <Option value="PAS">PAS</Option>
    </Select>
  );

  return (
    <Card title="Holder Information" size="small" style={{ height: "fit-content" }}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        size="small"
        initialValues={{
          identityType: identityType,
        }}
      >
        <Form.Item label="Title" name="title" style={{ marginBottom: 5 }}>
          <Input placeholder="Enter Title" />
        </Form.Item>

        <Form.Item label="Name" name="name" style={{ marginBottom: 5 }}>
          <Input placeholder="Enter Name" />
        </Form.Item>

        <Form.Item label="Identity" name="identity" style={{ marginBottom: 5 }}>
          <Input placeholder="Enter Identity" />
        </Form.Item>

        <Form.Item label="Mobile Phone" name="mobilePhone" style={{ marginBottom: 5 }}>
          <Input placeholder="Enter Mobile Phone" />
        </Form.Item>

        <Form.Item label="Account No" name="accountNo" style={{ marginBottom: 5 }}>
          <Input placeholder="Enter Account No" />
        </Form.Item>

        <Form.Item label="Account Name" name="accountName" style={{ marginBottom: 5 }}>
          <Input placeholder="Enter Account Name" />
        </Form.Item>

        <Form.Item label="Identity Type & No." style={{ marginBottom: 5 }}>
          <Input
            addonBefore={selectBefore}
            placeholder="Enter Identity Number"
            name="identityNo"
            onChange={(e) => {
              form.setFieldValue("identityNo", e.target.value);
            }}
          />
          {/* Hidden field to store identityType */}
          <Form.Item name="identityType" noStyle>
            <Input type="hidden" />
          </Form.Item>
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

export default Holder;
