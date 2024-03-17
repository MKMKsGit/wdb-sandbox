import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BaseLayout from '@/Containers/BaseLayout';
import Home from '@/Routes/Home';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path=":category">
            <Route index element={<>Product List</>} />
            <Route path=":id" element={<>Product Details</>} />
          </Route>
          <Route path="cart" element={<>Cart</>} />
          <Route path="*" element={<>Not Found</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
