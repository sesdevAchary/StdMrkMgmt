import React from 'react'

const DeleteStudent = ({ id, onDelete }) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure to delete this Student information?')){
            onDelete(id)
        }
    }
    return(
        <button className='btn btn-delete' onClick={handleDelete}>
               Delete
               </button>
                   )
                }
                export default DeletePerson