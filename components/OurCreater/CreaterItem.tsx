import * as React from 'react';
import Link from 'next/link';

export interface ICreaterItemProps {}

export default function CreaterItem(props: ICreaterItemProps) {
  return (
    <div className='creater-item w-[384px] h-[96px] border  bg-[#25293F] relative '>
      <div className='flex absolute top-[50%] items-center translate-y-[-50%] w-full justify-between px-8'>
        <img
          src='/assets/images/our-creater-avatar.png'
          alt='our-creater'
          width={56}
          height={56}
        />
        <div className='text-center '>
          <div>Emerson Philips</div>
          <div>3.2 ETH</div>
        </div>
        <Link href='#' className=' text-[#15BFFD] underline'>
          Follow
        </Link>
      </div>
    </div>
  );
}
