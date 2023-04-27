import React from "react";
import { Link } from "react-router-dom";
import { MusicPageItems } from "./MusicPageItems";

const MusicPage = () => {
    return(
        <>
            <div className='flex justify-between items-center max-w-[73vw] mx-auto h-[80vh] mt-11'>
                <div className="w-[392px] h-[651px] bg-[#E6E7FD] mb-[114px] rounded-lg flex justify-center items-start shadow-xl">
                    <ul>
                    {MusicPageItems.map((item, index) =>{
                        return(
                            <li key={index} className="content-center">
                                <Link to={item.url} className="block text-[30px] text-[#010103] p-4 py-[1.5rem] px-[6.5rem] mt-8 bg-[#d9d9d9] rounded-[10px] hover:bg-[#00C2D3] shadow-md font-header">
                                {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    </ul>
                </div>
                <div className='w-[1028px] h-[765px] bg-black'>
                </div>
            </div>
        </>
    );
}

export default MusicPage