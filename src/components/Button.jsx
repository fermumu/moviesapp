import React from 'react'

export default function Button({ children, handleClick }) {
  return (
    <>
        <button className="btn btn-light btn-lg border" onClick={() => handleClick()}>{children}</button>
    </>
  )
}
