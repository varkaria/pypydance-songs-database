import { SongFilters } from "@/modules/apps/SongFilters";
import { SongItem } from "@/modules/apps/SongItem";
import { Button } from "@/modules/shadcn/ui/button";
import { Input } from "@/modules/shadcn/ui/input";
import { Layout } from "@/modules/shareds/Layout";
import { cn } from "@/utils/cn";
import { type Song, usePypySongs } from "@/utils/hooks/usePypySongs";
import { useState } from "react";

const IdleStage = () => (
  <svg
    width="126"
    height="126"
    viewBox="0 0 126 126"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M108.498 31.8372L70.9144 9.99634C68.5093 8.60227 65.7787 7.8681 62.9988 7.8681C60.2189 7.8681 57.4883 8.60227 55.0832 9.99634L17.5022 31.8372C17.3542 31.924 17.2314 32.0481 17.1461 32.197C17.0608 32.3459 17.016 32.5146 17.016 32.6862C17.016 32.8578 17.0608 33.0265 17.1461 33.1754C17.2314 33.3243 17.3542 33.4484 17.5022 33.5352L62.5078 60.01C62.6592 60.0991 62.8317 60.1462 63.0074 60.1462C63.1831 60.1462 63.3556 60.0991 63.507 60.01L108.503 33.5352C108.651 33.4479 108.773 33.3235 108.858 33.1744C108.943 33.0252 108.987 32.8564 108.987 32.6848C108.986 32.5132 108.941 32.3446 108.855 32.196C108.769 32.0473 108.646 31.9236 108.498 31.8372ZM63 37.4063C59.7393 37.4063 57.0938 35.6442 57.0938 33.4688C57.0938 31.2933 59.7393 29.5313 63 29.5313C66.2607 29.5313 68.9062 31.2933 68.9062 33.4688C68.9062 35.6442 66.2607 37.4063 63 37.4063ZM58.5703 66.6447L13.2891 40.2314C13.1395 40.1451 12.9698 40.0996 12.7971 40.0995C12.6244 40.0995 12.4547 40.1449 12.3051 40.2312C12.1555 40.3174 12.0312 40.4416 11.9448 40.5911C11.8583 40.7406 11.8127 40.9102 11.8125 41.0829V83.8835C11.8162 85.9457 12.3597 87.971 13.389 89.758C14.4183 91.545 15.8974 93.0314 17.6794 94.0694L57.5859 117.997C57.7355 118.083 57.9052 118.129 58.0779 118.129C58.2506 118.129 58.4203 118.084 58.5699 117.997C58.7195 117.911 58.8438 117.787 58.9302 117.637C59.0167 117.488 59.0623 117.318 59.0625 117.146V67.4961C59.0623 67.3235 59.0168 67.154 58.9304 67.0045C58.844 66.8551 58.7198 66.731 58.5703 66.6447ZM23.625 90.5625C21.4495 90.5625 19.6875 87.917 19.6875 84.6563C19.6875 81.3955 21.4495 78.75 23.625 78.75C25.8005 78.75 27.5625 81.3955 27.5625 84.6563C27.5625 87.917 25.8005 90.5625 23.625 90.5625ZM47.25 82.6875C45.0745 82.6875 43.3125 80.042 43.3125 76.7813C43.3125 73.5205 45.0745 70.875 47.25 70.875C49.4255 70.875 51.1875 73.5205 51.1875 76.7813C51.1875 80.042 49.4255 82.6875 47.25 82.6875ZM112.711 40.2388L67.4297 66.8292C67.2806 66.9153 67.1566 67.0391 67.0703 67.188C66.9839 67.337 66.9381 67.5061 66.9375 67.6783V117.141C66.9377 117.313 66.9833 117.483 67.0698 117.632C67.1562 117.782 67.2805 117.906 67.4301 117.992C67.5797 118.079 67.7494 118.124 67.9221 118.124C68.0948 118.124 68.2645 118.078 68.4141 117.992L108.318 94.0644C110.1 93.0272 111.579 91.5417 112.609 89.7556C113.638 87.9696 114.183 85.9451 114.188 83.8835V41.0977C114.189 40.9243 114.144 40.7538 114.058 40.6032C113.972 40.4527 113.848 40.3275 113.698 40.2404C113.548 40.1532 113.378 40.1072 113.205 40.1069C113.031 40.1066 112.861 40.1521 112.711 40.2388ZM78.75 104.344C76.5745 104.344 74.8125 101.698 74.8125 98.4375C74.8125 95.1768 76.5745 92.5313 78.75 92.5313C80.9255 92.5313 82.6875 95.1768 82.6875 98.4375C82.6875 101.698 80.9255 104.344 78.75 104.344ZM78.75 82.6875C76.5745 82.6875 74.8125 80.042 74.8125 76.7813C74.8125 73.5205 76.5745 70.875 78.75 70.875C80.9255 70.875 82.6875 73.5205 82.6875 76.7813C82.6875 80.042 80.9255 82.6875 78.75 82.6875ZM102.375 90.5625C100.2 90.5625 98.4375 87.917 98.4375 84.6563C98.4375 81.3955 100.2 78.75 102.375 78.75C104.55 78.75 106.312 81.3955 106.312 84.6563C106.312 87.917 104.55 90.5625 102.375 90.5625ZM102.375 68.9063C100.2 68.9063 98.4375 66.2608 98.4375 63C98.4375 59.7393 100.2 57.0938 102.375 57.0938C104.55 57.0938 106.312 59.7393 106.312 63C106.312 66.2608 104.55 68.9063 102.375 68.9063Z"
      fill="#B080FF"
    />
  </svg>
);

const ResultStage = ({ songs }: { songs: (Song | undefined)[] }) => (
  <div
    className={cn([
      "w-full gap-5",
      songs.length < 2 ? "flex justify-center" : "grid lg:grid-cols-3",
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

  const { data } = usePypySongs();

  const randomise = () => {
    const songs = data?.songs ?? [];
    const songsFiltered = songs?.filter((d) => {
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
            {randomisedSongs.length === 0 ? (
              <IdleStage />
            ) : (
              <ResultStage songs={randomisedSongs} />
            )}
            <div className="flex w-full max-w-md flex-col items-center space-y-4">
              <div className="flex items-center gap-2">
                <SongFilters groups={groups} setGroups={setGroups} />
                <Input
                  onChange={(e) => setAmount(+e.currentTarget?.value)}
                  value={amount}
                  placeholder="Amount"
                  type="number"
                  className="w-24"
                />
              </div>
              <Button className="w-full" onClick={() => randomise()}>
                Randomise!!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
