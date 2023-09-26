import * as React from 'react';
import CollectionTitle from './components/Title';
import TimeFilter from './components/TimeFilter';
import CollectionHeader from './components/CollectionHeader';
import CollectionList from './components/ColectionList';

export interface ICollectionsProps {}

export default function Collections(props: ICollectionsProps) {
  return (
    <div>
      <CollectionTitle />
      <TimeFilter />
      <CollectionHeader />
      <CollectionList />
    </div>
  );
}
