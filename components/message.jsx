import React from 'react';

function Message(props) {
  
  return (
    <div className={props.type == 'error'  ? 'message-error' : 'message-succesfull'}>
      <p className="message-text">{props.msg}</p>
    </div>
  );
}

export default Message;
