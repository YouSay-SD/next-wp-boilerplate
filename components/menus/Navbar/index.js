import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMenu } from 'hooks';

const Navbar = () => {
  const { asPath } = useRouter();
  const { data, isLoading } = useMenu({ 
    id: "Primary Menu" 
  });
  
  const menuItems = data?.menu?.menuItems.edges;

  return (
    <nav className='navbar'>
      <Link
        href='/'
      >
        <a
          className={`navbar__link ${asPath == '/' ? 'active' : ''}`}
        >
          Home!
        </a>
      </Link>

      {!isLoading && menuItems?.map(({ node: { id, url, path, label, target, cssClasses }}) => {
        return url.includes(process.env.wpUrl)
        ? 
          // Internal Link
          <Link
            key={id}
            href={path}
            >
            <a 
              className={`navbar__link ${asPath + '/' == path ? 'active' : ''} ${cssClasses}`}
              target={target}
            >
              {label}
            </a>
          </Link>
        : 
          // External Link
          <a
            key={id}
            className={`navbar__link ${cssClasses}`}
            target={target}
            href={url}
          >
            {label}
          </a>
      })}
    </nav>
  )
}

export default Navbar;