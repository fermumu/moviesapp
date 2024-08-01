import React from 'react'

export default function Button({ children, handleClick }) {
  return (
    <>
        <button className="btn btn-light border" onClick={() => handleClick()}>{children}</button>
    </>
  )
}
