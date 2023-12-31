import Image from 'next/image'
import {CredentialResponse, GoogleLogin} from '@react-oauth/google'
import {FaRegEnvelope, FaXTwitter} from 'react-icons/fa6'
import { GoHomeFill } from "react-icons/go"
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { CiBookmark, CiCircleMore } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiGroupLine } from "react-icons/ri";

import FeedCard from '@/Components/FeedCards/card';



import React, { useCallback } from 'react';
import { error } from 'console';
import toast from 'react-hot-toast';
import { Token } from 'graphql';
import { verifyUserGoogleTokenQuery } from '@/Graphql/Query/verify';
import { graphqlClient } from '@/Client/Api';





interface TwitterSidebarButton{
 title: string;
 icon:React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[]= [
  {
    title: "Home",
    icon:<GoHomeFill />
  },

  {
    title: "Explore",
    icon:<IoSearch />
  },

  {

    title:'Notifications',
    icon:<IoIosNotificationsOutline />
  },

  {
    title: "Messages",
    icon:<FaRegEnvelope />
  },

  {
    title:"Lists",
    icon:<MdOutlineFeaturedPlayList />
  },

  {
    title:"Bookmarks",
    icon:<CiBookmark />
  },

  {
    title:"Communities",
    icon:<RiGroupLine />

  },

  {
    title:"Premium",
    icon: <FaXTwitter  />

  },

  {
    title:"Profile",
    icon:<CgProfile />
  },

  {
    title:"More",
    icon:<CiCircleMore />
  },

]

export default function Home() {
 
  const handleLoginWithGoogle =useCallback( async (cred:CredentialResponse) => {

    const googleToken = cred.credential;

    if(!googleToken) 
    
    return toast.error (`Google token not found`);

    const {verifyGoogleToken} = await graphqlClient.request(
      verifyUserGoogleTokenQuery,
      {token:googleToken}
    );

    toast.success(`Verified Success`);
    console.log(verifyGoogleToken);

    if(verifyGoogleToken)
    window.localStorage.setItem("__Twiter_Token",verifyGoogleToken);

    
  }, [] )

  return (
  <div>
    <div className='grid grid-cols-12 h-screen w-screen px-56 bg-black text-white'>
      <div className=' col-span-3  justify-start pt-1 ml-28'>
        <div className='text-3xl h-fit hover:bg-gray-800 rounded-full p-3  cursor-pointer  transition-all w-fit'>
      <FaXTwitter  />
      </div>
      <div className='  mt-1 text-xl p-3 '>
        <ul>
          {SidebarMenuItems.map(item =>
           <li className='flex justify-start hover:bg-gray-800 items-center gap-4 rounded-full w-fit cursor-pointer px-3 py-2 mt-3'
           key={item.title}>
             <span className='text-3xl'>{item.icon}</span>
              <span>{item.title}</span>
              </li> )}
          </ul>
          <div className='mt-5 px-1 '>
          <button className='text-lg bg-sky-400 px-4 py-3 text-slate-200 font-semibold rounded-full w-full hover:bg-sky-300 transition-all '>Post</button>
          </div>
      </div>
       </div>
      <div className='col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-y-scroll border-slate-800' >
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
        <FeedCard/>
      </div>
      <div className='col-span-3 p-5'>

        <div className='p-5 bg-slate-950 rounded-lg'>
          <h1 className='my-01 text-xl text-center'>New to Twitter?</h1>
        <GoogleLogin onSuccess={handleLoginWithGoogle} />
        </div>
        </div>
    </div>
   </div>
  )
}
