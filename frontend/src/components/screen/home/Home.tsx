import { FC, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayouts from '../../../layouts/MainLayouts';
import NotFound from '../notFound/NotFound';
import { Context } from '../../../index';

const Home: FC = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="/contacts" element={<NotFound />}></Route>
          <Route path="/about" element={<NotFound />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
