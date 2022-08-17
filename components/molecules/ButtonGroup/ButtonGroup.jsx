import Button from 'components/atoms/Button/Button';
import styles from './ButtonGroup.module.scss'

const ButtonGroup = ({ buttonGroup: {alignment, buttons} }) => {
  return (
    <div className={`${styles.buttonGroup} ${styles[alignment]}`}>
      {buttons && buttons.map(({ display, link: {url, target, title} }, i) => (
        <Button
          key={i}
          href={url}
          target={target}
          state={display}
          color='primary'
        >
          {title}
        </Button>
      ))}
    </div>
  )
}

export default ButtonGroup;
