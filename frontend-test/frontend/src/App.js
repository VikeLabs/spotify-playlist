import React from 'react';
import {Text, View} from 'react-native';
import { NavItems } from './components/navbar/NavItems.tsx';
import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-native';
function App() {
  return (
    // Background
    <div className='w-full h-screen bg-gradient-to-b from-[#E6E7FD]  via-[#E6E7FD7D] to-[#E6E7FD] flex flex-col'>
     <div className='flex flex-row font-medium w-full h-1/4'>

        <div className='h-full grow-[2] block text-center ml-[-10rem]'>
          <h1 className='font-bold text-[67px] font-header'>VIKESPLAYLISTS</h1>
        </div>

        <div className='h-full grow-[3] flex justify-end items-center'>
          <div className='flex'>
            <ul>
                {NavItems.map((item, index) => {
                    return(
                      <li key={index} className='inline-block content-center'>
                        <a className='block text-xl text-[#F6F9FF] p-1 py-[1.5rem] px-[3.5rem] mr-8 bg-[#4B5584] text-[35px] rounded-[10px] hover:bg-gray-400 shadow-md font-header' href={item.url}>
                          {item.title}
                        </a>
                      </li>
                    )
                })}
            </ul>
          </div>
        </div>
      </div>
      

      <div className='flex flex-row justify-stretch w-full h-full'>
        <div className='grow-[2]'>
          <h1>Insert image here</h1>
        </div>
        <div className='grow-[3]'>
            <div className='my-0 mx-auto'>
              <h1 className='text-5xl font-bold font-header'>Welcome!</h1>
              <p className='text-lg font-body'>
                Welcome to my domain...
              </p>
              <ul>
                <li className='inline-block content-center'>
                  <a className='block text-xl text-[#F6F9FF] p-1 py-[1.6rem] px-[3rem] bg-[#00C2D3] text-[41px] font-normal font-button rounded-[10px] hover:bg-[#4B5584] shadow-md font-header'>
                    Login!
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
