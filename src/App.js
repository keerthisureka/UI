import React from 'react';
import Widget from './components/Widget';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-1/2 hidden lg:block"></div>
      <div className="w-full lg:w-1/2 p-4 space-y-4 my-auto">
        <Widget />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
