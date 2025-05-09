import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button, Card, Flex, Space, Table } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import "./PolicyList.css";

const host = process.env.REACT_APP_HOST;
const endpoint = process.env.REACT_APP_API_POLICY;


const handlePolicyClick = (policy) => {
  console.log(policy)
}
const PolicyList = () => {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPolicyList = async (page, pageSize) => {
    const body = { take: pageSize, skip: (page - 1) * pageSize };
    const headers = {
      "Content-Type": "application/json",
    };

    const res = await axios
      .post(`${host}/${endpoint}`, body, { headers })
      .then((res) => {
        res.data.data.map((item) => {
          item.key = item.policyno;
          item.paidtodate = dayjs(item.paidtodate).format("DD MMM YYYY");
          return item;
        });
        setData(res.data.data);
        setTotal(res.data.total);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((reason) => {
        console.log("failed fetching");
        dataSource.map((item) => {
          item.key = item.policyno;
          item.paidtodate = dayjs(item.paidtodate).format("DD MMM YYYY");
          return item;
        });
        setData(dataSource);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPolicyList(currentPage, pageSize);
  }, []);

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
    fetchPolicyList(page, pageSize);
  };

  return (
    <Table
      dataSource={data}
      columns={columns}
      total={total}
      loading={isLoading}
      size="small"
      className="compact-table"
      pagination={{
        current: currentPage,
        pageSize: pageSize,
        total: total,
        showSizeChanger: true,
        onChange: handlePageChange,
      }}
    />
  );
};


const dataSource = [
  {
    key: "1",
    policyno: "300-100-0091218",
    paidtodate: "2022-05-17T21:16:32.99",
    statusid: "CA",
    remark: "N/A", // Handling null case
    isautorenew: false,
    productid: "AMMS",
    totalpremium: 100000,
    currencyid: "IDR",
    agentid: "Partner",
  },
  {
    key: "2",
    policyno: "300-100-123123",
    paidtodate: "2022-05-17T21:16:32.99",
    statusid: "CA",
    remark: "N/A", // Handling null case
    isautorenew: false,
    productid: "AMMS",
    totalpremium: 100000,
    currencyid: "IDR",
    agentid: "Partner",
  },
];

// Column definitions
const columns = [
  {
    title: "Policy No",
    dataIndex: "policyno",
    key: "policyno",
    width: 110,
    render: (value, row) => (
      <a onClick={() => handlePolicyClick(value)}>{value}</a>
    )
  },
  {
    title: "Paid To Date",
    dataIndex: "paidtodate",
    key: "paidtodate",
    width: 100,
  },
  {
    title: "Status",
    dataIndex: "statusid",
    key: "statusid",
    ellipsis: true,
  },
  {
    title: "Remark",
    dataIndex: "remark",
    key: "remark",
    width: 90,
    ellipsis: true,
    render: (text) => (text ? text : "No Remark"), // Handling null case
  },
  {
    title: "Auto Renew",
    dataIndex: "isautorenew",
    key: "isautorenew",
    ellipsis: true,
    render: (text) => (text ? "Yes" : "No"),
  },
  {
    title: "Product",
    dataIndex: "productid",
    key: "productid",
    ellipsis: true,
    width: 70,
  },
  {
    title: "Total Premium",
    dataIndex: "totalpremium",
    key: "totalpremium",
    width: 100,
    ellipsis: true,
  },
  {
    title: "Currency",
    dataIndex: "currencyid",
    key: "currencyid",
    ellipsis: true,
  },
  {
    title: "Agent ID",
    dataIndex: "agentid",
    key: "agentid",
    ellipsis: true,
  },
];

export default PolicyList;
