import $ from 'jquery'

function Button(props) {
  return (
    <button id={props.id} onClick={()=>{$()}
        
    }>{props.children}</button>
  )
}

export default Button