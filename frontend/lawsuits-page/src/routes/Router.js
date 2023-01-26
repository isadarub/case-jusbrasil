import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage/index.js';
import { LawsuitDetails } from '../pages/LawsuitDetails/index.js';
import { Main } from '../pages/Main/index.js';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'*'} element={<ErrorPage />} />
        <Route index element={<Main />} />
        <Route path={'/lawsuits/:lawsuitId'} element={<LawsuitDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
