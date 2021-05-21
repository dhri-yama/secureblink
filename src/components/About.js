import React from 'react'
import Primarybtn from './Primarybtn'
import Subheading from './Subheading'

const About = () => {
    return (
        <div id="about" className="flex flex-col-reverse md:flex-row overflow-hidden w-screen max-w-full">
            <div className="md:w-1/2 object-cover" >
                <img className=" object-cover object-right about-img"
                    src={process.env.PUBLIC_URL + "/assets/about.svg"} alt="" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center px-8 xl:px-24 xl:pr-44 relative">
                <Subheading heading={"about us"}/>
                <h3 className="text-3xl poppins font-semibold mt-2">Great Digital Agency</h3>
                <h6 className="mt-6 poppins font-medium">Our products are fully custom-made, built with the latest technologies and cloud-architectures.</h6>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                     turpis egestas. In convallis porta mauris non aliquam.</p>
                <Primarybtn text={"Get Started"}/>
                <img className="w-96 absolute h-0  sm:h-full transform rotate-90 bottom-36 -right-36"
                    src={process.env.PUBLIC_URL + '/assets/dots-blue.svg'} alt="" />
                <img className="w-96 absolute top-0 -right-16"
                    src={process.env.PUBLIC_URL + '/assets/triangle-aboutus.svg'} alt="" />
            </div>
        </div>
    )
}

export default About
