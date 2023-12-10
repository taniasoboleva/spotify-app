import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import DetailPage from './pages/DetailPage';
import LandingPage from './pages/LandingPage';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:title/:id" element={<DetailPage />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
