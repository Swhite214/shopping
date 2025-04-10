// src/shared/ui/Icon/index.jsx
import React from 'react';
import './Icon.css';

const iconMap = {
  home: '🏠',
  message: '💌',
  explore: '🔍',
  heart: '♡',
  filled_heart: '❤️',
  comment: '💬',
  bookmark: '🔖',
  settings: '⚙️',
  plus: '➕',
  more: '•••',
};

const Icon = ({ name, size = 'medium' }) => {
  const sizeClass = `icon-${size}`;
  
  return (
    <i className={`icon ${sizeClass}`}>
      {iconMap[name] || name}
    </i>
  );
};

export default Icon;