import Container from 'components/atoms/Container/Container';
import Heading from 'components/atoms/Heading/Heading';
import Card from 'components/molecules/Card/Card';
import styles from './BlogPicker.module.scss'

const BlogPicker = ({ seoTitle, description, blogPicker }) => {
  return (
    <Container className={styles.container}>
      <Heading
        seoTitle={seoTitle}
        description={description}
      />

      {blogPicker &&
        <div className={styles.grid}>
          {blogPicker.map(data => (
            <Card
              key={data.databaseId}
              {...data}
            />
          ))}
        </div>
      }
    </Container>
  )
}

export default BlogPicker;