import { Route, Routes } from "react-router-dom";
import { Login, Register, Home, Menu, Cart, Checkout, CompletePayment} from "../containers";
import {UserLayout} from "../layouts/userlayouts";
import { AdminLayout } from "../layouts/AdminLayout";
import { NewProducts } from "../containers/Admin/NewProducts";
import { EditProducts } from "../containers/Admin/EditProducts";
import { Products } from "../containers/Admin/Products";
import { Orders } from "../containers/Admin/Orders";

export function Router() {
  return (
   <Routes>
    <Route path="/" element={<UserLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/complete" element={<CompletePayment />} />
    </Route>

    <Route path="/admin" element={<AdminLayout />} >
      <Route path="pedidos" element={<Orders/>} />
      <Route path="novo-produto" element={<NewProducts/>} />
      <Route path="editar-produto" element={<EditProducts/>} />
      <Route path="produtos" element={<Products/>} />
    </Route>


      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar" element={<Register />} />

   </Routes>
  )
}

