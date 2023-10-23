import { songsMetadata } from "@/data/songs";
import { useQuery } from "@tanstack/react-query";

export type PypySongsRequestResponse = {
  updatedAt: number;
  songs: Song[];
}

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
    queryFn: () => fetch('https://jd.pypy.moe/api/v1/songs').then(res => res.json())
  })

  // data modification from community
  if (query.data) {
    const newData = songsMetadata
    query.data.songs = query.data.songs.map(song => {
      const matchedSong = newData.find(data => data.id === song.id)
      if (matchedSong) {
        return {
          ...song,
          ...matchedSong.data
        }
      }
      return song
    })
  }

  return query
}