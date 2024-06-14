import React from 'react';
import './loader.css'; // Import the CSS file where the loader styles are defined

const Loader = () => {
  return (
    <div class="cube-loader  content-center mt-96 items-center mb-80 ml-96">
      <div class="cube-top"></div>
      <div class="cube-wrapper">
        <span style={{ '--i': 0 }} className="cube-span"></span>
        <span style={{ '--i': 1 }} className="cube-span"></span>
        <span style={{ '--i': 2 }} className="cube-span"></span>
        <span style={{ '--i': 3 }} className="cube-span"></span>
      </div>
    </div>
  );
};

export default Loader;
