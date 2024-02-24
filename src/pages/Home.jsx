import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ()=>{
    return (
        <div className='bg-[#010440] text-white flex justify-around py-3'>
        <img  />
        <p className='font-medium cursor-pointer text-xl'> Log in </p>
      </div>
    );
}

const Home = () => {
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
        <div className='flex flex-col gap-5'>
        <p className='text-center pt-10'> Companies Details  </p>
        <div className='flex flex-col gap-5'>
          {
            details.map((d)=>{
              return <div className='flex justify-around text-xl' key={d.id} >
                <Link to={'/synergy'} className='cursor-pointer'> {d.name} </Link>
                <Link to={'/synergy'} className='cursor-pointer'> {d.totalInteraction} </Link>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home