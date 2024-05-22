import React from "react";
import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      // retry(failureCount, error) {},
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
