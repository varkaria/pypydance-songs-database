import { type Song } from "@/utils/hooks/usePypySongs";

// Change the data here to change the songs metadata
export const songsMetadata: {
  id: number;
  data: {
    [key in keyof Song]?: Song[key];
  }
}[] = [
    {
      id: 2914,
      data: {
        originalUrl: [
          "https://www.youtube.com/watch?v=INsbbnOD2_4"
        ]
      }
    }
  ]