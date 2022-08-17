import Container from 'components/atoms/Container/Container';
import Heading from 'components/atoms/Heading/Heading';
import FormGf from 'components/gravityForm/FormGf';
import useGravityForm from 'hooks/useGravityForm';
import styles from './Content.module.scss'

const Contact = ({ seoTitle, gallery, wysiwyg }) => {
  const { data } = useGravityForm({
    formId: 1
  });

  return (
    <Container className={styles.container}>
      <Heading
        seoTitle={seoTitle}
        wysiwyg={wysiwyg}
      />

      <FormGf
        fields={data?.formFields?.edges}
        button={data?.button}
        successMessage={data?.confirmations[0]}
      />
    </Container>
  )
}

export default Contact;