import React from "react";
import { Table, Card, Button } from "antd";
import Header from "../components/header/Header";
import { useState } from "react";
import PrintBills from "../components/bills/PrintBills";

const BillPage = () => {
  //Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  console.log(isModalOpen);
  return (
    <>
      <Header />
      <h1 className="text-center text-4xl font-bold mb-4">Faturalar</h1>
      <div className="px-6">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered
        />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Yazdır
            </Button>
          </Card>
        </div>
      </div>
      <PrintBills isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default BillPage;
