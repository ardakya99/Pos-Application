import React from "react";
import { Table } from "antd";
import Header from "../components/header/Header";
import { useState } from "react";

const CustomerPage = () => {
  //Modal State
  
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Header />
      <h1 className="text-center text-4xl font-bold mb-4">Müşterilerim</h1>
      <div className="px-6">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered
        />
      </div>
    </>
  );
};

export default CustomerPage;
