// src/routes/__root.tsx
/// <reference types="vite/client" />

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Whimsical Animations Exercises by Carl-Adrien Mercey" },
      {
        name: "description",
        content:
          "My take on the exercises from the course Whimsical Animations from Josh W. Comeau",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-950 px-8 py-16 text-gray-100">
        {children}

        <Scripts />
      </body>
    </html>
  );
}
