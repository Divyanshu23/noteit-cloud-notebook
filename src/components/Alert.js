import React from 'react'

const Alert = (props) => {
    return (
        <div className="invisible bg-red-100 border border-red-400 text-red-700 px-4 rounded flex items-center h-12 max-h-12" id="alert" role="alert">
            <strong className="font-bold mx-2">{props.title}</strong>
            <span className="block sm:inline mx-2">Try Again</span>
        </div>
    )
}

export default Alert