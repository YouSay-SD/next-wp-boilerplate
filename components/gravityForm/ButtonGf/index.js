import { Button } from 'components';

const ButtonGf = ({ className = '', text }) => {
  return (
    <div className={`button-gf ${className}`}>
      <Button 
        className='button-gf__btn'
        color='primary'
        isAnchor={false}
      >
        {text ? text : 'Submit'}
      </Button>
    </div>
  )
}

export default ButtonGf;