import { useNavigate } from 'react-router-dom';

import { BasketEmptyIcon, BasketWithItems } from '@/Components';
import NavBarComponent from '@/Components/NavBar';
import { useProduct } from '@/Contexts/ProductContext/ProductContext';

const renderRightAdornmentIcon = (hasItemInCart: boolean) => {
  return hasItemInCart ? <BasketWithItems /> : <BasketEmptyIcon />;
};

const NavBar = () => {
  const navigate = useNavigate();
  const { categories } = useProduct();
  const categoryNames = Object.keys(categories);

  const handleClickLogo = () => {
    navigate('/wdb-sandbox/');
  };

  const handleClickTab = (tab: string) => {
    navigate(tab);
  };

  //TODO: Implement handleGoToCart
  const handleGoToCart = () => {
    // navigate('/cart');
  };

  const hasItemInCart = false;

  return (
    <NavBarComponent
      tabList={categoryNames}
      handleClickLogo={handleClickLogo}
      handleClickTab={handleClickTab}
      rightAdornment={
        <div className={'cursor-pointer'} onClick={handleGoToCart}>
          {renderRightAdornmentIcon(hasItemInCart)}
        </div>
      }
    />
  );
};

export default NavBar;
