import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import { HomepageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import ItemGrid from '../components/ItemGrid';

function CurrentlySlicing({ slicemaster }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">SliceMasters On</span>
      </h2>
      <p>Standing by, ready to slice you up!</p>
      {!slicemaster && <LoadingGrid count={4} />}
      {slicemaster && !slicemaster?.length && (
        <p>No one is working right now</p>
      )}
      {slicemaster?.length && <ItemGrid items={slicemaster} />}
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices </span>
      </h2>
      <p>Come on by, buy the slice!</p>
      {!hotSlices && <LoadingGrid count={4} />}
      {hotSlices && !hotSlices?.length && <p>No pizza ready!</p>}
      {hotSlices?.length && <ItemGrid items={hotSlices} />}
    </div>
  );
}

export default function Homepage() {
  const { slicemaster, hotSlices } = useLatestData();

  return (
    <div className="center">
      <h1>Best Pizza in town!</h1>
      <p>Open 11am to 11pm Every Single Day</p>
      <HomepageGrid className="center">
        <CurrentlySlicing slicemaster={slicemaster} />
        <HotSlices hotSlices={hotSlices} />
      </HomepageGrid>
    </div>
  );
}
