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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni
            tenetur iusto tempora vero debitis cumque reiciendis ipsam. Eos
            error iste nobis fugiat eveniet, fugit maxime officiis quisquam
            consequuntur quo.
          </p>
          <p className='text-[24px]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            temporibus velit repudiandae veniam minus tempora impedit sed eius
            fugit aliquam maiores cupiditate in cumque nulla enim, ipsa
            excepturi fugiat error.
          </p>
          <div>
            <button className='lewis-button w-[250px] bg-pinkColor'>
              {`Learn more`}
            </button>
          </div>
        </div>
      </div>
    </Animation>
  );
}
