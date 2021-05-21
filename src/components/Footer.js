import React from 'react'

const Footer = () => {
    return (
        <div id="footer" className="" >
            <img className="w-screen" 
                src={process.env.PUBLIC_URL + '/assets/footer.svg'} alt="" />
            <div className="bg-primary relative pb-20 m-auto pt-8 lg:pt-2">
                <div className="flex flex-col items-center gap-2 lg:flex-row text-white justify-center" >
                    <div className="lg:w-2/5 flex flex-col justify-center ">
                        <p className="font-light poppins text-center lg:text-left text-sm px-8 lg:px-0 lg:w-2/3">
                        Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="flex flex-row justify-center lg:justify-start mt-4 gap-2">
                            <a href="/"><img className="" 
                                src={process.env.PUBLIC_URL + '/assets/fb.svg'} alt="" /></a>
                            <a href="/"><img className="" 
                                src={process.env.PUBLIC_URL + '/assets/twt.svg'} alt="" /></a>
                            <a href="/"><img className="" 
                                src={process.env.PUBLIC_URL + '/assets/ig.svg'} alt="" /></a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 lg:mt-0 w-3/4 text-center lg:w-1/6">
                        <h5 className="text-xl poppins font-semibold">Our Services</h5>
                        <div className="m-auto w-2/12 lg:w-1/2 h-1 rounded-full" style={{"backgroundColor":"#21B3FF"}}></div>
                        <p className="font-light poppins text-sm">Web Development</p>
                        <p className="font-light poppins text-sm">Mobile Development</p>
                        <p className="font-light poppins text-sm">Cloud Technologies</p>
                        <p className="font-light poppins text-sm">UI/UX Desins</p>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 text-center lg:mt-0 lg:w-1/6">
                        <h5 className="text-xl poppins font-semibold">Our Links</h5>
                        <div className=" m-auto w-2/12 lg:w-1/2 h-1 rounded-full" style={{"backgroundColor":"#21B3FF"}}></div>
                        <p className="font-light poppins text-sm">Terms and Condition</p>
                        <p className="font-light poppins text-sm">Privacy Policy</p>
                        <p className="font-light poppins text-sm">Imprint Legal</p>
                    </div>
                    <div className="flex flex-col mt-6 text-center lg:mt-0 gap-4 lg:w-1/6">
                        <h5 className="text-xl poppins font-semibold">Contact Us</h5>
                        <div className=" m-auto w-2/12 lg:w-1/2 h-1 rounded-full" style={{"backgroundColor":"#21B3FF"}}></div>
                        <p className="font-light poppins text-sm">Al. Dummyodl 124/23 floor 123<br/> Banswara Street, 02-577 India.</p>
                        <p className="font-light poppins text-sm">00 1800 245 453</p>
                        <p className="font-light poppins text-sm">hello@inkyy.com</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
