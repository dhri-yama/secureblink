import React from 'react'

const Workflow = () => {
    return (
        <div className="md:w-11/12 xl:w-4/5 m-auto mt-48 mb-20 sm:-mt-96">
            <div className="text-center w-11/12 md:w-1/2 m-auto">
                <h2 className="poppins font-semibold text-4xl">Workflow</h2> 
                <p className=" text-base mt-5">Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. 
                Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row my-40">
                <div className="px-10">
                    <h5 className="primary-color rounded-3xl inline px-5 py-2" style={{"backgroundColor":"#16B2FF17"}}>STEP 1</h5>
                    <h3 className="text-3xl my-4 poppins font-semibold"  style={{"color":"#292929"}}> Send your brief</h3>
                    <div className="w-1/2 h-1" style={{"backgroundColor":"#0E77FF"}}></div>
                    <p className="mt-1 ">
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, 
                        is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.<br/><br/>
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu 
                        msan congue euisque blandit dui Pelle ntesque habitant.
                    </p>
                </div>
                <div className="px-10 w-card-shadow relative top-2 pb-6 my-12 lg:my-0">
                    <h5 className="bg-primary text-white rounded-3xl inline px-5 py-2 relative -top-2" >STEP 2</h5>
                    <h3 className="text-3xl my-3 poppins font-semibold"  style={{"color":"#292929"}}>Wait for delivery</h3>
                    <div className="w-1/2 h-1" style={{"backgroundColor":"#0E77FF"}}></div>
                    <p className="mt-1 ">
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, 
                        is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.<br/><br/>
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu 
                        msan congue euisque blandit dui Pelle ntesque habitant.
                    </p>
                </div>
                <div className="px-10">
                    <h5 className="primary-color rounded-3xl inline px-5 py-2" style={{"backgroundColor":"#16B2FF17"}}>STEP 3</h5>
                    <h3 className="text-3xl my-4 poppins font-semibold"  style={{"color":"#292929"}}>Get your files!</h3>
                    <div className="w-1/2 h-1" style={{"backgroundColor":"#0E77FF"}}></div>
                    <p className="mt-1 ">
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, 
                        is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.<br/><br/>
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu 
                        msan congue euisque blandit dui Pelle ntesque habitant.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Workflow
