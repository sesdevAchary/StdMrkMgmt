import React from 'react'

const DeleteStudent = ({ id, onDelete }) => {
    const handleDelete = () => {
        if (window.confirm('Are you sure to delete this Student information?')){
