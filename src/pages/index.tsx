import { SongFilters } from "@/modules/apps/SongFilters";
import { ItemsList } from "@/modules/apps/SongList";
import { SongSorts } from "@/modules/apps/SongSorts";
import { Input } from "@/modules/shadcn/ui/input";
import { Layout } from "@/modules/shareds/Layout";
import { cn } from "@/utils/cn";
import { usePypySongs } from "@/utils/hooks/usePypySongs";
import Fuse from "fuse.js";
import { Search } from "lucide-react";
import {
  parseAsArrayOf,
  parseAsString,
  useQueryState,
} from "next-usequerystate";
import { useEffect, useState } from "react";

export default function Home() {
  const { data } = usePypySongs();
  const [search, setSearch] = useQueryState("search");
  const [groups, setGroups] = useQueryState(
    "groups",
    parseAsArrayOf(parseAsString),
  );

  const fuse = new Fuse(data?.songs ?? [], {
    keys: ["name"],
  });

  const result = (
    search ? fuse.search(search).map((d) => d.item) : data?.songs
  )?.filter((d) => {
    return groups?.length ? groups.includes(d.group) : true;
  });

  const sortedResult =
    result?.sort((a, b) => {
      if (a.id > b.id) return -1;
      return 0;
    }) ?? [];

  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className="space-y-4">
        <div
          className={cn([
            "sticky top-0 z-20 grid grid-cols-3 gap-4 bg-white backdrop-blur-lg transition-all",
            isScrolling && "py-4",
          ])}
        >
          <div className="relative col-span-2">
            <Input
              placeholder="Search song..."
              className="pl-10"
              onChange={(e) => {
                void setSearch(e.currentTarget.value);
              }}
              value={search ?? ""}
            />
            <Search className="absolute left-2.5 top-2.5" size={20} />
          </div>
          <div className="col-span-1 grid">
            <SongFilters groups={groups} setGroups={setGroups} />
          </div>
        </div>
        {result && (
          <ItemsList
            songs={sortedResult}
            key={`
              ${search ?? ""}
              ${groups?.join(",") ?? ""}
            `}
          />
        )}
      </div>
    </Layout>
  );
}
