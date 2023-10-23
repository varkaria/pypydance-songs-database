import { type Song } from "@/server/api/modules/songs/types";
import { getSongMetadata } from "@/utils/song";
import { getYTImage, getYTVideoId } from "@/utils/youtube";
import Link from "next/link";

export const SongItem = (song: Song) => {
  const metadata = getSongMetadata(song.name, song.group);

  return (
    <Link
      className="block space-y-2"
      href={song.originalUrl[0] ?? "#"}
      target="_blank"
    >
      <img
        className="aspect-video w-full rounded-lg object-cover"
        src={getYTImage(getYTVideoId(song.originalUrl[0] ?? ""))}
        alt={song.name}
      />
      <div className="flex items-center gap-2">
        <img
          src={`/icons/${song.group}.jpg`}
          alt={song.group}
          className="h-11 w-11 rounded-lg object-cover"
        />
        <div className="w-full space-y-0">
          <p className="text-subtitle line-clamp-1 text-sm">
            {metadata.artist}
          </p>
          <h1 className="line-clamp-1 font-medium">{metadata.title}</h1>
        </div>
        <div className="ml-auto pl-2 text-3xl font-medium text-primary">
          {song.id}
        </div>
      </div>
    </Link>
  );
};
