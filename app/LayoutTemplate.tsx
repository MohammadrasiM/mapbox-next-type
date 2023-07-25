"use client";
import SessionProvider from "@/utils/SessionProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React, { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/reducers";

interface layOut {
  children: ReactNode;
  params: { [key: string]: string };
}

const LayoutTemplate = async (props: layOut) => {
  const client = new QueryClient({ defaultOptions: { queries: { staleTime: 10000, refetchOnWindowFocus: false } } });

  let dictionary;
  let locale = props?.params?.locale;

  try {
    dictionary = (await import(`../../dictionary/${locale}.json`)).default;
  } catch (error) {
    // notFound();
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <SessionProvider>{props?.children}</SessionProvider>

        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </Provider>
  );
};
export default LayoutTemplate;
