import * as React from 'react';
import menuData from './menuData.json';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <div className='w-full flex items-center justify-between py-[25px] text-2xl'>
      <div className='cursor-pointer hover:opacity-80'>
        <img src='/assets/images/logo.svg' alt='logo' />
      </div>
      <div className='flex items-center gap-4'>
        <ul className='flex gap-6'>
          {menuData.map((menu) => {
            return (
              <li
                key={menu.id}
                className=' cursor-pointer hover:text-green-600'
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
        <div>
          <button className=' lewis-button w-[180px] bg-blueColor'>
            Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
