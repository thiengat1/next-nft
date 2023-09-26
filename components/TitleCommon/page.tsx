import * as React from 'react';

export interface ITitleCommonProps {
  title: string;
  content: string;
}

export default function TitleCommon({ title, content }: ITitleCommonProps) {
  return (
    <div className='flex justify-center flex-col items-center text-center'>
      <div className='text-[50px]'>{title}</div>
      <div className='max-w-[391px]'>{content}</div>
    </div>
  );
}
