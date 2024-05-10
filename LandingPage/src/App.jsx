import { useState } from 'react'

import './App.css'
import myphoto from './assets/Images/p1.webp'
import myPhoto2 from './assets/Images/P2.webp'
import MyPhoto3 from './assets/Images/P3.webp'
import { Link, useNavigate } from 'react-router-dom'





function App() {

  

  return (

    
    <div >
       <header className=" text-xl  ">
          <div className=' flex justify-between   text-3xl '> 
            <div > 
            <a className='ml-4 md:ml-8 lg:ml-12' href='#'>Beauty_with_A </a>
            </div>
       <div className='flex gap-14 mr-14'>
        <a href='#'>Home</a>
        <a href='#'>about</a>
        <a href='#'>contact</a>
        </div> 
      </div>
      <div className='border-b-2 rounded-full border-gray-400 w-25 mx-auto mb-6'></div>  
    </header>
                       
    
    <div className='container mt-20 flex text-black '>
      <div className='flex gap-24'>
      
              <div className='Card1 max-w-sm rounded shadow-lg overflow-hidden bg-slate-50'>
              
                <img className='w-full object-cover' src={myphoto} alt="Description of the image" />
                <div className='tittle text-xl'>
                  <h2> Glitterati Face Pallete </h2> 
                  <span>Price: $130</span>
                </div> 
               
                 
              </div>
             
              
              
          
              <div className='Card1 max-w-sm rounded shadow-lg overflow-hidden  bg-slate-50'>
                <img className='w-full object-cover' src={ myPhoto2} alt="Description of the image" />
                <div className='tittle text-xl'>
                  <h2> Glitterati Face Pallete </h2> 
                  <span>Price: $130</span>
                </div>   
              </div>


              <div className='Card1 max-w-sm rounded shadow-lg overflow-hidden  bg-slate-50'>
                <img className='w-full object-cover' src={MyPhoto3} alt="Description of the image" />
                <div className='tittle text-xl'>
                  <h2> Glitterati Face Pallete </h2> 
                  <span>Price: $130</span>
                </div>   
              </div>
        </div>    
      </div>
                  
            
      <div className='container mt-20 flex text-black '>
      <div className='flex gap-24'>
      
              <div className='Card1 max-w-sm rounded shadow-lg overflow-hidden bg-slate-50'>
              
                <img className='w-full object-cover' src={myphoto} alt="Description of the image" />
                <div className='tittle text-xl'>
                  <h2> Glitterati Face Pallete </h2> 
                  <span>Price: $130</span>
                </div> 
               
                 
              </div>
             
              
              

              <div className='Card1 max-w-sm rounded shadow-lg overflow-hidden  bg-slate-50'>
                <img className='w-full object-cover' src={ myPhoto2} alt="Description of the image" />
                <div className='tittle text-xl'>
                  <h2> Glitterati Face Pallete </h2> 
                  <span>Price: $130</span>
                </div>   
              </div>


              <div className='Card1 max-w-sm rounded shadow-lg overflow-hidden  bg-slate-50'>
                <img className='w-full object-cover' src={MyPhoto3} alt="Description of the image" />
                <div className='tittle text-xl'>
                  <h2> Glitterati Face Pallete </h2> 
                  <span>Price: $130</span>
                </div>   
              </div>
        </div>    
      </div>

      
    
    </div>
    
    
  )
}

export default App
