import { FieldGf, ButtonGf, SuccessMessageGf } from 'components';
import { client } from 'graphQl/client';
import { SUBMIT_FORM } from 'graphQl/mutations/gravityFormMutation';
import { useForm } from 'react-hook-form';
// import { useMutation } from 'react-query';

const FormGf = ({ className = '', fields, button, successMessage }) => {
  // const [submitForm, { isSuccess, isLoading, isError }] = useMutation(SUBMIT_FORM);
  const { register, control, errors, handleSubmit  } = useForm();

  console.log('field', fields)

  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
      // target.reset();

    const values = [];
    values.push(data);

    console.log('values', values)

    const variables = {
      formId: 1,
      fieldValues: 
        values.map(value => {
          console.log('value', value)
          return {
            id: 3,
            emailValues: {
              value: value[3],
            }
          }
        })
      ,
    }

    submitGf(SUBMIT_FORM, variables)
  });

  const submitGf = async (querySubmitForm, variables) => {
    const data = await client.request(querySubmitForm, variables);

    console.log('data submit', data)
  }

  return (
    <form 
      className={`form-gf ${className}`}
      method='post'
      // onSubmit={handleSubmit}
      onSubmit={onSubmit}
    >
      {/* Fields */}
      {fields && fields.map(({ node }) => {
        console.log('node', node)
        return (
          <FieldGf
            key={node.id}
            {...register(`${node.id}`, {
              required: {
                value: true,
                message: 'Email is required',
              }
            })}
            {...node}
          />
        )
      })}

      {/* Button */}
      {button &&
        <ButtonGf
          text={button.text}
        />
      }

      {/* Success Message */}
      {successMessage &&
        <SuccessMessageGf>
          {successMessage.message}
        </SuccessMessageGf>
      }
    </form>
  )
}

export default FormGf;