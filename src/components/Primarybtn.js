import React from 'react'

const Primarybtn = ({text}) => {
    return (
        <div style={{"border": "2px solid #0E77FF"}} 
            className="primary-color cursor-pointer mt-4 flex gap-2 w-40 p-3 justify-center pr-4 rounded-full">
            {text}
            <div className="flex mt-1 cursor-pointer ">
                <img className="" 
                    src={process.env.PUBLIC_URL + "/assets/double-arrow.svg"} alt="" />
                <img className="" 
                    src={process.env.PUBLIC_URL + "/assets/double-arrow.svg"} alt="" />
            </div>
        </div>
    )
}

export default Primarybtn
