import React from 'react';
import { Link } from 'react-router';

export default props => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Not Found</h1>
        <p>Hmm, we are unable to find that page</p>
        <Link to="/" className="button button--link">
          Head Home
        </Link>
      </div>
    </div>
  );
};
