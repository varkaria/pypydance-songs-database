import { SongHowToInputDialog } from "@/modules/apps/SongHowToInputDialog";
import { SongNotFoundDialog } from "@/modules/apps/SongNotFoundDialog";
import { Button } from "@/modules/shadcn/ui/button";
import { cn } from "@/utils/cn";
import { type Song } from "@/utils/hooks/usePypySongs";
import { getSongMetadata } from "@/utils/song";
import { getYTImage, getYTVideoId } from "@/utils/youtube";
import Link from "next/link";
import { useEffect, useState } from "react";

export const SongItem = (song: Song) => {
  const metadata = getSongMetadata(song.name, song.group);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = getYTImage(getYTVideoId(song.originalUrl[0] ?? ""));
    img.onload = () => {
      if (img.width < 140) {
        setIsError(true);
      }
    };
  }, [song]);

  return (
    <div className="group relative space-y-2">
      <div className="relative w-full">
        {isError && (
          <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-lg bg-zinc-200 p-4">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl">{": ("}</h1>
              <p className="text-subtitle text-sm">No Preview Avaliable.</p>
            </div>
            <SongNotFoundDialog>
              <Button size="sm">Why?</Button>
            </SongNotFoundDialog>
          </div>
        )}
        {!isError && (
          <img
            className="aspect-video w-full rounded-lg object-cover"
            src={getYTImage(getYTVideoId(song.originalUrl[0] ?? ""))}
            alt={song.name}
          />
        )}
        {!isError && (
          <div className="absolute left-0 top-0 h-full w-full rounded-lg transition-all group-hover:bg-primary/20" />
        )}
      </div>
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
          <h1
            className={cn([
              "font-medium",
              !metadata.artist ? "line-clamp-2" : "line-clamp-1",
            ])}
          >
            {metadata.title}
          </h1>
        </div>
        <SongHowToInputDialog previewText={String(song.id)}>
          <div className="relative z-10 ml-auto cursor-pointer pl-2 font-mono text-3xl font-medium text-primary">
            {song.id}
          </div>
        </SongHowToInputDialog>
      </div>
      {!isError && (
        <Link
          className="absolute left-0 top-0 h-full w-full"
          href={song.originalUrl[0] ?? "#"}
          target="_blank"
        />
      )}
    </div>
  );
};
