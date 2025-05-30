import React from 'react'

export default function Message(props)
{
    return (
        <div className='flex justify-end'>
            <div className='bg-blue-500 text-white px-4 py-2 rounded-lg  break-words max-w-[80%]'>
                <p>{props.text}</p>
            </div>
        </div>
    )
}
