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

export const SongHowToInputDialog = (props: {
  children: React.ReactNode;
  previewText: string;
}) => (
  <Dialog>
    <DialogTrigger asChild>{props.children}</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>How to use this?</DialogTitle>
        <DialogDescription>
          Grab the number of the song you want to play and go to the pypydance
          world and type{" "}
          <code className="rounded-lg bg-primary/20 px-3 py-0.5 text-primary">
            {props.previewText}
          </code>{" "}
          in the keypad and press{" "}
          <code className="rounded-lg bg-primary/20 px-3 py-0.5 text-primary">
            +
          </code>{" "}
          to add the song to queue.
        </DialogDescription>
        <div className="py-2">
          <img src="/keypad.jpg" alt="Keypad" className="rounded-lg" />
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
