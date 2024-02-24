import React from 'react'
import { Navbar } from './Home';
import advertisement from '../assets//advertisement.jpg';
// import a from './../assets/'

const Synergy = () => {
    const synergy = [
        {
            location : "Andheri",
            price : "20,000",
            expireDate : "20th March 2024",
            src: advertisement
        },
        {
            location : "Borivali",
            price : "20,000",
            expireDate : "20th March 2024",
            src: advertisement
        },
        {
            location : "Thane",
            price : "20,000",
            expireDate : "20th March 2024",
            src: advertisement
        },
        {
            location : "Juhu",
            price : "20,000",
            expireDate : "20th March 2024",
            src: advertisement
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            src: advertisement
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            src: advertisement
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            src: advertisement
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            src: advertisement
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            src: advertisement
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            src: advertisement
        },
    ]
  return (
    <div>
        <Navbar/>
        <div className='flex gap-10 pt-10 flex-wrap px-5 bg-slate-200'>
            {
                synergy.map((s,index)=>(
                    <div key={index} className='shadow-xl bg-slate-400 rounded-t-lg rounded-b-sm hover:scale-110 duration-500 cursor-pointer'>
                        <img src={s.src} className='border- border-r-2 rounded-t-lg w-full'/>
                        <p className='px-2 py-1'> Location :  {s.location} </p>
                        <p className='px-2 py-1'> Price : {s.price} </p>
                        <p className='px-2 py-1'> Expire Date : {s.expireDate} </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Synergy;