import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayouts from '../../../layouts/MainLayouts';
import NotFound from '../notFound/NotFound';

const Home: FC = () => {
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
