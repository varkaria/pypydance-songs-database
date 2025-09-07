import { SongItem } from "@/modules/apps/SongItem";
import { type Song } from "@/utils/hooks/usePypySongs";
import { useEffect, useRef, useState } from "react";

export const itemsPerPage = 50;

const InfiniteScrollElement = (props: {
  isLast: boolean;
  newLimit: () => void;
  children: React.ReactNode;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (props.isLast && entry?.isIntersecting) {
        props.newLimit?.();
        observer.unobserve(entry?.target);
      }
    });

    observer.observe(itemRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isLast]);

  return <div ref={itemRef}>{props.children}</div>;
};

export const ItemsList = (props: { songs: Song[] }) => {
  const [page, setPage] = useState(1);
  const [songs, setSongs] = useState<Song[]>(
    props.songs.slice(0, page * itemsPerPage),
  );

  useEffect(() => {
    setSongs(props.songs.slice(0, page * itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, props.songs]);

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {songs.map((song, index) => (
        <InfiniteScrollElement
          key={song.id}
          isLast={index === songs.length - 1}
          newLimit={() => setPage(page + 1)}
        >
          <SongItem {...song} />
        </InfiniteScrollElement>
      ))}
    </div>
  );
};
