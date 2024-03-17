import { Outlet } from 'react-router-dom';

import Footer from '@/Containers/Footer';
import NavBar from '@/Containers/NavBar';
import ProductProvider from '@/Contexts/ProductContext/ProductContext';

type BaseLayoutProps = {
  children?: React.ReactNode;
};

const BaseLayout = (props: BaseLayoutProps) => {
  const { children } = props;

  return (
    <ProductProvider>
      <NavBar />
      {children ?? <Outlet />}
      <Footer />
    </ProductProvider>
  );
};

export default BaseLayout;
