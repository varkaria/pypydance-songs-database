import { routes } from "@/modules/shareds/Sidebar";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";

export const MobileNavbar = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 block w-full bg-white p-2 lg:hidden">
      <div className="flex">
        {routes.map((route) => (
          <div
            key={route.href}
            className={cn([
              "flex flex-1 items-center justify-center",
              "transition-all duration-300",
              router.pathname === route.href && "text-primary",
            ])}
          >
            <div
              className={cn([
                "flex w-full flex-col items-center justify-center gap-1 rounded-lg px-4 py-2",
                "transition-all duration-300",
                router.pathname === route.href && "bg-primary/30 text-primary",
              ])}
            >
              {route.icon}
              <span className="text-xs font-medium">{route.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
