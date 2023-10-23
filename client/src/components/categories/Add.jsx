import { Modal, Form, Input, Button, message } from 'antd'
import React from 'react'

const Add = ({isAddModalOpen, setIsAddModalOpen, categories, setCategories}) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        try{
            fetch("http://localhost:5000/api/categories/add-category",{
                method:"POST",
                body: JSON.stringify(values),
                headers: {"Content-type": "application/json; chatser=UTF-8"},
            });
            message.success("Kategori Başarıyla Eklendi.");
            form.resetFields();
            setCategories([...categories,{
                _id: Math.random(),
                title: values.title
            }]);
        } catch(error) {
            console.log(error);
        }
      }
  return (
    <Modal
        title="Kategori Ekleme"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
           <Form.Item 
           name="title"
           label="Yeni Kategori Ekle" 
           rules={[{required:true, message:"Kategori Alanı Boş Geçilemez!"}]}>
                <Input/>
           </Form.Item>
           <Form.Item className="flex justify-end mb-0">
                <Button type="primary" htmlType="submit">Oluştur</Button>
           </Form.Item>
        </Form>
      </Modal>
  )
}

export default Add;