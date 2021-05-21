import React from 'react'
import {useState} from 'react'
import Navbar from './Navbar'
import Dropdown from './Dropdown'
import Herotriangles from './Herotriangles'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="bg-primary w-screen max-w-full">
            <Herotriangles/>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <div className="flex flex-col gap-8 lg:w-2/5 mt-32 m-16 lg:ml-44 absolute z-30">
                <h1 className="poppins text-4xl md:text-5xl text-white font-semibold">
                    Web Design<br/> 
                    Web Development<br/> 
                    by SB
                </h1>
                <p className="poppins text-white pr-12 sm:w-3/4 md:w-1/2 lg:w-full ">
                Our products are fully custom-made, built with the latest technologies and cloud-architectures.
                </p>
                <div style={{"border": "2px solid #0E77FF"}} 
                    className="bg-white cursor-pointer mt-4 flex gap-2 w-48 p-4 px-8 justify-center rounded-full">
                    Get Started
                    <div className="flex mt-1 cursor-pointer justify-center items-center ml-1">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="6.976" height="12.237" viewBox="0 0 6.976 12.237"><g transform="translate(0 12.237) rotate(-90)"><path className="a" d="M6.119,6.976a.854.854,0,0,1-.606-.251L.251,1.463A.857.857,0,0,1,1.463.251L6.119,4.907,10.774.251a.857.857,0,1,1,1.212,1.212L6.724,6.725A.854.854,0,0,1,6.119,6.976Z" transform="translate(0 0)"/></g></svg>
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="6.976" height="12.237" viewBox="0 0 6.976 12.237"><g transform="translate(0 12.237) rotate(-90)"><path className="a" d="M6.119,6.976a.854.854,0,0,1-.606-.251L.251,1.463A.857.857,0,0,1,1.463.251L6.119,4.907,10.774.251a.857.857,0,1,1,1.212,1.212L6.724,6.725A.854.854,0,0,1,6.119,6.976Z" transform="translate(0 0)"/></g></svg>
                    </div>
                </div>
            </div>

            <img className=" mt-40 relative -bottom-1 object-cover h-screen md:w-screen max-w-full" 
                src={process.env.PUBLIC_URL + '/assets/hero.svg'} alt="" />
        </div>
    )
}

export default Hero
