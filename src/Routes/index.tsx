import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BaseLayout from '@/Containers/BaseLayout';
import Cart from '@/Routes/Cart';
import Home from '@/Routes/Home';
import ProductList from '@/Routes/ProductList';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/wdb-sandbox/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path=":category">
            <Route index element={<ProductList />} />
            <Route path=":id" element={<>Product Details</>} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
