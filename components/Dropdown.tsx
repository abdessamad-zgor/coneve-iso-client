import React from 'react'

const Dropdown = (props:PropTypes) => {
/** 
 * @ A re-useable component for hidden widgets and tags
*/
  return (
    <div className={`rounded absolute w-[30vw] right-0  z-10 bg-white flip-me border border-stone-400 ${props.active?"":"hidden"} pb-4  bottom-0 origin-bottom-right `} >
      <div className="flex flex-col flip-me">
      {props.children}
      </div>
    </div>
  )
}

type PropTypes = {
  children: React.ReactNode,
  active: boolean,
}

export default Dropdown