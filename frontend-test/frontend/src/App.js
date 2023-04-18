import React from 'react';
import {Text, View} from 'react-native';
import { NavItems } from './components/navbar/NavItems.tsx';
import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-native';
function App() {
  return (
    // Background
    <div className='w-full h-screen bg-gradient-to-b from-purple-500 to-blue-500'>
      {/* Navbar header */}
     <nav className='flex flex-row font-medium w-screen h-[12vh]'>


        <div className='h-full grow-[2] block text-center ml-[-10rem]'>
          <h1 className='font-bold text-[67px] '>VIKESPLAYLISTS</h1>
        </div>


        <div className='h-full grow-[3] flex justify-end items-center'>
          <div className='flex'>
            <ul>
                {NavItems.map((item, index) => {
                    return(
                      <li key={index} className='inline-block content-center'>
                        <a className='block text-xl text-[#F6F9FF] p-1 py-[1.5rem] px-[3.5rem] mr-8 bg-[#4B5584] text-[35px] rounded-[10px] hover:bg-gray-400 shadow-md' href={item.url}>
                          {item.title}
                        </a>
                      </li>
                    )
                })}
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className=' w-full flex justify-end items-center font-bold h-[7vh] '>
          <div className='flex mr-8'>
              <ul>
                {NavItems.map((item, index) => {
                    return(
                      <li key={index} className='inline-block'>
                          <a className='block text-xl p-1 py-2 px-2 mr-8 bg-[#4B5584] text-[35px] rounded hover:bg-gray-400 shadow-md' href={item.url}>
                            {item.title}
                          </a>
                      </li>
                    )
                })}
              </ul>
          </div>
      </nav> */}
      

      <div className='w-full'>
        <div className='w-6/12 h-6/12 bg-gradient-to-b from-pink-300 to-blue-500 inline-block'>
          <h1>Insert image here</h1>
        </div>
        <div className='w-6/12 h-6/12 bg-gradient-to-b from-pink-300 to-orange-500 inline-block'>
            <div className='my-0 mx-auto'>
              <h1 className='text-5xl font-bold'>Welcome!</h1>
              <p className='text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
              </p>
              <div><a href ='https://www.lttstore.com'>Sign In!</a></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
