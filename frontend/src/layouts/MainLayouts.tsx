import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import Menu from '../components/ui/site-menu/Menu';

const MainLayouts: FC = () => {

  return (
    <>
      <Menu></Menu>
      <Outlet />
    </>
  );
};

export default MainLayouts;
