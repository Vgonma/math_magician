import React from 'react';

const errorImage = require('../images/404-not-found.jpg');

const NotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <img src={errorImage} alt="" />
  </div>
);

export default NotFound;
