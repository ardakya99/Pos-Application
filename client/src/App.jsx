import {
   BrowserRouter,
   Routes,
   Route
   } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
import ProductPage from "./pages/ProductPage";
import CustomerPage from "./pages/CustomerPage";
import StatisticsPage from "./pages/StatisticPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/bills" element={<BillPage/>}/>
      <Route path="/customers" element={<CustomerPage/>}/>
      <Route path="/statistic" element={<StatisticsPage/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
