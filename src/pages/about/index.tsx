import { Layout } from "@/modules/shareds/Layout";

const ThankyouCard = (props: {
  image: string;
  name: string;
  description: string;
}) => (
  <div className="rounded-xl bg-card p-4">
    <div className="flex items-center gap-3">
      <img
        src={props.image}
        alt="Natsumi Sama"
        className="h-16 w-16 rounded-full"
      />
      <div className="space-y-0">
        <h1 className="text-lg font-medium text-secondary-foreground">
          {props.name}
        </h1>
        <p className="text-subtitle text-sm">{props.description}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <Layout>
      <div className="space-y-10 md:px-3">
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-medium">About this project</h1>
            <p className="text-subtitle text-sm">How is this possible?</p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <img
              src="https://avatars.githubusercontent.com/u/61514399?v=4"
              alt="Varkaria"
              className="h-32 w-32 rounded-full"
            />
            <div className="space-y-2">
              <p className="text-subtitle">
                Just created this with just 1 problem in mind:{" "}
                <b>I wanted to search for songs easier.</b> and yeah I
                don&apos;t know about title or artist at much and I like to see
                something like thumbnail or preview of the song Instead of just
                a title so that&apos;s why I created this 😂.
              </p>
              <h1 className="text-lg font-medium text-secondary-foreground">
                Varkaria
              </h1>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-medium">Thank you</h1>
            <p className="text-subtitle text-sm">
              I&apos;m really grateful for these people.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <ThankyouCard
              image="https://avatars.githubusercontent.com/u/11171153?v=4"
              name="Natsumi Sama"
              description="for providing the API and helping me with the original songs database."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
