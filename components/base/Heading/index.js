import { Title, Wysiwyg, P } from 'components';

const Heading = ({ className = '', seoTitle: {title, tag}, wysiwyg, description }) => {
  return (
    <div className={`heading ${className}`}>
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