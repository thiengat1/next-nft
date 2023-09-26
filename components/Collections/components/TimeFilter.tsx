import * as React from 'react';

export interface ITimeFilterProps {}

export default function TimeFilter(props: ITimeFilterProps) {
  return (
    <div className='flex gap-[52px] my-[65px]'>
      <button className='lewis-button w-[150px] bg-pinkColor'>24H</button>
      <button className='lewis-button w-[150px] bg-blueColor'>7D</button>
      <button className='lewis-button w-[150px] bg-blue-900'>All Time</button>
    </div>
  );
}
