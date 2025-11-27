import React from 'react';

const TopBanner: React.FC = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 shadow-lg animate-pulse">
      <div className="container mx-auto px-2 text-center">
        <p className="text-sm md:text-lg font-medium">
          Essa promoção acaba hoje: <span className="font-bold">{getCurrentDate()}</span>
        </p>
      </div>
    </div>
  );
};

export default TopBanner;