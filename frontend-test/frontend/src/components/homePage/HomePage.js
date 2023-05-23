import React from "react";
import Playlist from '../../img/PlaylistFR.png'
import { Link } from "react-router-dom";
const HomePage = () => {
    return(
    <div className='flex justify-between items-center max-w-[85vw] mx-auto h-[80vh] mt-11'>
        <img src={Playlist} alt='logo' className='h-full'/>
        <div className='my-0 ml-auto h-fit'>
            <h1 className='text-[69px] font-bold font-body leading-[68px]'>Welcome!</h1>
            <p className='text-[35px] font-body w-[850px] my-4 leading-[48px] py-auto'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
            </p>
            <ul>
                <li className='inline-block content-center'>
                <Link className='block text-xxl text-[#F6F9FF] p-1 py-[1rem] px-[3.8rem] bg-[#00C2D3] text-[35px] font-normal font-header rounded-[20px] hover:bg-[#4B5584] shadow-md'
                    to = '/musicpage'
                >
                    Login!
                </Link>
                </li>
            </ul>
        </div>
    </div>  
    );
}

// So <Link /> is really similar to the <a></a>

export default HomePage