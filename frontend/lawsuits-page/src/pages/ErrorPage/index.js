import React from 'react';
import { useNavigate } from 'react-router';
import { goToMain } from '../../routes/coordinator';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Page not found! Click here and go back to Main Page:</h1>
      <button onClick={() => goToMain(navigate)}>Back to Lawsuits Page</button>
    </>
  );
};
