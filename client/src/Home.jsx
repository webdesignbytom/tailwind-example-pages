import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='grid'>
      <h1>Pages Container</h1>
      <section>
        <div>
          <Link to='/contact-one'>Contact One</Link>
        </div>
        <div>
          <Link to='/login-one'>Login One</Link>
        </div>
        <div>
          <Link to='/header-one'>Header One</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
