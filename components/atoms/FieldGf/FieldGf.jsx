// Working In Progress
import Input from "components/atoms/Input/Input";
import Textarea from "components/atoms/Textarea/Textarea";
import styles from './FieldGf.module.scss'

const FieldGf = ({ label, placeholder, type, isRequired, errorMessage, innerRef, register, ...rest }) => {
  
  // Render Input
  const renderInput = () => { 
    return (
      <Input
        // innerRef={innerRef}
        placeholder={placeholder}
        // required={isRequired}
        type={type}
        // ref={innerRef}
        {...rest}
      />
    )
  };

  // Render Textarea
  const renderTextarea = () => { 
    return (
      <Textarea
        // innerRef={innerRef}
        // {...register}
        placeholder={placeholder}
        required={isRequired}
        type={type}
        // ref={innerRef}
        {...rest}
      />
    )
  };

  // Set in this array all the input types
  const renderField = {
    text: renderInput,
    email: renderInput,
    textarea: renderTextarea
  }

  return (
    <div className={styles.fieldGf}>
      <label className='field-gf__label'>{label}</label>
        {/* Render the input depending the type */}
        {renderField[type]()}
      <p className={styles.error}>{errorMessage ? errorMessage : 'Default Error Message'}</p>
    </div>
  )
}

export default FieldGf;