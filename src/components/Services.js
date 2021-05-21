import React from 'react'
import {useState} from 'react'
import ActiveService from './ActiveService'
import Subheading from './Subheading'

const Services = () => {
    const [current, setCurrent] = useState(2)
    const services=["Web Development","Mobile Development","UI/UX Designing","Branding","Cloud Technology"]
    return (
        <div id="services" className="relative" style={{"marginBottom":"600px"}}>
            <div className="flex flex-col md:flex-row h-screen">
                <div className="bg-primary opacity-5 w-3/4">

                </div>
                <div className="w-1/4 bg-primary">
                </div>
            </div>
            <div className="absolute top-32 left-0 right-0 flex flex-col md:flex-row">
                <div className="md:w-1/2 flex flex-col justify-center pl-8 lg:pl-44 lg:pr-20">

                    <Subheading heading={"our services"}/>
                    <h3 className="text-4xl poppins font-semibold mt-2">Transforming your ideas into Reality</h3>

                    <div className="flex flex-row flex-wrap gap-2 mt-8">
                        <span onClick={()=>setCurrent(0)} className={`cursor-pointer ${current===0? 'active-btn': 'btn'}`} >Web Development</span>
                        <span onClick={()=>setCurrent(1)} className={`cursor-pointer ${current===1? 'active-btn': 'btn'}`} >Mobile Development</span>
                        <span onClick={()=>setCurrent(2)} className={`cursor-pointer ${current===2? 'active-btn': 'btn'}`} >UI/UX Designing</span>
                        <span onClick={()=>setCurrent(3)} className={`cursor-pointer ${current===3? 'active-btn': 'btn'}`} >Branding</span>
                        <span onClick={()=>setCurrent(4)} className={`cursor-pointer ${current===4? 'active-btn': 'btn'}`} >Cloud Technology</span>
                    </div>
                </div>
                <div className="md:w-1/2 bg-white pb-16 w-card-shadow">
                    <ActiveService title={services[current]}/>
                </div>
            </div>
        </div>
    )
}

export default Services
