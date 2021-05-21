import React from 'react'

const List = ({text}) => {
    return (
        <div className="flex flex-row mt-1">
            <img className="w-10 h-10" 
                    src={process.env.PUBLIC_URL + '/assets/tick.svg'} alt="" />
            <p className="ml-2 transform translate-y-2">{text}</p>
        </div>
    )
}

export default List
