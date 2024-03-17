import { useNavigate } from 'react-router-dom';

import FooterComponent from '@/Components/Footer';
import { useProduct } from '@/Contexts/ProductContext';

const Footer = () => {
  const navigate = useNavigate();
  const { categories } = useProduct();
  const categoryNames = Object.keys(categories);

  const handleClickProduct = (product: string) => {
    navigate(product);
  };

  return <FooterComponent productList={categoryNames} handleClickProduct={handleClickProduct} />;
};

export default Footer;
