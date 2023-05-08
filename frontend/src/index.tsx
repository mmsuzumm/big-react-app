import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< Updated upstream
import './index.css';
import App from './App';
=======
import Home from './components/screen/home/Home';
>>>>>>> Stashed changes
import reportWebVitals from './reportWebVitals';
import UserStore from './components/store/UserStore';
import './index.css';

type TypeContext = {
  user: UserStore | null;
};
export const Context = createContext<TypeContext>({ user: null });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <App />
=======
    <Context.Provider
      value={{
        user: new UserStore(),
      }}
    >
      <Home />
    </Context.Provider>
>>>>>>> Stashed changes
  </React.StrictMode>
);

reportWebVitals();
