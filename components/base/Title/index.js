// import React from 'react';
// import './styles.scss';

const Title = ({ children, size = 'md', className = '', tag = 'h2', }) => {
  const Tag = `${tag}`;

  return (
    <div className={`title ${className}`}>
      <Tag className={`title__tag title__tag--${size}`}>{children}</Tag>
    </div>
  )
}

export default Title;