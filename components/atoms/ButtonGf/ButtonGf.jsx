// Working In Progress
import Button from "components/atoms/Button/Button";

const ButtonGf = ({ className = '', text }) => {
  return (
    <div className={className}>
      <Button 
        color='primary'
        isAnchor={false}
      >
        {text ? text : 'Submit'}
      </Button>
    </div>
  )
}

export default ButtonGf;