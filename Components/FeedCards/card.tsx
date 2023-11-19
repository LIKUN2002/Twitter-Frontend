import { Federant } from 'next/font/google';
import React from 'react';
import Image from 'next/image'
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from 'react-icons/fa6';
import { LuHeart } from "react-icons/lu";
import { BsBookmark } from "react-icons/bs";
import { LuUpload } from "react-icons/lu";

const FeedCard: React.FC = () => {

    return (
        <div className='border border-r-0 border-l-0 border-b-0  border-gray-900 hover:bg-gray-950 p-3'>
        <div className='grid grid-cols-12 gap-3'>
        <div className='col-span-1'>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdPUrvq_PqcJ6xThm45NFBRnGYPElU28gAw&usqp=CAU"
             alt="user-image" 
             height={50}
             width={50}/>

        </div>
        <div className='col-span-11  text-base'>
            <h5>Santosh Nayak</h5>
            <p>Mumbai Police say,An unidentified person posted a threat message to Mumbai Police on X (formerly Twitter) that a nefarious incident would be executed during the #INDvsNZ at Wankhede Stadium today. Strict vigilance is being done in the area around the stadium and nearby areas. The person had tagged Mumbai Police on his post and shown gun, hand grenades & bullets in a photo.
            </p>
            <div className='text-xl flex justify-between item-center mt-5 p-2 w-[84%]'>
                <div>
                <BiMessageRounded />
                </div>
                <div>
                <FaRetweet />
                </div>
                <div>
                <LuHeart />
                </div>
                <div>
                <BsBookmark />
                </div>
                <div>
                <LuUpload />
                </div>
            </div>
        </div>
        </div>
        </div>
    )

}
export default FeedCard;