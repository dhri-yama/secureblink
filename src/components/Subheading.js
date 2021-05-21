import React from 'react'

const Subheading = ({heading}) => {
    return (
        <div className="flex ">
            <img className="w-8 h-8" 
                src={process.env.PUBLIC_URL + '/assets/subheadtri.svg'} alt="" />
            <h2 className="text-2xl ml-2 uppercase font-semibold primary-color">{heading}</h2>
        </div>
    )
}

export default Subheading
