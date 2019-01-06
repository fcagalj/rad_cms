import React from 'react'
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1> Ramen Noodles </h1>
      {/*
    This a random image I made, feel free to skip this in your code
    If you want to add your own image you can add it to the server/public/img folder
    */}
      <img style={{width: '300px', height: '300px'}}src="ramen.jpg"/>
      <h2>Note List</h2>
      <ul>
        <li>First note</li>
        <li>Second note</li>
        <li>Third note</li>
      </ul>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('.react-container'));
