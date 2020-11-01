import classNames from 'classnames'

const Input = (props) => {
    const {
        name,
        type,
        placeholder,
        extraClasses,
        ariaLable,
        required
    } = props

    return (
        <input 
          className={classNames(
            { [`${extraClasses}`]: extraClasses }
        )}
          name={name}
          type={type} 
          placeholder={placeholder}
          aria-label={ariaLable}
          required={required}
      />
        
    )
}

export default Input
