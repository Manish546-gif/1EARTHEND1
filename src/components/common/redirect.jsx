import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePageTransition } from './CurtainPreloader';

const TransitionLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  const { startPageTransition } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    startPageTransition(() => navigate(to));
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
