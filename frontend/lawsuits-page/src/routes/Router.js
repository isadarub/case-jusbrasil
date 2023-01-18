import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import { LawsuitDetails } from '../pages/LawsuitDetails';
import { Main } from '../pages/Main';

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
