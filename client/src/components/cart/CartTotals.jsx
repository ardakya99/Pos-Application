import { Button } from "antd";
import {
  ClearOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../../redux/cartSlice";
import { increase, decrease } from "../../redux/cartSlice";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart h-full xl:max-h-[calc(100vh_-_90px)] lg:max-h-[calc(96vh_-_90px)] md:max-h-[calc(96vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">
        Sepetteki Ürünler
      </h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2 overflow-y-auto py-2">
        {cart.cartItems.length > 0 ? (
          cart.cartItems.map((item) => (
            <li className="cart-item flex justify-between" key={item._id}>
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-16 h-16 object-cover cursor-pointer"
                  onClick={() => dispatch(deleteCart(item))}
                />
                <div className="flex flex-col ml-2">
                  <b>{item.title}</b>
                  <span>
                    {item.price}₺ x {item.quantity}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-x-1">
                <Button
                  type="primary"
                  size="small"
                  className="w-full flex items-center justify-center !rounded-full"
                  icon={<PlusCircleOutlined />}
                  onClick={() => dispatch(increase(item))}
                />
                <span className="font-bold">{item.quantity}</span>
                <Button
                  type="primary"
                  size="small"
                  className="w-full flex items-center justify-center !rounded-full"
                  icon={<MinusCircleOutlined />}
                  onClick={() => {
                    if (item.quantity === 1) {
                      if (window.confirm("Ürün Silinsin Mi?")) {
                        dispatch(decrease(item));
                      }
                    } else if (item.quantity > 1) {
                      dispatch(decrease(item));
                    }
                  }}
                />
              </div>
            </li>
          ))
        ) : (
          <p className="text-black-400 font-bold text-center">
            Sepette Ürün Bulunmuyor...
          </p>
        )}
      </ul>

      <div className="cart-totals mt-auto">
        <div className="border-t border-b ">
          <div className="flex justify-between p-2">
            <b>Ara Toplam</b>
            <span>{cart.total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between p-2">
            <b>KDV %{cart.tax}</b>
            <span className="text-red-700">
              +{((cart.total * cart.tax) / 100).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="border-b ">
          <div className="flex justify-between p-2">
            <b className="text-xl text-green-500">Genel Toplam</b>
            <span className="text-xl">
              {(cart.total + (cart.total * cart.tax) / 100).toFixed(2)}₺
            </span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button type="primary" size="large" className="w-full">
            Sipariş Oluştur
          </Button>
          <Button
            type="primary"
            size="large"
            className="w-full mt-2 flex items-center justify-center"
            icon={<ClearOutlined />}
            danger
          >
            Temizle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
