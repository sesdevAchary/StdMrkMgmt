import React from 'react'

// to extract values from the props object to be passed into the fun.component //
const Notification = ({message,onClose})=>{   {/*message contains data about notification like text(the message content ) and type (notification type like success,error) */}
 const notificationClass = `notification ${message.type}`;


 return (
    <div className={notificationClass}>
        {message.text}
        <button onClick ={onClose} className="btn btn-cancel">close</button>
        </div>

 );
}

export default Notification;
