import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMenu } from 'hooks';
import styles from './Navbar.module.scss'

const Navbar = () => {
  const { asPath } = useRouter();
  const { data, isLoading } = useMenu({ 
    id: "Primary Menu" 
  });
  
  const menuItems = data?.menu?.menuItems.edges;

  return (
    <nav className={styles.navbar}>
      <Link
        href='/'
      >
        <a
          className={`${styles.link} ${asPath == '/' ? styles.active : ''}`}
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
              className={`${styles.link} ${asPath + '/' == path ? styles.active : ''} ${cssClasses}`}
              target={target}
            >
              {label}
            </a>
          </Link>
        : 
          // External Link
          <a
            key={id}
            className={`${styles.link} ${cssClasses}`}
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