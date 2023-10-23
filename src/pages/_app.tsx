import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type AppType } from "next/app";

import "@/styles/globals.css";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
