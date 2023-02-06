import React from 'react'

const Helmet = ({children,title}) => {
  document.title=`Yolo - ${title}`
  return (
    <div>{children}</div> 
  )
}

export default Helmet