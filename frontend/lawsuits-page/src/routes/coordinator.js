export const goToMain = navigate => {
  navigate('/');
};

export const goToLawsuitDetails = (navigate, lawsuitId) => {
  navigate(`/lawsuits/${lawsuitId}`);
};
