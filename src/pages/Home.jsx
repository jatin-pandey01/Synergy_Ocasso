import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../context/Context';
import Login from '../component/Login';
import Register from '../component/Register';
import logo from '../assets/ocassoLogo.jpg'

export const Navbar = ()=>{
    const { auth , setAuth ,
        user , userData ,
        isLoginAuth , setIsLoginAuth ,logout } = useContext(NewsContext);
    console.log(user);
    // console.log(auth);
    return (
        <div className='bg-[#010440] text-white flex justify-around py-3'>
        <img src={logo} width={100} height={100} />
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
    const details = [
        {
          id:1,
          name:'Synergy',
          totalInteraction:'245k',
        },
        {
          id:2,
          name:'DJSCE',
          totalInteraction : '500k'
        },
        {
          id:1,
          name:'Synergy',
          totalInteraction:'245k',
        },
        {
          id:2,
          name:'DJSCE',
          totalInteraction : '500k'
        },
        {
          id:1,
          name:'Synergy',
          totalInteraction:'245k',
        },
        {
          id:2,
          name:'DJSCE',
          totalInteraction : '500k'
        },
        {
          id:1,
          name:'Synergy',
          totalInteraction:'245k',
        },
        {
          id:2,
          name:'DJSCE',
          totalInteraction : '500k'
        }
    ]
    return (
    <div>
      <Navbar/>
      <div className='flex justify-around px-10 pt-10 bg-[#F2F0F4]'>
        <div>
          <p className='cursor-pointer'> Create New Contract </p>
          
        </div>
        <div className='flex flex-col'>
          <p className='font-medium'> Companies Details  </p>
          <div className=''>
            {
              details.map((d)=>{
                return <div className='flex justify-between' key={d.id} >
                  <Link to={'/synergy'} className='cursor-pointer'> {d.name} </Link>
                  <Link to={'/synergy'} className='cursor-pointer'> {d.totalInteraction} </Link>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home