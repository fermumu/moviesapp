import React from 'react'

export default function NavButton({ children, handleClick }) {
  let pageId;
  if (children === 'Popular movies') {
    pageId = 1;
  } else if (children === 'Search by name') {
    pageId = 2;
  } else {
    pageId = 3;
  }
  return (
    <>
        <button className="btn btn-link" onClick={() => handleClick(pageId)}>{children}</button>
    </>
  )
}