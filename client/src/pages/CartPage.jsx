import { Table, Card, Button, message, Popconfirm } from "antd";
import { useState } from "react";
import Header from "../components/header/Header";
import CrateBill from "../components/cart/CrateBill";
import { useDispatch, useSelector } from "react-redux";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { increase, decrease, deleteCart } from "../redux/cartSlice.js";

const CartPage = () => {
  //Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      key: "img",
      width: "125px",
      render: (text) => {
        return <img src={text} alt="" className="w-full h-20 object-cover" />;
      },
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      key: "price",
      render: (text) => {
        return <span>{text.toFixed(2)}₺</span>;
      },
    },
    {
      title: "Ürün Adeti",
      dataIndex: "quantity",
      key: "quantity",
      render: (text, record) => {
        return (
          <div className="flex items-center">
            <Button
              type="primary"
              size="small"
              className="w-full flex items-center justify-center !rounded-full"
              icon={<PlusCircleOutlined />}
              onClick={() => dispatch(increase(record))}
            />
            <span className="font-bold w-6 inline-block text-center">
              {record.quantity}
            </span>
            <Button
              type="primary"
              size="small"
              className="w-full flex items-center justify-center !rounded-full"
              icon={<MinusCircleOutlined />}
              onClick={() => {
                if (record.quantity === 1) {
                  if (window.confirm("Ürün Silinsin Mi?")) {
                    dispatch(decrease(record));
                    message.success("Ürün Sepetten Silindi.");
                  }
                } else if (record.quantity > 1) {
                  dispatch(decrease(record));
                }
              }}
            />
          </div>
        );
      },
    },
    {
      title: "Toplam Ürün Fiyatı",
      dataIndex: "price",
      key: "price",
      render: (text, record) => {
        return <span>{(record.quantity * record.price).toFixed(2)}₺</span>;
      },
    },
    {
      title: "İşlemler",
      dataIndex: "price",
      key: "price",
      render: (_, record) => {
        return (
          <Popconfirm
          title="Silmek için emin misiniz?"
          onConfirm={() => {
            dispatch(deleteCart(record));
            message.success("Ürün Başarıyla Silindi.");
          }}
          okText="Evet"
          cancelText="Hayır"
          >
            <Button
            type="link"
            danger
          >
            Sil
          </Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={cart.cartItems}
          columns={columns}
          pagination={false}
          bordered
        />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>{cart.total.toFixed(2)}₺</span>
            </div>
            <div className="flex justify-between my-2">
              <span>KDV Toplam (%8)</span>
              <span className="text-red-600">
                +{((cart.total * cart.tax) / 100).toFixed(2)}₺
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Toplam</span>
              <span className="font-bold">{cart.total.toFixed(2)}₺</span>
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
      <CrateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
