import React from 'react'

const Dropdown = (props:PropTypes) => {
/** 
 * @ A re-useable component for hidden widgets and tags
*/
  return (
    <div className={`rounded absolute w-[${props?.width?props?.width:100}vw] md:w-[30vw] right-0 z-10 bg-white md:flip-me border border-stone-400 ${props.active?"":"hidden"} md:pb-4 top-[100%] md:bottom-0 md:origin-bottom-right `} >
      <div className="flex flex-col md:flip-me">
      {props.children}
      </div>
    </div>
  )
}

type PropTypes = {
  children: React.ReactNode,
  active: boolean,
  width?: number
}

export default Dropdown