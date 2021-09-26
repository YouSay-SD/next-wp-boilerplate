import { Container, Heading, FormGf } from 'components';
import useGravityForm from 'hooks/useGravityForm';

const Contact = ({ seoTitle, gallery, wysiwyg }) => {
  const { data } = useGravityForm({
    formId: 1
  });

  return (
    <div className='contact'>
      <Container className='contact__container'>
        <Heading
          seoTitle={seoTitle}
          wysiwyg={wysiwyg}
        />

        <div className='contact__form'>
          <FormGf
            fields={data?.formFields?.edges}
            button={data?.button}
            successMessage={data?.confirmations[0]}
          />
        </div>
      </Container>
    </div>
  )
}

export default Contact;