import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button, Card, Flex, Space, Table } from "antd";
import axios from "axios";

const host = process.env.REACT_APP_HOST;
const endpoint = process.env.REACT_APP_API_POLICY;

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
];

// Column definitions
const columns = [
    {
        title: "Policy No",
        dataIndex: "policyno",
        key: "policyno",
    },
    {
        title: "Paid To Date",
        dataIndex: "paidtodate",
        key: "paidtodate",
    },
    {
        title: "Status ID",
        dataIndex: "statusid",
        key: "statusid",
    },
    {
        title: "Remark",
        dataIndex: "remark",
        key: "remark",
        render: (text) => (text ? text : "No Remark"), // Handling null case
    },
    {
        title: "Auto Renew",
        dataIndex: "isautorenew",
        key: "isautorenew",
        render: (text) => (text ? "Yes" : "No"),
    },
    {
        title: "Product ID",
        dataIndex: "productid",
        key: "productid",
    },
    {
        title: "Total Premium",
        dataIndex: "totalpremium",
        key: "totalpremium",
    },
    {
        title: "Currency",
        dataIndex: "currencyid",
        key: "currencyid",
    },
    {
        title: "Agent ID",
        dataIndex: "agentid",
        key: "agentid",
    },
];


const PolicyList = () => {
    const [data, setData] = useState([]);

    
    useEffect(() => {
        const fetchPolicyList = async () => {
            console.log('fetching policy list')
            
            const body = {take: 20, skip: 0}
            const res = await axios.post("/api/api/Policy/pagination", body)
                .catch((reason) => console.log(reason))
            console.log(res.data)
            setData(res.data);
        }
        
        fetchPolicyList();
    }, [])

    return (
        <Table dataSource={data} columns={columns} size="small"/>
    )

}

export default PolicyList;