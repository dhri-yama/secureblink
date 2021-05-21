import React from 'react'
import {useState } from 'react'
import Deployment from './Deployment'
import Design from './Design'
import Marketing from './Marketing'

const Coretech = () => {
    const [currindex, setCurrindex] = useState(1)   
    return (
        <div style={{"backgroundColor":"#f4f9ff"}} className=" pb-20" >
            <div className="lg:w-4/5 m-auto flex flex-col items-center justify-center">
                <h3 className="text-3xl md:text-4xl text-center poppins font-semibold mt-2">Core Technologies</h3>
                <p className="p-1 md:w-3/5 m-auto text-center mt-6">
                    Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                </p>
                <div style={{"boxShadow": "0px 40px 60px #0E77FF26"}}
                     className="flex gap-2 md:gap-8 p-3 px-8 md:px-12 rounded-full bg-white mt-10">
                    <h6 onClick={()=>setCurrindex(0)} className={`cursor-pointer text-sm sm:text-base poppins ${currindex===0? 'primary-color': ''}`}>Design</h6>
                    <h6>|</h6>
                    <h6 onClick={()=>setCurrindex(1)} className={`cursor-pointer text-sm sm:text-base poppins ${currindex===1? 'primary-color': ''}`}>Deployment</h6>
                    <h6>|</h6>
                    <h6 onClick={()=>setCurrindex(2)} className={`cursor-pointer text-sm sm:text-base poppins ${currindex===2? 'primary-color': ''}`}>Marketing</h6>
                </div>
                {(() => {
                    switch (currindex) {
                        case 0:
                            return <Design/>
                            break;
                        case 1:
                            return <Deployment/>
                            break;
                        case 2:
                            return <Marketing/>
                            break;
                        default:
                            break;
                    }
                })()}   
            </div>
        </div>
        
    )
}

export default Coretech
