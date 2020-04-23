import React,{useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> Tailwind Starter </div>
          <p className="text-gray-700 text-base">
            We are getting stuff ready for you!
          </p>
        </div>
        <div className="px-6 py-4">
          {["React", "Tailwind"]
           .map(tag =>
                <span
                  key={tag}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                  {"#" + tag}
                </span>
              )}
        </div>
      </div>
    </div>
  );
}

export default App;
