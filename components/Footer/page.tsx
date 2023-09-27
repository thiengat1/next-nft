'use client';
import Animation from '../Animation/page';
import * as React from 'react';
import Menu from './Menu';
import menuData from './menuData.json';

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <Animation>
      <div className=' bg-footerBg bg-cover bg-center flex flex-col gap-12 mt-[140px] justify-center text-center px-8'>
        <div className='text-[100px]'>NFT Marketplace </div>
        <div className='flex w-full'>
          <div className=' basis-1/3 cursor-pointer hover:opacity-75'>
            <img src='/assets/images/logo.svg' alt='logo' />
          </div>
          <div className='flex justify-between basis-2/3'>
            <Menu data={menuData.menu1} />
            <Menu data={menuData.menu2} />
            <Menu data={menuData.menu3} />
          </div>
        </div>
        <div className=' text-right mb-[130px] mt-[70px]'>
          <div className='text-[30px]'>Follow Us</div>
          <div className='flex justify-end gap-2 mt-[28px]'>
            <div className=' w-[50px] h-[50px] bg-blue-500 rounded-[50%] cursor-pointer'></div>
            <div className=' w-[50px] h-[50px] bg-black rounded-[50%] cursor-pointer'></div>
            <div className=' w-[50px] h-[50px] bg-black rounded-[50%] cursor-pointer'></div>
          </div>
        </div>
      </div>
    </Animation>
  );
}
