import Link from 'next/link';
import Image from 'next/image';
import { Title, P } from 'components';
import { loaderImage } from 'utils/loaderImage';
import { trimString } from 'utils/trimString';

const Card = ({ title, featuredImage, date, uri, categories, acf }) => {
  return (
    <div className='card'>
      <div className='card__image'>
        <Image
          src={acf.image.sourceUrl}
          srcSet={acf.image.srcSet}
          alt={title}
          className='card__img'
          layout="fill"
          objectFit="cover"
          placeholder='blur'
          blurDataURL={loaderImage()}
        />
        {categories?.nodes?.length &&
          <div className='card__categories'>
            {categories.nodes.map(({ databaseId, name }) => {
              return (
                <P key={`${databaseId}-${name}`}>{ name }</P>
              )
            })}
          </div>
        }
      </div>

      <div className='card__content'>
        <P>{date}</P>
        <Title 
          h='3'
          size='small'
        >
          {title}
        </Title>
        {acf?.description &&
          <P>{trimString(acf.description, 200)}</P>
        }
      </div> 

      <div className='card__cta'>
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
