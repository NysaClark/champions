import React from 'react'

const Loading = ({loading}) => {
  // TODO Loading animation
  return (
    <div className={loading ? "loading" : "loading closed"}>Loading</div>
  )
}

export default Loading