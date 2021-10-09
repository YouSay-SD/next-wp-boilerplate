import { useForm, useWatch } from 'react-hook-form';
import { Container, Card, Heading, CardLoader } from 'components';
import { useCpt } from 'hooks';

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
    <div className='blog-searcher'>
      <Container className='blog-searcher__container'>
        <Heading
          seoTitle={seoTitle}
          description={description}
        />

        <div className='blog-searcher__content'>
          <div className='blog-searcher__input-container'>
            <input 
              {...register('key')}
              autoComplete='false'
              className='blog-searcher__input'
            />
          </div>
          
          <div className='blog-searcher__grid'>
            {!isLoading 
              ? posts?.map(post => {
                  return (
                    <Card
                      key={post.databaseId}
                      {...post}
                    />
                  )})
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
    </div>
  )
}

export default BlogSearcher;