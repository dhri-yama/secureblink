import React from 'react'

const Design = () => {
    function getShuffledArr (arr){
        return [...arr].map( (_, i, arrCopy) => {
            var rand = i + ( Math.floor( Math.random() * (arrCopy.length - i) ) );
            [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
            return arrCopy[i]
        })
    }
    const unshuffled =Array.from(Array(13).keys())
    let arr = getShuffledArr(unshuffled)
    return (
        <div className="flex flex-wrap gap-6 w-11/12 lg:w-3/5 justify-center my-20">
            {
                arr.map((a,index)=>{
                    return  <img className="h-20 w-20 rounded-lg p-4" key={index} style={{"border": "1px solid #0E77FF"}}
                    src={process.env.PUBLIC_URL + `/assets/coretech/${a+1}.svg`} alt="" />
                })
            }
        </div>
    )
}

export default Design
