import { artists } from "@/data/artists";
import { Group } from "@/utils/hooks/usePypySongs";


export const getSongMetadata = (metadata: string, group: Group) => {
  const defaultReturn = {
    title: metadata,
    artist: '',
  }

  switch (group) {
    case Group.FITDANCE:
      return {
        title: metadata.split(' - ')[0],
        artist: metadata.split(' - ')[1],
      };
    case Group.JD_OTHERS:
      return {
        title: metadata.split(']')[1],
        artist: metadata.split('[')[1]?.split(']')[0],
      };
    case Group.FITNESSMARSHALL:
      if (!metadata.includes(' - ')) return defaultReturn

      // because some songs have the artist name first
      if (artists.includes(metadata.split(' - ')[1] ?? "")) {
        return {
          title: metadata.split(' - ')[0],
          artist: metadata.split(' - ')[1],
        }
      }

      return {
        title: metadata.split(' - ')[1],
        artist: metadata.split(' - ')[0],
      }
    default:
      return defaultReturn
  }
}