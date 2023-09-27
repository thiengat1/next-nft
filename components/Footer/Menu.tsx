import * as React from 'react';

export interface IMenuProps {
  data: any;
}

export default function Menu({ data }: IMenuProps) {
  const { title, children } = data;
  return (
    <div>
      <h1 className='text-[30px]'>{title}</h1>
      <ul className='mt-[50px]'>
        {children.map((menu: string) => {
          return (
            <li
              className='text-[20px] mb-4 cursor-pointer hover:opacity-80'
              key={menu}
            >
              {menu}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
