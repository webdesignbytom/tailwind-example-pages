import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='grid'>
      <h1>Pages Container</h1>
      <Link to='/contact-one'>Contact One</Link>
    </div>
  );
}

export default Home;
