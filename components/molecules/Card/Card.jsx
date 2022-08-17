import Link from 'next/link';
import Image from 'next/image';
import { loaderImage } from 'utils/loaderImage';
import { trimString } from 'utils/trimString';
import styles from './Card.module.scss'
import Title from 'components/atoms/Title/Title';
import P from 'components/atoms/P/P';

const Card = ({ title, featuredImage, date, uri, categories, acf }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {acf &&
          <Image
            src={acf.image.sourceUrl}
            srcSet={acf.image.srcSet}
            alt={title}
            className={styles.img}
            layout="fill"
            objectFit="cover"
            placeholder='blur'
            blurDataURL={loaderImage()}
          />
        }
        {categories?.nodes?.length &&
          <div className={styles.categories}>
            {categories.nodes.map(({ databaseId, name }) => (
              <P key={`${databaseId}-${name}`}>{ name }</P>
            ))}
          </div>
        }
      </div>

      <div className={styles.content}>
        <P>{date}</P>
        <Title
          tag='h3'
          size='sm'
        >
          {title}
        </Title>
        {acf?.description &&
          <P>{trimString(acf.description, 200)}</P>
        }
      </div> 

      <div className={styles.cta}>
        <Link
          href={`/post${uri}`}
        >
          <a>
            Read More
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Card;
