import { Table, Card, Button } from "antd";
import { useState } from "react";
import Header from "../components/header/Header";
import CrateBill from "../components/cart/CrateBill";

const CartPage = () => {
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
      <div className="px-6">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          bordered
        />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>549.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam (%8)</span>
              <span className="text-red-600">+43.92₺</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Toplam</span>
              <span className="font-bold">92.92₺</span>
            </div>
            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <CrateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default CartPage;
