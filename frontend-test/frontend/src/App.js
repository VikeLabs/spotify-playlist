import React from 'react';
import {Text, View} from 'react-native';
import { NavItems } from './components/navbar/NavItems.tsx';
import Playlist from './img/PlaylistFR.png'
import './App.css';
// import { Button } from 'react-native';
function App() {
  return (
    // Background
    <div className='w-full h-screen bg-gradient-to-b from-[#E6E7FD]  via-[#E6E7FD7D] to-[#E6E7FD]'>
      	{/* <div className='flex flex-row font-medium w-full h-1/4'>
			<div className='h-full grow-[2] block text-center ml-[-10rem]'>
				<h1 className='font-bold text-[67px] font-header'>VIKESPLAYLISTS</h1>
			</div>
			<div className='h-full grow-[3] flex justify-end items-center'>
			<div className='flex'>
				<ul>
					{NavItems.map((item, index) => {
						return(
						<li key={index} className='inline-block content-center'>
							<a className='block text-xl text-[#F6F9FF] p-1 py-[1.5rem] px-[3.5rem] mr-8 bg-[#4B5584] text-[37px] rounded-[10px] hover:bg-gray-400 shadow-md font-header' href={item.url} target='_blank'>
							{item.title}
							</a>
						</li>
						)
					})}
				</ul>
			</div>
			</div>  
      	</div> */}
      
      	<div className='flex justify-between items-center h-24 max-w-[90vw] mx-auto px-4'>
       		<h1 className='w-full font-bold text-[97px] font-header'>VIKESPLAYLISTS</h1>
			<ul className='hidden md:flex items-end'>
                {NavItems.map((item, index) => {
                    return(
                      <li key={index} className='inline-block content-center'>
                        <a className={'block text-xl text-[#F6F9FF] p-4 py-[1.5rem] px-[3.5rem] mr-8 bg-[#4B5584] rounded-[10px] hover:bg-gray-400 shadow-md font-header'} href={item.url} target='_blank'>
                          {item.title}
                        </a>
                      </li>
                    )
                })}
            </ul>
      	</div>


		<div className='flex justify-between items-center max-w-[80vw] mx-auto h-[80vh] bg-black text-white'>
			<img src={Playlist} alt='logo' className='h-full'/>
            <div className='my-0 mx-auto'>
              <h1 className='text-[60px] font-bold font-body leading-[67px]'>Welcome!</h1>
              <p className='text-lg font-body w-[850px] my-4 leading-[48px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
              </p>
              <ul>
                <li className='inline-block content-center'>
                  <a className='block text-xl text-[#F6F9FF] p-1 py-[1.6rem] px-[1.8rem] bg-[#00C2D3] text-[30px] font-normal font-button rounded-[10px] hover:bg-[#4B5584] shadow-md font-header'
                      href='#'
                  >
                    Login!
                  </a>
                </li>
              </ul>
            </div>
		</div>

		{/* <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
		<h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
		<ul className='hidden md:flex'>
			<li className='p-4'>Home</li>
			<li className='p-4'>Company</li>
			<li className='p-4'>Resources</li>
			<li className='p-4'>About</li>
			<li className='p-4'>Contact</li>
		</ul>
		</div>


      	<div className='flex flex-row flex-wrap w-full h-full'>
        	<div className='flex-1'>
          	<img src={Playlist} alt='logo' className='h-full'/>
        </div>
        <div className='flex-1'>
            <div className='my-0 mx-auto'>
              <h1 className='text-[60px] font-bold font-body leading-[67px]'>Welcome!</h1>
              <p className='text-lg font-body w-[850px] my-4 leading-[48px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
              </p>
              <ul>
                <li className='inline-block content-center'>
                  <a className='block text-xl text-[#F6F9FF] p-1 py-[1.6rem] px-[1.8rem] bg-[#00C2D3] text-[30px] font-normal font-button rounded-[10px] hover:bg-[#4B5584] shadow-md font-header'
                      href='#'
                  >
                    Login!
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
