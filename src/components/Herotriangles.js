import React from 'react'

const Herotriangles = () => {
    return (
        <div className="absolute z-0 w-screen max-w-full">
            <img className="  right-0 absolute" 
                src={process.env.PUBLIC_URL + '/assets/triangle-hollow.svg'} alt="" />
            
            <img className=" w-60 transform rotate-90 absolute right-0" 
                src={process.env.PUBLIC_URL + '/assets/triangle-hollow.svg'} alt="" />
            
        </div>
    )
}

export default Herotriangles
