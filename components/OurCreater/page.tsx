'use client';
import Animation from '../Animation/page';
import * as React from 'react';
import TitleCommon from '../TitleCommon/page';
import CreaterItem from './CreaterItem';

export interface IOurCreaterProps {}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function OurCreater(props: IOurCreaterProps) {
  return (
    <Animation>
      <div className='mt-[150px]'>
        <TitleCommon
          title='Our Creater'
          content='The largest and unique Super rare NFT marketplaceFor crypto-collectibles'
        />
        <div className='grid gap-4  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[50px]'>
          {arr.map((item) => {
            return <CreaterItem key={item + 1} />;
          })}
        </div>
        <div className=' text-center mt-[100px]'>
          <button className=' border rounded-3xl p-2 border-[#17A1D4] text-[#17A1D4]'>
            Explore more
          </button>
        </div>
      </div>
    </Animation>
  );
}
