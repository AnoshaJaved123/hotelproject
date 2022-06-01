import React from 'react'

const Alert = (props) => {
  return (
    props.Alert && <div class="alert alert-secondary alert-dismissible fade show" role="alert">
    <strong>{props.alert.type}:</strong>{props.alert.message}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  )
}

export default Alert