/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import { songsMetadata } from "@/data/songs";
import { songsMissingThumbnail } from "@/data/thumbnails";
import { useQuery } from "@tanstack/react-query";

export type PypySongsRequestResponse = {
  timestamp: number;
  // l10n: unknown[];
  songs: {
    /** id */
    i: number;
    /** group */
    g: Group;
    /** volume */
    v?: number;
    /** name */
    n: string;
    /** flip */
    f?: true;
    /** start */
    s?: number;
    /** end */
    e?: number;
    /** skipRandom */
    x?: true;
    /** originalUrl */
    o?: string[];
  }[];
};

export type Song = {
  id: number;
  group: Group;
  volume: number;
  name: string;
  flip: boolean;
  start: number;
  end: number;
  skipRandom: boolean;
  originalUrl: string[];

  // from our data
  isOriginalDeleted?: boolean | undefined;
  customThumbnail?: string | undefined;
  metadata?: {
    title: string;
    artist: string;
  }
}

export enum Group {
  JD_SOLO = "1-1",
  JD_DUET = "1-2",
  JD_TRIO = "1-3",
  JD_CREW = "1-4",
  JD_OTHERS = "1-5",
  FITDANCE = "2",
  FITNESSMARSHALL = "3",
  MYLEEDANCE = "4",
  TMLCREW = "5",
  GOLFYDANCEFITNESS = "6",
  SOUTHVIBES = "7",
  OTHERS = "9",
}

export const usePypySongs = () => {
  const query = useQuery<PypySongsRequestResponse>({
    queryKey: ['getPypySongs'],
    queryFn: () => fetch('https://api.pypy.dance/bundle').then((res) => res.json()),
    staleTime: 60000, // 60s
  });

  // data modification from community
  const songs = (query.data?.songs || []).map((song) => {
    const matchedSong = songsMetadata.find((data) => data.id === song.i);
    const matchedMissingThumbnail = songsMissingThumbnail.find(
      (data) => data.id === song.i,
    );
    return {
      id: song.i,
      group: song.g,
      volume: song.v || 0,
      name: song.n,
      flip: song.f || false,
      start: song.s || 0,
      end: song.e || 0,
      skipRandom: song.x || false,
      originalUrl: song.o || [],
      ...matchedSong?.data,
      ...matchedMissingThumbnail?.data,
    };
  });

  return {
    updatedAt: query.data?.timestamp || 0,
    songs,
  };
};