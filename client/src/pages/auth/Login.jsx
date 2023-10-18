import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import AuthCarousel from "./AuthCarousel";


const Login = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 flex flex-col w-full h-full justify-center relative">
            <div className="flex justify-center items-center mb-12">
                <img src="/images/logo.svg" alt="" width={300}/>
            </div>
          
          <Form layout="vertical">
            <Form.Item
              label="Kullanıcı Adı"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "Kullanıcı Adı Alanı Boş Bırakılamaz!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şifre"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Şifre Alanı Boş Bırakılamaz!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <div className="flex justify-between items-center">
                <Checkbox>Beni Hatırla</Checkbox>
                <Link className="underline">Parolamı unuttum</Link>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Giriş Yap
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
           Henüz bir hesabınız yok mu?&nbsp;{" "}
            <Link to="/register" className="text-blue-600">
              {" "}
              Kayıt Ol
            </Link>
          </div>
        </div>
        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#1e6b1e]">
          <div className="w-full h-full flex  items-center">
            <div className="w-full">
            <Carousel className="!h-full  px-6" autoplay>
              <AuthCarousel img="/images/responsive.svg" title="Responsive" description="Tüm Cihaz Boyutlarıyla Uyumluluk"/>
              <AuthCarousel img="/images/statistic.svg" title="İstatistikler" description="Geniş Tutulan İstatistikler"/>
              <AuthCarousel img="/images/customer.svg" title="Müşteri Memnuniyeti" description="En iyi Deneyimlere Sahip Olun"/>
              <AuthCarousel img="/images/admin.svg" title="Yönetici Paneli" description="Tek Yerden Yönetim"/>
            </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
