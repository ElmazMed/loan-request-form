import React from 'react'

export default function Alert({isActive, errorMsg, children}) {
  if(isActive) {
    return (
      <div style={{backgroundColor: "white", padding:".8rem", position: "relative"}}>
          <h1 style={{color: errorMsg ? "crimson" : "teal", fontSize: "1.2rem"}}>{errorMsg ? errorMsg : "Form has been submitted"}</h1>
          {children}
      </div>
    )
  } else {
    return <></>
  }
}
