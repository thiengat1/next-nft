import * as React from 'react';

export interface ICollectionHeaderProps {}

export default function CollectionHeader(props: ICollectionHeaderProps) {
  return (
    <div className='flex border-b border-current text-[30px] mb-[30px]'>
      <div className=' flex basis-1/2'>Collections</div>
      <div className=' basis-1/6'>volume</div>
      <div className=' basis-1/6'>Floor Price</div>
      <div className=' basis-1/6'>Items</div>
    </div>
  );
}
