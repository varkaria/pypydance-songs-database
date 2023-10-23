import { SongItem } from "@/modules/apps/SongItem";
import { Layout } from "@/modules/shareds/Layout";
import { usePypySongs } from "@/utils/hooks/usePypySongs";
import Fuse from "fuse.js";
import { useState } from "react";

export default function Home() {
  const { data } = usePypySongs();
  const [search, setSearch] = useState("");

  const fuse = new Fuse(data?.songs ?? [], {
    keys: ["name"],
  });

  // If not search, show 100 songs (fuse is not support empty search)
  const result = search
    ? fuse.search(search).map((d) => d.item)
    : data?.songs.slice(0, 100);

  return (
    <Layout>
      <div className="space-y-4">
        <div>
          <input
            onChange={(e) => setSearch(e.currentTarget.value)}
            value={search}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          {result?.map((song) => <SongItem {...song} key={song.id} />)}
        </div>
      </div>
    </Layout>
  );
}
