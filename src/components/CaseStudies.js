import React from 'react'
import ImageCard from './ImageCard'
import Primarybtn from './Primarybtn'

const CaseStudies = () => {
    return (
        <div id="casestudies" className="m-auto pb-40" style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/plane.svg'})` ,
            "backgroundColor":"#f4f9ff",
            "backgroundRepeat": 'no-repeat',
            "backgroundSize":"100% 100%",
            "backgroundPosition": "center"
          }}>
            <div 
                className="flex flex-col w-11/12 xl:w-4/5 m-auto justify-center items-center">
                <h3 className="text-3xl md:text-4xl text-center poppins font-semibold mt-2">Case Studies</h3>
                <p className="md:w-3/5 m-auto text-center mt-5">
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                </p>

                <div className="flex flex-col md:flex-row gap-4 mt-16 mb-20">
                    <ImageCard address={"1"} title="Isomorphic Web App" text={"Getting involved matters. Crucial causes to the if ever, come from passive action."}/>
                    <ImageCard address={"2"} title="Isomorphic Web App" text={"Getting involved matters. Crucial causes to the if ever, come from passive action."}/>
                    <ImageCard address={"3"} title="Isomorphic Web App" text={"Getting involved matters. Crucial causes to the if ever, come from passive action."}/>
                </div>

                <Primarybtn text="View All"/>           
            </div>
        </div>
        
    )
}

export default CaseStudies
