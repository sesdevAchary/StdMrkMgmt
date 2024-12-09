import React from 'react'
import PropTypes from 'prop-types';


// to extract values from the props object to be passed into the fun.component //
const Notification = ({message = { type: 'info', text: '' },onClose})=>{  
 const notificationClass = `Notification ${message.type}`;


 return (
    <div className={notificationClass}>
        {message.text || 'No message available'}
        <button onClick ={onClose} className="btn btn-cancel">close</button>
        </div>

 );
}
;


Notification.propTypes = {
    message: PropTypes.shape({
      type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
      text: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
  }; 
export default Notification;
