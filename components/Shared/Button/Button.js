import classNames from 'classnames'

const Button = (props) => {
    const {
        label,
        onClick,
        extraClasses
    } = props

    return (
        <button 
          className={classNames(
            'btn',
            { [`${extraClasses}`]: extraClasses }
        )}
          onClick={onClick}>
            {label}
        </button>
    )
}

export default Button
