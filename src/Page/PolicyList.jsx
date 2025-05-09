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
        ellipsis: true,
    },
    {
        title: "Paid To Date",
        dataIndex: "paidtodate",
        key: "paidtodate",
        ellipsis: true,
    },
    {
        title: "Status ID",
        dataIndex: "statusid",
        key: "statusid",
        ellipsis: true,
    },
    {
        title: "Remark",
        dataIndex: "remark",
        key: "remark",
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
        title: "Product ID",
        dataIndex: "productid",
        key: "productid",
        ellipsis: true,
    },
    {
        title: "Total Premium",
        dataIndex: "totalpremium",
        key: "totalpremium",
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


const PolicyList = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchPolicyList = async () => {
            const body = { take: 20, skip: 0 }
            const headers = {
                "Content-Type": "application/json"
            };

            const res = await axios
                .post(`${host}/${endpoint}`, body, { headers })
                .then((res) => {
                    res.data.data.map(item => {
                        item.key = item.policyno;
                    })
                    setData(res.data.data);
                    setIsLoading(false)
                    console.log(res.data);
                })
                .catch((reason) =>{
                    console.log('failed fetching')
                    setData(dataSource);
                    setIsLoading(false);
                });
        }
        fetchPolicyList();
    }, [])

    return (
        <Table dataSource={data} columns={columns} size="small" loading={isLoading}/>
    )

}

export default PolicyList;