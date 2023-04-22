import React from "react";
import { NavItems } from "./NavItems";

const Navbar = () => {
    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl'>VIKESPLAYLIST</h1>
            <ul>
                {NavItems.map((item, index) => {
                    return(
                      <li key={index} className='inline-block content-center'>
                        <a className={'block text-xl text-[#F6F9FF] p-4 py-[1.5rem] px-[3.5rem] mr-8 bg-[#4B5584] text-[37px] rounded-[10px] hover:bg-gray-400 shadow-md font-header'} href={item.url} target='_blank'>
                          {item.title}
                        </a>
                      </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Navbar