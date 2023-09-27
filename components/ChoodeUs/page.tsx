'use client';
import * as React from 'react';
import Animation from '../Animation/page';
export interface IChooseUsProps {}

export default function ChooseUs(props: IChooseUsProps) {
  return (
    <Animation>
      <div
        className=' bg-chooseUs h-[535px] flex 
    justify-between items-center mt-[154px] bg-cover'
      >
        <img src='/assets/images/chooseUs.png' alt='chooseUs' />
        <div className='w-[540px] mr-[217px]'>
          <div className='text-[50px]'>Why choose us?</div>
          <p className='text-[20px]'>
            Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
            semper. Eros suspendisse varius enim ultrices isque et quis ctumst.
            Feugiat amet velit faucibus amet
          </p>
          <p className='text-[20px]'>
            Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa
            amet lacinia aliquamid ultrices vitae.
          </p>
        </div>
      </div>
    </Animation>
  );
}
