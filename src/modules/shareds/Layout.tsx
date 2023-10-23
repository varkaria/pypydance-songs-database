import { Button } from "@/modules/shadcn/ui/button";
import { useRouter } from "next/router";

const routes = [
  {
    href: "/",
    label: "Songs Search",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M212.92,25.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,64V174.08A36,36,0,1,0,88,204V118.25l112-28v51.83A36,36,0,1,0,216,172V32A8,8,0,0,0,212.92,25.69ZM52,224a20,20,0,1,1,20-20A20,20,0,0,1,52,224ZM88,101.75V70.25l112-28v31.5ZM180,192a20,20,0,1,1,20-20A20,20,0,0,1,180,192Z"></path>
      </svg>
    ),
  },
  {
    href: "/songs/random",
    label: "Randomiser",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm16,160a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192a16,16,0,0,1,16,16ZM104,92A12,12,0,1,1,92,80,12,12,0,0,1,104,92Zm72,0a12,12,0,1,1-12-12A12,12,0,0,1,176,92Zm-72,72a12,12,0,1,1-12-12A12,12,0,0,1,104,164Zm36-36a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm36,36a12,12,0,1,1-12-12A12,12,0,0,1,176,164Z"></path>
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
      </svg>
    ),
  },
];

export const Layout = (props: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <div className="space-y-4">
            <div className="flex items-center justify-center rounded-lg bg-card p-5">
              <img src="/logo.png" alt="Pypydance" className="h-40" />
            </div>
            <div className="space-y-2">
              {routes.map((route) => (
                <Button
                  size="nav"
                  className="w-full"
                  key={route.href}
                  variant={
                    router.pathname === route.href ? "default" : "secondary"
                  }
                >
                  <div className="flex w-full items-center justify-between text-base">
                    {route.icon}
                    <span>{route.label}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-9">{props.children}</div>
      </div>
    </div>
  );
};