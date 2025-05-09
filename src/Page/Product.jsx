import React from "react";
import { Form, Input, Button, Card, Space } from "antd";
import { usePolicy } from "../Context/PolicyContext";

const Product = () => {
  const { selectedPolicy, selectedPolicyLoading } = usePolicy();
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <Card
      title="Product Information"
      size="small"
      loading={selectedPolicyLoading} 
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
            label="Product ID"
            name="productId"
            style={{ marginBottom: 5 }}
          >
            <Input placeholder="Enter Product ID" />
          </Form.Item>

          <Form.Item label="Name" name="name" style={{ marginBottom: 5 }}>
            <Input placeholder="Enter Product Name" />
          </Form.Item>

          <Form.Item label="Sponsor" name="sponsor" style={{ marginBottom: 5 }}>
            <Input placeholder="Enter Sponsor" />
          </Form.Item>

          <Form.Item label="Remark" name="remark" style={{ marginBottom: 5 }}>
            <Input placeholder="Enter Remark" />
          </Form.Item>

          <Form.Item label="Category ID" name="categoryId">
            <Input placeholder="Enter Category ID" />
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
      )}
    </Card>
  );
};

export default Product;
