import React from 'react';
import {Text, View} from 'react-native';

import  Navbar  from './components/navbar/Navbar.js'
import HomePage from './components/homePage/HomePage.js';
import MusicPage from './components/musicPage/MusicPage.js';
import NotFound from './components/NotFound.js';
import { Routes, Route, Link } from 'react-router-dom';
import TopSongs from './pages/TopSongs';
import TopGenre from './pages/TopGenre';
function App() {
  return (
    // Background
    <div className='w-full h-screen bg-gradient-to-b from-[#E6E7FD]  via-[#E6E7FD7D] to-[#E6E7FD] pt-11'>
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
      
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/musicpage' element={<MusicPage />} />
        <Route path='/TopSongs' element={<TopSongs />}/>
        <Route path='/TopGenre' element={<TopGenre />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
