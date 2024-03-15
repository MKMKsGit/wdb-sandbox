import { Fragment } from 'react/jsx-runtime';
import { Outlet } from 'react-router-dom';

type BaseLayoutProps = {
  children?: React.ReactNode;
};

const BaseLayout = (props: BaseLayoutProps) => {
  const { children } = props;
  return (
    <Fragment>
      <>Footer</>
      {children ?? <Outlet />}
      <>Navbar</>
    </Fragment>
  );
};

export default BaseLayout;
