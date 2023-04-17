import React from 'react';
import {Text, View} from 'react-native';

import logo from './logo.svg';
import './App.css';
// import { Button } from 'react-native';
function App() {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-purple-500 to-blue-500'>
      {/* <h1 className='text-3xl font-bold underline'>Hello World!!</h1> */}
      <div className='w-full h-24 bg-gradient-to-b from-red-500 to-blue-500'>
        <div className='h-full w-3/6 inline-block my-0 mx-auto'>
          <h1 className='text-5xl font-bold '>VIKESPLAYLISTS</h1>
        </div>
        <div className='inline-block w-3/6 h-full inline-flex flex-column content-evenly'>
          <button><a href='https://www.lttstore.com'>About</a></button>
          <button><a href='https://www.google.ca'>Contact</a></button>
        </div>
      </div>
      

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
              <button type='button'><a href ='https://www.lttstore.com'>Sign In!</a></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
