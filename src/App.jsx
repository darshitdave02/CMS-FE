import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HOME_ROUTE, ERROR_ROUTE } from './constants/routes';
import './App.css';
import Error from './pages/Error';
import PageNotFound from './pages/PageNotFound';
import LoginPage from './pages/LoginPage';
import ContentTypeBuilder from './pages/ContentTypeBuilder';
import CollectionView from './pages/CollectionView';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<LoginPage />} />
          <Route path={`${HOME_ROUTE}/dashboard`}element={<ContentTypeBuilder />} />
          <Route path={`${HOME_ROUTE}/dashboard/collections/:collectionName`}element={<CollectionView />} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
