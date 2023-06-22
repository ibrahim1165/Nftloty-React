import React from 'react'
import ball from '../../images/balls-group.png'
const Header = () => {
  return (
    <div style={{ 
        backgroundImage: 
 "url('https://nftlotty1.vercel.app/_next/static/media/frm-left.398841fa.png')",
 height: "100vh",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
     }} className='bg-black'>
        <div className='container lg:flex items-center justify-between lg:mx-auto'>

        <div>
            <h2 className='text-[#0adab9] text-2xl leading-8'>Welcome to NFT Lottery</h2>
            <h1 className='text-7xl leading-tight text-white font-bold'>Play NFTLOTTY <br/> to Win NFT <br /> Prizes</h1>

            <p className='text-[#0adab9] text-2xl leading-8 '>Honesty and transparency you’ve never seen before!</p>
            <button className='btn hover:color-[#0adab9] bg-[#0adab9] text-black leading-10 mt-2'>Join Our Discrod</button>
        </div>
        <div style={{ 
        backgroundImage: 
 "url('https://nftlotty1.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fframe.1bd1ffc8.png&w=1080&q=75')",
 height: "100vh",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
     }}>
        <img className="lg:mx-auto justify-center items-center w-4/5 lg:mt-28 md:w-auto" src={ball} alt="" />


        </div>
        </div>
        
        
        
        
           </div>
  )
}

export default Header