import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router.tsx";
import UserContextProvider from "./shared/context/user.context.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      // retry(failureCount, error) {},
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <PrimeReactProvider>
          <RouterProvider router={router} />
        </PrimeReactProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
