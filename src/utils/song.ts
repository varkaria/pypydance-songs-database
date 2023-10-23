import { Group } from "@/server/api/modules/songs/types";

export const getSongMetadata = (metadata: string, group: Group) => {
  switch (group) {
    case Group.FITDANCE:
      return {
        title: metadata.split(' - ')[0],
        artist: metadata.split(' - ')[1],
      };
    default:
      return {
        title: metadata,
        artist: '',
      };
  }
}