import * as React from 'react';
import CollectionItem from './CollectionItem';
import collectionData from '../collectionData.json';
import { Collections } from '@/models';

export interface ICollectionListProps {}

export default function CollectionList(props: ICollectionListProps) {
  return (
    <div className='flex flex-col gap-8'>
      {collectionData.map((collection: Collections) => {
        return <CollectionItem key={collection.id} collection={collection} />;
      })}
    </div>
  );
}
