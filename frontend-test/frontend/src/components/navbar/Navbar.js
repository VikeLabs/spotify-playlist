import React from "react";
import { NavItems } from "./NavItems";

const Navbar = () => {
    return(
      <div className='flex justify-between items-center h-24 max-w-[95vw] mx-auto px-4'>
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
    )
}

export default Navbar