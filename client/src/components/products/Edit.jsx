import { Button, Form, Modal, Select, Input, Table, message } from "antd";
import React, { useEffect, useState } from "react";

const Edit = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEditModalOpen, setisEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const onFinish = async (values) => {
    try {
      await fetch("http://localhost:5000/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ ...values, productId: editingItem._id }),
        headers: { "Content-type": "application/json; chatser=UTF-8" },
      });
      message.success("Ürün Başarıyla güncellendi.");
      setProducts(
        products.map((item) => {
          if (item._id === editingItem._id) {
            return values;
          } else return item;
        })
      );
    } catch (error) {
      message.error("Bir şeyler yanlış gitti.");
      console.log(error);
    }
  };

  useEffect(() => {
    form.setFieldsValue(editingItem);
  }, [form, editingItem]);

  
  const deleteCategory = (id) => {
    if (window.confirm("Emin misiniz?")) {
      try {
        fetch("http://localhost:5000/api/products/delete-product", {
          method: "DELETE",
          body: JSON.stringify({ productId: id }),
          headers: { "Content-type": "application/json; chatser=UTF-8" },
        });
        message.success("Ürün Başarıyla Silinmiştir.");
        setProducts(products.filter((item) => item._id !== id));
      } catch (error) {
        message.error("Bir şeyler yanlış gitti.");
        console.log(error);
      }
    }
  };
  const columns = [
    {
      title: "Ürün Adı",
      dataIndex: "title",
      width: "4%",
      render: (_, record) => {
        return <p>{record.title}</p>;
      },
    },
    {
      title: "Ürün Görseli",
      dataIndex: "img",
      width: "4%",
      render: (_, record) => {
        return (
          <img src={record.img} alt="" className="w-full h-20 object-cover" />
        );
      },
    },
    {
      title: "Ürün Fiyatı",
      dataIndex: "price",
      width: "8%",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      width: "8%",
    },
    {
      title: "İşlemler",
      dataIndex: "action",
      width: "8%",
      render: (_, record) => {
        return (
          <div>
            <Button
              type="link"
              className="pl-0"
              onClick={() => {
                setisEditModalOpen(true);
                setEditingItem(record);
              }}
            >
              Düzenle
            </Button>
            <Button
              type="link"
              danger
              onClick={() => deleteCategory(record._id)}
            >
              Sil
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Table
        bordered
        dataSource={products}
        columns={columns}
        rowKey={"_id"}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />
      <Modal
        title="Yeni Ürün Ekleme"
        open={isEditModalOpen}
        onCancel={() => {setisEditModalOpen(false)}}
        footer={false}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            name="title"
            label="Ürün Adı"
            rules={[
              { required: true, message: "Ürün Adı Alanı Boş Geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün adı giriniz" />
          </Form.Item>
          <Form.Item
            name="img"
            label="Ürün Görseli"
            rules={[
              { required: true, message: "Ürün Görseli Alanı Boş Geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün Görseli ekleyiniz" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Ürün Fiyatı"
            rules={[
              { required: true, message: "Ürün Fiyatı Alanı Boş Geçilemez!" },
            ]}
          >
            <Input placeholder="Ürün fiyatı giriniz" />
          </Form.Item>
          <Form.Item
            name="category"
            label="Kategori Seçiniz"
            rules={[
              { required: true, message: "Kategori Seç Alanı Boş Geçilemez!" },
            ]}
          >
            <Select
              showSearch
              placeholder="Kategori Seçiniz"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>

          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Güncelle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
