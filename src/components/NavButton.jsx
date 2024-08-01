import React from 'react'

export default function NavButton({ children, handleClick }) {
  let pageId;
  if (children === 'Popular movies') {
    pageId = 1;
  } else {
    pageId = 2;
  }
  return (
    <>
        <button className="btn btn-link" onClick={() => handleClick(pageId)}>{children}</button>
    </>
  )
}