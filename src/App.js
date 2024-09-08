import React, { Suspense } from "react";

// ** Router Import
import Router from "./router/Router";
import { useQueryClient , QueryClientProvider, QueryClient } from "react-query";

const App = () => {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
    <Suspense fallback={null}>
      <Router />
    </Suspense>
    </QueryClientProvider>
  );
};

export default App;
