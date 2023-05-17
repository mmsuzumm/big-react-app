import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/screen/home/Home';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type TypeContext = {
  user: UserStore | null;
};

export const Context = createContext<TypeContext>({ user: null });
root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
      }}
    >
      <Home />
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
