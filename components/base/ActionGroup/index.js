import Link from 'next/link';

const ActionGroup = ({ actionGroup: {alignment, actions}, actionColor = '' }) => {
  return (
    <div className={`action-group action-group--${alignment}`}>
      {actions && actions.map(({ display, link: {url, target, title} }, i) => {
        return (
          <Link
            key={i}
            href={url}
          >
            <a 
              className={`action-group__link button ${display} button--${actionColor}`}
              target={target}
            >
              {title}
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default ActionGroup;