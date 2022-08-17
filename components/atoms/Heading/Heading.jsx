import P from '../P/P';
import Title from '../Title/Title';
import Wysiwyg from '../Wysiwyg/Wysiwyg';
import styles from './Heading.module.scss'

const Heading = ({ className = '', seoTitle: {title, tag}, wysiwyg, description }) => {
  return (
    <div className={`${styles.heading} ${className}`}>
      {title && 
        <Title tag={tag}>{title}</Title>
      }

      {wysiwyg &&
        <Wysiwyg>{wysiwyg}</Wysiwyg>
      }

      {description &&
        <P>{description}</P>
      }
    </div>
  )
}

export default Heading;