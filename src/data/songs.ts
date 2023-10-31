import { type Song } from "@/utils/hooks/usePypySongs";

// Change the data here to change the songs metadata
export const songsMetadata: {
  id: number;
  data: {
    [key in keyof Song]?: Song[key];
  }
}[] = [
    {
      id: 171,
      data: {
        metadata: {
          title: "Life's Too Short",
          artist: "aespa",
        }
      }
    }
  ]