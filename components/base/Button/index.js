import Link from 'next/link';

const Button = ({ 
  children, 
  color = 'primary', 
  state = 'default', 
  className = '', 
  isAnchor = true, 
  href, 
  target, 
  ...props 
}) => {
  const btnClasses = `button button--${color} button--${state} ${className}`;

  return isAnchor 
    ? 
      (
        <Link
          href={href}
          {...props}
        >
          <a
            className={btnClasses}
            target={target}
          >
            {children}
          </a>
        </Link>
      ) 
    :
     (
      <button 
        className={btnClasses}
        {...props}
      >
        { children }
      </button>
     )
}

export default Button;