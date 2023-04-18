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
      <nav className='flex flex-row font-medium w-screen h-[4vh]'>

        {/* VIKESPLAYLISTS HEADER */}
        <div className='h-full grow-[2] block'>
          <h1 className='font-bold m-[0 auto]'>VIKESPLAYLISTS</h1>
        </div>

        {/* Buttons Header */}
        <div className=' grow-[3] flex justify-end content-center'>
          <div className='flex mr-8'>
            <ul>
                {NavItems.map((item, index) => {
                    return(
                      <li key={index} className='inline-block'>
                        <a className='block text-xl p-1 py-2 px-2 mr-8 bg-[#FF5733] text-2xl rounded hover:bg-gray-400 shadow-md' href={item.url}>
                          {item.title}
                        </a>
                      </li>
                    )
                })}
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className='fixed w-full bg-[#c3b8aa] flex justify-end items-center font-bold shadow-md h-[7vh] z-10 '>
          <div className='flex mr-8'>
              <ul>
                {NavItems.map((item, index) => {
                    return(
                      <li key={index}>
                          <a className=' inline-block text-[1rem] px-40 py-10 hover:bg-gray-400 rounded ' href={item.url}>
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
