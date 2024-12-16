"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()
function TanstackQueryProvider() {
  return (
    <QueryClientProvider client={queryClient}>TanstackQueryProvider</QueryClientProvider>
  )
}

export default TanstackQueryProvider