import PropTypes from 'prop-types'

const PropBody = (props) =>{
  return (
    <div>
      <h2>body Test</h2>
      <p>{props.title}</p>
      <p>
        {props.children}
      </p>
    </div>
  )
}

export default PropBody