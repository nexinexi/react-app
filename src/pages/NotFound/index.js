import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <div>Page not found</div>
    <Link to="/">Back to Home</Link>
  </>
);

export default NotFound;