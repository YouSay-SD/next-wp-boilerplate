import { Button } from 'components';

const ButtonGroup = ({ buttonGroup: {alignment, buttons}, actionColor = '' }) => {
  return (
    <div className={`button-group button-group--${alignment}`}>
      {buttons && buttons.map(({ display, link: {url, target, title} }, i) => {
        return (
          <Button
            key={i}
            href={url}
            className={`button-group__link`}
            target={target}
            state={display}
            color='primary'
          >
            {title}
          </Button>
        )
      })}
    </div>
  )
}

export default ButtonGroup;
