import React from 'react';
import '../../App.css';

export const Tag = ({ label }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 inter">
      {label}
    </span>
  );
};