import { Container, Heading, Card } from 'components';

const BlogPicker = ({ seoTitle, description, blogPicker }) => {
  return (
    <div className='blog-picker'>
      <Container className='blog-picker__container'>
        <Heading
          seoTitle={seoTitle}
          description={description}
        />

        {blogPicker &&
          <div className='blog-picker__grid'>
            {blogPicker.map(data => {
              return (
                <Card
                  key={data.databaseId}
                  {...data}
                />
              )
            })}
          </div>
        }
      </Container>
    </div>
  )
}

export default BlogPicker;