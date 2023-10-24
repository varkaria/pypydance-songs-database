import { Button } from "@/modules/shadcn/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/modules/shadcn/ui/dialog";

export const SongNotFoundDialog = (props: { children: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{props.children}</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>What happen in this video?</DialogTitle>
        <DialogDescription>
          Due a DMCA takedown request, we are not allowed to show previews of
          the video that we are using. but you can still play the song by pick
          in pypydance worlds.
        </DialogDescription>
        <div className="space-y-0 py-2">
          <h1 className="font-medium ">
            If I have others one. it&apos;s possible to change it?
          </h1>
          <p className="text-sm text-muted-foreground">
            Yes you can! just go to{" "}
            <a
              href="https://github.com/Varkaria/pypydance-songs-database"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              pypydance-songs-database
            </a>{" "}
            and make a pull request. to change the link in the our database file
            (<code>src/data/songs.ts</code>)
          </p>
        </div>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="submit">Exit</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);
