import { useForm, useWatch } from 'react-hook-form';
import { useCpt } from 'hooks';
import Heading from 'components/atoms/Heading/Heading';
import styles from './BlogSearcher.module.scss'
import Container from 'components/atoms/Container/Container';
import Card from 'components/molecules/Card/Card';
import CardLoader from 'components/atoms/CardLoader/CardLoader';

export const BlogSearcher = ({ seoTitle, description }) => {
  const { register, control } = useForm();

  // Watch Input
  const key = useWatch({
    control,
    name: 'key', 
    defaultValue: ''
  });

  // Get Post
  const { data, isLoading } = useCpt({
    postType: 'Blog',
    key,
  });

  const posts = data?.cptBlogs?.nodes;

  return (
    <>
      <Container className={styles.container}>
        <Heading
          seoTitle={seoTitle}
          description={description}
        />

        <div className={styles.content}>
          <div>
            <input 
              {...register('key')}
              autoComplete='false'
            />
          </div>
          
          <div className={styles.grid}>
            {!isLoading 
              ? posts?.map(post => (
                  <Card
                    key={post.databaseId}
                    {...post}
                  />
                ))
              :
                <>
                  <CardLoader />
                  <CardLoader />
                  <CardLoader />
                </>
            }
          </div>
        </div>
      </Container>
    </>
  )
}

export default BlogSearcher;