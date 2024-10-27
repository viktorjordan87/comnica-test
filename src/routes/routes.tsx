//general
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Suspense } from "react";
import { Spinner } from "@components/Spinner";
import { Frame } from "@pages/Frame";
import { NotFound } from "@pages/Notfound";
import { Home } from "@pages/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <Frame />
      </Suspense>
    ),
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

// Pass the typed routes to createBrowserRouter
export const router = createBrowserRouter(routes);
