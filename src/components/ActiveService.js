import React from 'react'
import List from './List'

const ActiveService = ({title}) => {
    return (
        <div className="pl-8 lg:pl-16">
            <div className="pt-12 flex flex-row">
                <img className="w-16 h-16 md:w-20 md:h-20" 
                    src={process.env.PUBLIC_URL + '/assets/service.svg'} alt="" />
                <h3 className="poppins px-4 font-semibold text-2xl md:text-4xl transform translate-y-6">{title}</h3>
            </div>
            <p className="mt-6 w-11/12 lg:w-2/3 mb-4">
             Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, 
             is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
            </p>
            <List text={"Lorem ipsum dolor sit amet, conse ctetur adipi scing elit."}/>
            <List text={"Lorem ipsum dolor sit amet,"}/>
            <List text={"Lorem ipsum dolor sit amet, conse ctetur "}/>
            <List text={"Lorem ipsum dolor sit amet, conse "}/>
        </div>
    )
}

export default ActiveService
