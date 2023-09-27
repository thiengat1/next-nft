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
          <h1 className=' text-5xl'>{`NFTs Story`}</h1>
          <p className='text-[24px]'>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          </p>
          <p className='text-[24px]'>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
          </p>
          <div>
            <button className='lewis-button w-[250px] bg-pinkColor'>
              {` Learn more`}
            </button>
          </div>
        </div>
      </div>
    </Animation>
  );
}
