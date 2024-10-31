"use client";
import React from "react";

const DonationsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-white to-orange-100">
      <h1 className="mb-8 text-3xl font-bold text-orange-600">Account Details</h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl w-full">
        {/* Box 1: General Donation */}
        <div className="p-6 bg-gradient-to-b from-white to-orange-100 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-orange-600 mb-2">General Donation</h2>
          <p className="text-lg font-semibold text-gray-800">Bank of Baroda</p>
          <p className="text-lg text-gray-800">
            Account Number: <span className="font-normal">70640100001978</span>
          </p>
          <p className="text-lg text-gray-800">
            IFSC Code: <span className="font-normal">BARB0VJKOMO</span>
          </p>
        </div>

        {/* Box 2: Donation for Annadana */}
        <div className="p-6 bg-gradient-to-b from-white to-orange-100 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-orange-600 mb-2">Donation for Annadana</h2>
          <p className="text-lg font-semibold text-gray-800">Bank of Baroda</p>
          <p className="text-lg text-gray-800">
            Account Number: <span className="font-normal">70640100000059</span>
          </p>
          <p className="text-lg text-gray-800">
            IFSC Code: <span className="font-normal">BARB0VJKOMO</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationsPage;
