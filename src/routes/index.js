import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  {
    path: "",
    element: lazy(() => import("../containers/Home")),
    nestedRoutes: [
      {
        path: "",
        element: lazy(() => import("../containers/Home/HomePage")),
      },
      {
        path: "about",
        element: lazy(() => import("../containers/Home/AboutPage")),
      },
      {
        path: "list-movie",
        element: lazy(() => import("../containers/Home/ListMoviePage")),
      },
      {
        path: "hook",
        element: lazy(() => import("../containers/Home/HookPagee")),
      },
      {
        path: "hoc",
        element: lazy(() => import("../containers/Home/HOCPage")),
      },
      {
        path: "/detail/:id",
        element: lazy(() => import("../containers/Home/DetailMovie")),
      },
      {
        path: "spring",
        element: lazy(() =>
          import("../containers/Home/HookPagee/ReactSpring/DemoReactSpring")
        ),
      },
    ],
  },
  {
    path: "auth",
    element: lazy(() => import("../containers/Admin/AuthPage")),
  },
  {
    path: "admin",
    element: lazy(() => import("../containers/Admin")),
    nestedRoutes: [
      {
        path: "dashboard",
        element: lazy(() => import("../containers/Admin/DashboardPage")),
      },
      {
        path: "add-user",
        element: lazy(() => import("../containers/Admin/AddUserPage")),
      },
      {
        path: "add-movie",
        element: lazy(() => import("../containers/Admin/AddMoviePage")),
      },
    ],
  },
  {
    path: "*",
    element: lazy(() => import("../containers/PageNotFound")),
  },
];

export const renderRoutes = () => {
  return routes.map((routes, index) => {
    if (routes.nestedRoutes) {
      return (
        <Route key={index} path={routes.path} element={<routes.element />}>
          {routes.nestedRoutes.map((nestedRoutes, index) => {
            return (
              <Route
                key={index}
                path={nestedRoutes.path}
                element={<nestedRoutes.element />}
              />
            );
          })}
        </Route>
      );
    } else {
      return (
        <Route key={index} path={routes.path} element={<routes.element />} />
      );
    }
  });
};
