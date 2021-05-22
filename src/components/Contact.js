import React from 'react'
import {useState, useEffect} from 'react'


const Contact = () => {
    const [email, setEmail] = useState("")
    const [checkemail, setCheckemail] = useState(1)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [checkphone, setCheckphone] = useState(1)
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [policy, setPolicy] = useState(0)
    const num=[0,1,2,3,4,5,6,7,8,9]
    const handleChange = (e) =>{
        e.preventDefault();
        console.log(email)
        console.log(name)
        console.log(phone)
        console.log(subject)
        console.log(message)
        console.log(policy)
    }

    useEffect(() => {
        if (email.length>0) {
            const t=[...email]
            let temp=t.filter(ch => ch==='@')
            if (temp.length!==1) {
                setCheckemail(0)
            }else{
                setCheckemail(1)
            } 
            let ntemp=t.filter(ch => ch==='.')
            if (ntemp.length>0) {
                setCheckemail(1)
            }else{
                setCheckemail(0)
            } 
        }
        
    }, [email])
    useEffect(() => {
        if (phone.length>0) {
            if (phone.length<10) {
                setCheckphone(0)
            }else{
                let flag=1
                let parr=[...phone]
                for (let index = 0; index < parr.length; index++) {
                    const element = parr[index];
                    if (!(element in num)) {
                        setCheckphone(0)
                        flag=0
                        break
                    }
                }
                if (flag) {
                    setCheckphone(1) 
                }
            }
        }
        
    }, [phone])

    return (
        <div id="contact" className="flex flex-col lg:flex-row w-screen max-w-full absolute mt-24 ">
            <img className="w-4/5 m-auto lg:w-1/2" 
                src={process.env.PUBLIC_URL + '/assets/contact.svg'} alt="" />
            <div style={{"boxShadow" :" 0px 40px 60px #0E77FF26"}}
                 className="w-11/12 md:w-4/5 m-auto lg:w-2/5 px-6 md:px-16 pt-16 pb-8 bg-white">
                
                <h3 className="text-3xl poppins font-semibold mb-6">Send Us Message</h3>
                <form onSubmit={handleChange} className="flex flex-col gap-12">
                    <input type="text" required onChange={(e)=>setEmail(e.target.value)}
                        className="p-1 border-b-2 focus:outline-none focus:border-blue-300" placeholder="Your Email*" />
                    <p className={"text-red-600 italic font-serif -mt-10 -mb-2 " + (checkemail===1?'hidden':'text-sm') }>* Enter a valid Email</p>
                    <input type="text" required onChange={(e)=>setName(e.target.value)}
                        className="p-1 border-b-2 focus:outline-none focus:border-blue-300" placeholder="Your Name*" />
                    <input type="text" required onChange={(e)=>setPhone(e.target.value)}
                        className="p-1 border-b-2 focus:outline-none focus:border-blue-300" placeholder="Phone Number*" />
                    <p className={"text-red-600 italic font-serif -mt-10 -mb-2 " + (checkphone===1?'hidden':'text-sm') }>* Enter a valid Phone Number</p>
                    <input type="text" onChange={(e)=>setSubject(e.target.value)}
                        className="p-1 border-b-2 focus:outline-none focus:border-blue-300" placeholder="Subject" />
                    <textarea type="text" required onChange={(e)=>setMessage(e.target.value)}
                        className="p-1 border-b-2 focus:outline-none focus:border-blue-300" placeholder="Your Message" />
                    <div className="flex">
                        <input className="h-8 w-8 mr-4" type="checkbox" id="agree" name="agree" value="1" onChange={()=>setPolicy(!policy)} />
                        <label htmlFor="agree" className="text-sm"> By sending this message, you confirm that you have read and agreed to our privacy-policy.</label>
                    </div>
                    <button type="submit" disabled={checkphone && checkemail && policy?false:true}
                        className={"bg-primary text-white  mt-4 flex gap-2 w-40 p-4 focus:outline-none justify-center rounded-full " + (checkphone && checkemail && policy?'cursor-pointer':'cursor-not-allowed')} >Get Started</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
