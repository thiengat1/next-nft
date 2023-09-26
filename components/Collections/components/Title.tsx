import * as React from 'react';

export interface ICollectionTitleProps {}

export default function CollectionTitle(props: ICollectionTitleProps) {
  return (
    <div className='flex items-center gap-3 justify-center mt-[277px]'>
      <div className='title-line'></div>
      <h3 className='text-[50px]'>Top Collections</h3>
      <div className='title-line rotate-180'></div>
    </div>
  );
}
