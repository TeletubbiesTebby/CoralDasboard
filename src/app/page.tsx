import React from "react";

const CoralAnalysis = () => {
  return (
    <div className="bg-blue-50 min-h-screen justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl w-full">
        
        {/* Coral Bleaching Section */}
        <div className="bg-blue-100 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Coral Bleaching</h2>

          <div className="border-2 border-gray-300 rounded-lg h-60 flex justify-center items-center bg-sky-950">
            <button className="bg-gray-200 text-black font-semibold px-3 py-1 rounded-lg hover:bg-gray-400 hover:text-white">+ photo</button>
          </div>

          <div className="flex space-x-20 justify-center mt-6">
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600">Reset</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Confirm</button>
          </div>

          <div className="flex justify-between mt-6">
          <div>
          <div className="mt-4 border-2 border-gray-300 rounded-lg h-60 w-80 bg-sky-950"></div>
          <p className="text-black-500 font-semibold text-lg mt-4 text-center">coral bleaching detected</p>
          </div>
          <div className="mt-10">
            <p className="text-gray-700 mr-32">Bleaching percentage :</p>
            <p className="text-gray-700 mt-8">Bleaching level :</p>
            <p className="text-gray-700 mt-8">Detail :</p>
          </div>
          </div>
        </div>

        {/* Coral Growth Rate Section */}
        <div className="bg-blue-100 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Coral Growth Rate</h2>

          <div className="border-2 border-gray-300 rounded-lg h-60 flex justify-center items-center bg-sky-950">
            <button className="bg-gray-200 text-black font-semibold px-3 py-1 rounded-lg hover:bg-gray-400 hover:text-white">+ photo</button>
          </div>

          <div className="flex space-x-20 justify-center mt-6">
            <button className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-600">Reset</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Confirm</button>
          </div>

          <div className="flex justify-between mt-6">
          <div>
          <div className="mt-4 border-2 border-gray-300 rounded-lg h-60 w-80 bg-sky-950"></div>
          <p className="text-black-500 font-semibold text-lg mt-4 text-center">coral growth detected</p>
          </div>
          <div className="mt-10">
            <p className="text-gray-700 mr-32">Growth percentage :</p>
            <p className="text-gray-700 mt-8">Surface area (cm²) :</p>
            <p className="text-gray-700 mt-8">Growth rate (cm) :</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoralAnalysis;

