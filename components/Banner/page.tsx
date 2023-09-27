'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import Animation from '../Animation/page';

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
  return (
    <Animation>
      <div className='h-[624px] mt-[229px] flex justify-between items-center '>
        <div className='flex flex-col gap-12'>
          <h1 className=' text-[100px]'>Collect and Sell NFT.</h1>
          <p className='text-2xl'>
            Explore on the world’s best largest NFT marketplace
          </p>
          <button className='lewis-button w-[250px] bg-pinkColor'>
            Explore
          </button>
          <div className='flex gap-6'>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-3xl'>26K+</p>
              <p className=''>Artwork</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-3xl'>18K+</p>
              <p className=''>Aucation</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-3xl'>8K+</p>
              <p className=''>Artist</p>
            </div>
          </div>
        </div>
        <div className='h-full'>
          <img
            src='/assets/images/banner.png'
            alt='banner'
            className='h-full'
          />
        </div>
      </div>
    </Animation>
  );
}
