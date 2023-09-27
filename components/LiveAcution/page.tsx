'use client';
import Animation from '../Animation/page';
import * as React from 'react';
import TitleCommon from '../TitleCommon/page';
import CardItem from './components/CardItems';
import acutionData from './acutionData.json';

export interface ILiveAcutionProps {}

export default function LiveAcution(props: ILiveAcutionProps) {
  return (
    <Animation>
      <div className='mt-[150px]'>
        <TitleCommon
          title='Live Acution'
          content='The largest and unique Super rare NFT marketplaceFor crypto-collectibles'
        />
        <div className='mt-[60px] gap-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
          {acutionData.map((item) => {
            return <CardItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </Animation>
  );
}
