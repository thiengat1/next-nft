import * as React from 'react';

export interface ICardItemProps {
  item: any;
}

export default function CardItem({ item }: ICardItemProps) {
  const { id, name, value } = item;
  return (
    <div className='relative w-[384px]'>
      <img src={`/assets/images/subtract${id}.png`} alt='subtract1' />
      <div className=' absolute top-[24px] left-[20px]'>
        <div
          className={`${id === 1 ? 'text-black' : 'text-white'} text-[14px]`}
        >
          Current bid
        </div>
        <div className='flex'>
          <img src='/assets/images/ethereum.png' alt='ethereum' />
          <div className='text-[#15BFFD]'>{value}</div>
        </div>
      </div>
      <div className='absolute top-[24px] right-[20px]'>
        <button className=' lewis-button bg-blueColor  px-8'>Place bid</button>
      </div>
      <div className=' absolute bottom-0 left-[20px]'>
        <div>
          <div className='text-black'>{name}</div>
          <div className='flex'>
            <img src='/assets/images/avatar1.png' alt='avatar' />
            <div>John Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
}
