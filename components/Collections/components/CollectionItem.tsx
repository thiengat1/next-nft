import * as React from 'react';
import { Collections } from '@/models';

export interface ICollectionItemProps {
  collection: Collections;
}

export default function CollectionItem({ collection }: ICollectionItemProps) {
  const { id, name, volume, floorPrice, items } = collection;
  function numberWithCommas(x: number | string) {
    let y = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(y)) y = y.replace(pattern, '$1,$2');
    return y;
  }
  return (
    <div className='flex items-center text-[30px]'>
      <div className=' flex basis-1/2  items-center'>
        <div className='mr-[31px] text-[#F52AF5]'>{id}</div>
        <img
          src={`/assets/images/collection-avatar${id}.png`}
          width={50}
          alt='collection-icon'
          className='mr-[25px]'
        />
        <div className='flex justify-between flex-1 items-center'>
          <div>{name}</div>
          <div className=' mr-[119px] ml-4'>
            <img
              src='/assets/images/collection-icon.png'
              width={18}
              height={29}
              alt='collection-icon'
            />
          </div>
        </div>
      </div>
      <div className=' basis-1/6'>
        <div>{volume.total}</div>
        <div
          className={`text-[20px] ${
            volume.change.includes('+') ? 'text-green-300' : 'text-red-500'
          }
          `}
        >
          {volume.change}
        </div>
      </div>
      <div className=' basis-1/6'>
        <div>{floorPrice.total}</div>
        <div
          className={`text-[20px] ${
            floorPrice.change.includes('+') ? 'text-green-300' : 'text-red-500'
          }
          `}
        >
          {floorPrice.change}
        </div>
      </div>
      <div className=' basis-1/6'>{numberWithCommas(items)}</div>
    </div>
  );
}
