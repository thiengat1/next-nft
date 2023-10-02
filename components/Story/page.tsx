'use client';
import Animation from '../Animation/page';
import * as React from 'react';

export interface IStoryProps {}

export default function Story(props: IStoryProps) {
  return (
    <Animation>
      <div className='flex mt-[150px]'>
        <img src='/assets/images/story.png' alt='story' />
        <div className='flex flex-col gap-6'>
          <h1 className=' text-5xl'>Story</h1>
          <p className='text-[24px]'>
            At a very high level, most NFTs are part of the Ethereum blockchain,
            though other blockchains have implemented their own version of NFTs
          </p>
          <p className='text-[24px]'>
            At a very high level, most NFTs are part of the Ethereum blockchain,
            though other blockchains have implemented their own version of NFTs
          </p>
          <div>
            <button className='lewis-button w-[250px] bg-pinkColor'>
              More
            </button>
          </div>
        </div>
      </div>
    </Animation>
  );
}
