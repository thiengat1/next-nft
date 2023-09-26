import * as React from 'react';
import TitleCommon from '../TitleCommon/page';
import CardItem from './components/CardItems';
import acutionData from './acutionData.json';

export interface ILiveAcutionProps {}

export default function LiveAcution(props: ILiveAcutionProps) {
  return (
    <div className='mt-[150px]'>
      <TitleCommon
        title='Live Acution'
        content='The largest and unique Super rare NFT marketplaceFor crypto-collectibles'
      />
      <div className='mt-[60px] grid grid-cols-3'>
        {acutionData.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
