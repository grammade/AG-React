import React from "react";
import { Form, Input, Select, Button, Card, Space, Flex } from "antd";

const { Option } = Select;

const Insured = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Form Submitted:", values);
    };

    return (
        <Card title="Insured Information" size="small">
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                size="small"
            >
                <Form.Item
                    label="Title ID"
                    name="titleId"
                    rules={[{ required: true, message: "Please enter Title ID" }]}
                    style={{ marginBottom: 5 }}
                >
                    <Input placeholder="Enter Title ID" />
                </Form.Item>

                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: "Please enter First Name" }]}
                    style={{ marginBottom: 5 }}
                >
                    <Input placeholder="Enter First Name" />
                </Form.Item>

                <Form.Item
                    label="Sex ID"
                    name="sexId"
                    rules={[{ required: true, message: "Please select Gender" }]}
                    style={{ marginBottom: 5 }}
                >
                    <Select placeholder="Select Gender">
                        <Option value="M">Male</Option>
                        <Option value="F">Female</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Birth Date"
                    name="birthDate"
                    rules={[{ required: true, message: "Please enter Birth Date" }]}
                    style={{ marginBottom: 5 }}
                >
                    <Input placeholder="Enter Birth Date (YYYY-MM-DD)" />
                </Form.Item>

                <Form.Item
                    label="Plan ID"
                    name="planId"
                    rules={[{ required: true, message: "Please enter Plan ID" }]}
                    style={{ marginBottom: 5 }}
                >
                    <Input placeholder="Enter Plan ID" />
                </Form.Item>

                <Form.Item
                    label="Premium"
                    name="premium"
                    rules={[{ required: true, message: "Please enter Premium Amount" }]}
                    style={{ marginBottom: 5 }}
                >
                    <Input placeholder="Enter Premium Amount" />
                </Form.Item>

                <Form.Item
                    label="Identity Type ID"
                    name="identityTypeId"
                    rules={[{ required: true, message: "Please enter Identity Type" }]}
                    style={{ marginBottom: 5 }}
                >
                    <Input placeholder="Enter Identity Type ID" />
                </Form.Item>

                <Form.Item
                    label="Identity No."
                    name="identityNo"
                    rules={[{ required: true, message: "Please enter Identity Number" }]}
                >
                    <Input placeholder="Enter Identity Number" />
                </Form.Item>
            </Form>
            <div style={{ position: "absolute", bottom: 15 }}>
                <Space>
                    <Button type="primary" size="small" htmlType="submit">
                        Submit
                    </Button>
                    <Button type="default" size="small">
                        Cancel
                    </Button>
                </Space>
            </div>
        </Card>
    );
};

export default Insured;