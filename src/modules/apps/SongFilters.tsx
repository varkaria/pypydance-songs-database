import { Filter } from "@/modules/shareds/Filter";

const className = "h-4 rounded";

export const SongFilters = (props: {
  groups: string[] | null;
  setGroups: (groups: string[]) => void;
}) => {
  return (
    <Filter
      options={[
        {
          label: "Just dance (Solo)",
          value: "1-1",
          icon: (
            <img
              src="/icons/1-1.jpg"
              alt="Just Dance (Solo)"
              className={className}
            />
          ),
        },
        {
          label: "Just dance (Duo)",
          value: "1-2",
          icon: (
            <img
              src="/icons/1-2.jpg"
              alt="Just Dance (Duo)"
              className={className}
            />
          ),
        },
        {
          label: "Just dance (Trio)",
          value: "1-3",
          icon: (
            <img
              src="/icons/1-3.jpg"
              alt="Just Dance (Trio)"
              className={className}
            />
          ),
        },
        {
          label: "Just dance (Crew)",
          value: "1-4",
          icon: (
            <img
              src="/icons/1-4.jpg"
              alt="Just Dance (Crew)"
              className={className}
            />
          ),
        },
        {
          label: "Just dance (Other)",
          value: "1-5",
          icon: (
            <img
              src="/icons/1-5.jpg"
              alt="Just Dance (Other)"
              className={className}
            />
          ),
        },
        {
          label: "Fitdance",
          value: "2",
          icon: <img src="/icons/2.jpg" alt="Fitdance" className={className} />,
        },
        {
          label: "Fitness Marshall",
          value: "3",
          icon: (
            <img
              src="/icons/3.jpg"
              alt="Fitness Marshall"
              className={className}
            />
          ),
        },
        {
          label: "Mylee Dance",
          value: "4",
          icon: (
            <img src="/icons/4.jpg" alt="Mylee Dance" className={className} />
          ),
        },
        {
          label: "TML Crew",
          value: "5",
          icon: <img src="/icons/5.jpg" alt="TML Crew" className={className} />,
        },
        {
          label: "Golfy Dance Fitness",
          value: "6",
          icon: (
            <img
              src="/icons/6.jpg"
              alt="Golfy Dance Fitness"
              className={className}
            />
          ),
        },
        {
          label: "Southvibes",
          value: "7",
          icon: (
            <img src="/icons/7.jpg" alt="Southvibes" className={className} />
          ),
        },
        {
          label: "Others",
          value: "9",
          icon: <img src="/icons/9.jpg" alt="Others" className={className} />,
        },
      ]}
      title="Genres"
      selectedValues={props.groups ?? []}
      onFilter={(values) => {
        void props.setGroups(values ?? []);
      }}
    />
  );
};
