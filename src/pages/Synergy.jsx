import React from 'react'
import { Navbar } from './Home';
import advertisement from '../assets/advertisement.jpg';
// import a from './../assets/'

const Synergy = () => {
    const synergy = [
        {
            location : "Andheri",
            price : "20,000",
            expireDate : "20th March 2024",
            totalBillboard:'20',
            // src: advertisement,
            src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9143799915214!2d72.84426040253133!3d19.118021417692315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9cbc9db060f%3A0x94ef01ff54b72a2f!2sAndheri%20Metro%20Station!5e1!3m2!1sen!2sin!4v1708800893753!5m2!1sen!2sin",
            views:35
        },
        {
            location : "Borivali",
            price : "20,000",
            expireDate : "20th March 2024",
            totalBillboard:'20',
            // src: advertisement,
            src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4512.10906278413!2d72.87669070600435!3d19.208955726785003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7005352883d%3A0x1a6500a1d47da2e1!2sThakur%20Village%2C%20Kandivali%20East%2C%20Mumbai!5e1!3m2!1sen!2sin!4v1708802125537!5m2!1sen!2sin",
            views:35
        },
        {
            location : "Thane",
            price : "20,000",
            expireDate : "20th March 2024",
            totalBillboard:'20',
            // src: advertisement,
            src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11826.435849560792!2d72.8964467517914!3d19.065587256458027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97e2a0a873b%3A0xa6a3ce18294254a5!2sGodrej%20Raj%20Kapoor%20Bungalow%2C%20Chembur!5e1!3m2!1sen!2sin!4v1708802214047!5m2!1sen!2sin",
            views:35
        },
        {
            location : "Juhu",
            price : "20,000",
            expireDate : "20th March 2024",
            totalBillboard:'20',
            // src: advertisement,
            src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11826.435849560792!2d72.8964467517914!3d19.065587256458027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97e2a0a873b%3A0xa6a3ce18294254a5!2sGodrej%20Raj%20Kapoor%20Bungalow%2C%20Chembur!5e1!3m2!1sen!2sin!4v1708802214047!5m2!1sen!2sin",
            views:35
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            totalBillboard:'20',
            // src: advertisement,
            src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11826.435849560792!2d72.8964467517914!3d19.065587256458027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c617172f55ab%3A0x31d2e47a203792c4!2sGrand%20Banquet%20Hall!5e1!3m2!1sen!2sin!4v1708802284571!5m2!1sen!2sin",
            views:35
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            totalBillboard:'20',
            src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11827.87441582283!2d72.89382721271114!3d19.045411238381792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ab845d1cc1%3A0x68d762397890881d!2sFertilizer%20Township!5e1!3m2!1sen!2sin!4v1708802324246!5m2!1sen!2sin",
            views:35
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            totalBillboard:'20',
            src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11827.87441582283!2d72.89382721271114!3d19.045411238381792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c608f591996b%3A0x69dbb7e2f00ee03c!2sTata%20Institute%20of%20Social%20Sciences!5e1!3m2!1sen!2sin!4v1708802362487!5m2!1sen!2sin",
            views:35
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            totalBillboard:'20',
            src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55195.87520252874!2d72.83393894116654!3d19.028436794683696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8c6043c51b%3A0x469288721a1d52aa!2sPhoenix%20Palladium!5e1!3m2!1sen!2sin!4v1708802400148!5m2!1sen!2sin",
            views:35
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            totalBillboard:'20',
            src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55195.87520252874!2d72.83393894116654!3d19.028436794683696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfae30bc0adb%3A0xbcb6754c0dda216b!2sLal%20Bahadur%20Shastri%20College%20of%20Advanced%20Maritime%20Studies%20and%20Research!5e1!3m2!1sen!2sin!4v1708802438718!5m2!1sen!2sin",
            views:35
        },
        {
            location : "Kandivali",
            price : "20,000",
            expireDate : "20th March 2024",
            totalBillboard:'20',
            src : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9143799915214!2d72.84426040253133!3d19.118021417692315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9cbc9db060f%3A0x94ef01ff54b72a2f!2sAndheri%20Metro%20Station!5e1!3m2!1sen!2sin!4v1708800893753!5m2!1sen!2sin",
            views:35
        },
    ]
  return (
    <div>
        <Navbar/>
        <div className='flex gap-10 pt-10 flex-wrap px-5 bg-slate-200 justify-around'>
            {
                synergy.map((s,index)=>(
                    <a href={'QR Code Generator _ Create Free Dynamic QR Codes.html'} target='_blank' >
                        <div key={index} className='shadow-xl bg-slate-400 rounded-t-lg rounded-b-sm hover:scale-110 duration-500 cursor-pointer'>
                            {/* <p> {s.src} </p> */}
                            <iframe src={s.src} />
                            {/* <img src={s.src} className='border- border-r-2 rounded-t-lg w-full'/> */}
                            <p className='px-2 py-1'> Location :  {s.location} </p>
                            <p className='px-2 py-1'> Total Billboard : {s.totalBillboard} </p>
                            <p className='px-2 py-1'> Total Views : {s.views} </p>
                        </div>
                    </a>
                ))
            }
        </div>
    </div>
  )
}

export default Synergy;