const UserIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      // width={props.width}
      // height={props.height}
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g fill={props.fill}>
        <path d="M256 0c-74.399 0-135 60.599-135 135 0 74.399 60.601 135 135 135s135-60.601 135-135C391 60.599 330.399 0 256 0zM478.599 398.599C438.1 338 370.6 302 297.7 302h-83.4c-72.9 0-140.4 36-180.899 96.599l-2.401 3.9V512h450V402.499l-2.401-3.9z"></path>
      </g>
      <g fill={props.fill}>
        <path d="M256 270V0c74.399 0 135 60.599 135 135 0 74.399-60.601 135-135 135zM481 402.499V512H256V302h41.7c72.9 0 140.4 36 180.899 96.599l2.401 3.9z"></path>
      </g>
    </svg>
  )
}

UserIcon.defaultProps = {
  width: '30px',
  height: '30px',
  fill: '#00ABE9',
  secondFill: '#094067'
} 

export default UserIcon
