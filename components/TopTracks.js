import useSwr from 'swr';
import Track from './Track';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Tracks() {
  const { data } = useSwr('/api/top-tracks', fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}