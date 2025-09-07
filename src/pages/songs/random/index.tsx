import { SongFilters } from "@/modules/apps/SongFilters";
import { SongItem } from "@/modules/apps/SongItem";
import { Button } from "@/modules/shadcn/ui/button";
import { Input } from "@/modules/shadcn/ui/input";
import { Layout } from "@/modules/shareds/Layout";
import { cn } from "@/utils/cn";
import { type Song, usePypySongs } from "@/utils/hooks/usePypySongs";
import { useState } from "react";

const ResultStage = ({ songs }: { songs: (Song | undefined)[] }) => (
  <div
    className={cn([
      "w-full gap-5",
      songs.length < 2 ? "flex max-w-md justify-center" : "grid lg:grid-cols-3",
    ])}
  >
    {songs.map((song) => {
      if (song === undefined) {
        return null;
      }
      return <SongItem key={song.id} {...song} />;
    })}
  </div>
);

export default function Home() {
  const [groups, setGroups] = useState<string[]>([]);
  const [amount, setAmount] = useState<number>(1);
  const [randomisedSongs, setRandomisedSongs] = useState<(Song | undefined)[]>(
    [],
  );

  const { songs } = usePypySongs();

  const randomise = () => {
    // due to the bug, we need to reset the state first
    setRandomisedSongs([]);

    const songsFiltered = songs.filter((d) => {
      return groups?.length ? groups.includes(d.group) : true;
    });
    const randomisedSongs = [];
    for (let i = 0; i < amount; i++) {
      const randomSong =
        songsFiltered[Math.floor(Math.random() * songsFiltered.length)];
      randomisedSongs.push(randomSong);
    }
    setRandomisedSongs(randomisedSongs);
  };

  return (
    <Layout>
      <div className="space-y-10 pb-16 md:px-3 md:pb-0">
        <div className="space-y-4 lg:space-y-6">
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 lg:gap-10">
            <div className="text-center">
              <h1 className="text-2xl font-medium">Randomiser</h1>
              <p className="text-subtitle text-sm">
                What’s song i should pick for now? I have no Idea about it 🧐
              </p>
            </div>
            <div className="flex w-full max-w-md flex-col items-center space-y-4">
              <div className="flex items-center gap-2">
                <SongFilters groups={groups} setGroups={setGroups} />
                <Input
                  onChange={(e) => setAmount(+e.currentTarget?.value)}
                  value={amount}
                  placeholder="Amount"
                  type="number"
                  className="w-full"
                />
              </div>
              <Button className="w-full" onClick={() => randomise()}>
                Randomise!!
              </Button>
            </div>
            {randomisedSongs.length !== 0 && (
              <ResultStage songs={randomisedSongs} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
