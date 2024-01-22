// GmailIcon.js

import React from 'react';
import PropTypes from 'prop-types';

const GmailIcon = ({ className }) => {
  // Extract the color class from the provided className
  const colorClass = className.split(' ').find((cls) => cls.startsWith('text-'));
  const darkModeClass = className.includes('dark:') ? 'dark:' : '';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      className={`fill-current ${className}`}
    >
      <path
        fill={colorClass ? '' : '#D44638'} // Use the color class or default color
        d="M14 2H2C0.9 2 0.01 2.9 0.01 4L0 12c0 1.1 0.9 2 1.99 2L14 14c1.1 0 2-0.9 2-2V4C16 2.9 15.1 2 14 2zM14 12L8 7.5L2 12V4l6 4.5L14 4V12z"
      />
    </svg>
  );
};

GmailIcon.propTypes = {
  className: PropTypes.string.isRequired,
};

export default GmailIcon;
