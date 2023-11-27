import { Button, Card, Form, Input, Modal, Select } from "antd";
import { useSelector } from "react-redux";

const CrateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const cart = useSelector((state) => state.cart);
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Müşteri Adı"
          name="customerName"
          rules={[
            {
              required: true,
              message: "Müşteri Adı Boş Bırakılamaz!",
            },
          ]}
        >
          <Input placeholder="Bir Müşteri Adı Yazınız" />
        </Form.Item>
        <Form.Item
          label="Telefon Numarası"
          name="phoneNumber"
          rules={[
            { required: true, message: "Telefon Numarası Boş Bırakılamaz!",},
          ]}
        >
          <Input placeholder="Bir Telefon Numarası Yazınız" maxLength={11} />
        </Form.Item>
        <Form.Item
          label="Ödeme Yöntemi"
          name="paymentMode"
          rules={[
            {
              required: true,
              message: "Bir Ödeme Yöntemi Seçiniz",
            },
          ]}
        >
          <Select placeholder="Ödeme Yöntemi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>

        <Card className="">
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>{cart.total.toFixed(2)}₺</span>
          </div>
          <div className="flex justify-between my-2">
            <span>KDV Toplam (%8)</span>
            <span className="text-red-600">+{((cart.total * cart.tax) / 100).toFixed(2)}₺</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Toplam</span>
            <span className="font-bold">{cart.total.toFixed(2)}₺</span>
          </div>
          <div className="flex justify-end">
            <Button
              className="mt-4"
              type="primary"
              onClick={() => {
                setIsModalOpen(true);
              }}
              htmlType="sumbit"
            >
              Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CrateBill;
