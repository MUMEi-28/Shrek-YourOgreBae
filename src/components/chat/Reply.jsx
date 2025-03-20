import React from 'react'

export default function Reply(props)
{
    return (
        < div className='flex justify-start' >
            <div className='bg-slate-300 text-gray-900 px-4 py-2 rounded-lg max-w-xs'>
                <p>{props.text}</p>
            </div>
        </div >
    )
}
