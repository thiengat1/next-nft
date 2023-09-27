'use client';
import * as React from 'react';
import CollectionTitle from './components/Title';
import TimeFilter from './components/TimeFilter';
import CollectionHeader from './components/CollectionHeader';
import CollectionList from './components/ColectionList';
import Animation from '../Animation/page';

export interface ICollectionsProps {}

export default function Collections(props: ICollectionsProps) {
  return (
    <Animation>
      <div>
        <CollectionTitle />
        <TimeFilter />
        <CollectionHeader />
        <CollectionList />
      </div>
    </Animation>
  );
}
