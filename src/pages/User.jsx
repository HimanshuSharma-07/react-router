import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()

    return (
        <div className='bg-gray-600 text-white flex justify-center p-5 text-3xl items-center'>
            User : {userid}
        </div>
    )
}

export default User