import React from 'react'

const ImageCard = ({address,text,title}) => {
    return (
        <div style={{"boxShadow": "0px 0px 40px #0E77FF26"}}
         className="flex flex-col bg-white">
            <img className="" 
                src={process.env.PUBLIC_URL + `/assets/casestudy/${address}.png`} alt="" />
            <div className="px-6 pb-10">
                <h4  className="text-2xl mt-3 poppins font-semibold">{title}</h4>
                <p className="mt-3">{text}</p>
                <div className="flex mt-2 cursor-pointer">
                    <img className="mt-0.5" 
                        src={process.env.PUBLIC_URL + "/assets/double-arrow.svg"} alt="" />
                    <img className="mt-0.5" 
                        src={process.env.PUBLIC_URL + "/assets/double-arrow.svg"} alt="" /> 
                    <span className="ml-2 primary-color font-semibold cursor-pointer">Read More</span>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
