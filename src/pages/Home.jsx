import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../context/Context';
import Login from '../component/Login';
import Register from '../component/Register';
import logo from '../assets/ocassoLogo.jpg';
import { IoMdAdd } from "react-icons/io";
import {details} from './../constant/Data';
import { FaArrowRight } from "react-icons/fa6";

export const Navbar = ()=>{
    const { auth , setAuth ,
        user , userData ,
        isLoginAuth , setIsLoginAuth ,logout } = useContext(NewsContext);
    console.log(user);
    // console.log(auth);
    return (
        <div className='bg-[#010440] text-white flex justify-around py-3 items-center'>
        <Link to={'/'}> <img src={logo} width={200} height={100} className='rounded-xl' /> </Link>
        <div> 
          {
            !auth ?
              ( !user ? 
                <div>
                <button onClick={()=>{setAuth(true); setIsLoginAuth(true);}} className='text-xl text-white font-bold hover:bg-opacity-80 bg-slate-700 rounded-lg
                px-3 py-1' > Login </button>
                </div>:
                <div>
                <button onClick={()=>{setAuth(true); setIsLoginAuth(true); logout();}} className='text-xl text-white font-bold hover:bg-opacity-80 bg-slate-700 rounded-lg
                px-3 py-1' > Logout </button>
              </div>
              ) :  
              <div className='flex justify-center items-center'>
                {   
                  isLoginAuth ? 
                  <Login />  : 
                  <Register /> 
                }
              </div>                
          }
        </div>
      </div>
    );
}

const Home = () => {
    const [showForm,setShowForm] = useState(false);
    const [showQR,setShowQR] = useState(false);
    return (
    <div>
      <Navbar/>
      <div className='flex flex-col justify-around px-10 pt-10 h-full bg-[#F2F0F4]'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex gap-5 items-center'>
            <div className={`bg-blue-500 flex justify-center items-center px-2 py-1 rounded-lg ${showForm || showQR ? 'mb-10' : ''}`} >
              <p className='cursor-pointer' onClick={()=>{setShowForm(!showForm); setShowQR(false);}}> Create New Contract </p>
              <IoMdAdd />
            </div>
            <div className={`bg-blue-500 flex justify-center items-center px-2 py-1 rounded-lg ${showForm || showQR ? 'mb-10' : ''}`} >
              <p className='cursor-pointer' onClick={()=>{setShowForm(false); setShowQR(!showQR);}}> </p>
              <a href='https://hovercode.com/ai-qr-code-generator/' target='_blank'> Create AI QR  </a>
              <IoMdAdd />
            </div>
          </div>
          <div>
          {
            showForm ? <div className='bg-gray-700 px-5 py-2 rounded-xl flex flex-col items-center gap-2'>
              <input type='text' placeholder='Contract Name' className='px-1 outline-none border rounded-lg py-1' />
              <input type='text' placeholder='Contract Amount' className='px-1 outline-none border rounded-lg py-1' />
              <input type='text' placeholder='Contract Duration' className='px-1 outline-none border rounded-lg py-1' />
              <button className='bg-blue-700 text-white px-2 py-1 rounded-xl hover:bg-opacity-50'> Submit </button>
            </div> : <></>
          }
          </div>
          <div>
          
          </div>
        </div>
        <div className=''>
          <p className='font-medium'> Current Compaign </p>
          <div className=''>
            <table border="1" cellPadding={'2px'} cellSpacing={'5px'} className=' w-full'>
              <thead>
                <tr className='border-b-2 border-t-2 border-l-2 text-2xl border-r-2 py-2 border-black'>
                  <th className='py-5'>Sr. No.</th>
                  <th> Name </th>
                  <th> Manager </th>
                  <th> Date of Creation </th>
                  <th> Link </th>
                </tr>
              </thead>
              <tbody>
                {
                  details.map((d)=>(
                    <tr key={d.Id} className='gap-5 border-b-2 text-xl text-center border-r-2 border-l-2 border-black'>
                      <td className=' py-4'> {d.Id} </td>
                      <td> {d.Name} </td>
                      <td> {d.Manager} </td>
                      <td align="position"valign="position"> {d.DateOfCreation} </td>
                      <Link to={'/synergy'} className='text-center'> <FaArrowRight /> </Link>
                      {/* <a href='QR Code Generator _ Create Free Dynamic QR Codes.html'> <FaArrowRight/> </a> */}
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home