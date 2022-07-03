import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { renderRoutes } from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
          {/* Home Template */}
          {/* <Route path="" element={<Home />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="list-movie" element={<ListMoviePage />} />
          <Route path="hook" element={<HookPage />} />
          <Route path="hoc" element={<HocPage />} />
          <Route path="/detail/:id" element={<DetailMovie />} />
          <Route path="spring" element={<DemoReactSpring />} />
        </Route> */}
          {/* Redirect to admin/dashboard */}
          <Route
            path="admin"
            element={<Navigate replace to="/admin/dashboard" />}
          />
          {/* Auth Page */}
          {/* <Route path="auth" element={<AuthPage />} /> */}

          {/* Admin Template */}
          {/* <Route path="admin" element={<Admin />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="add-user" element={<AddUSerPage />} />
          <Route path="add-movie" element={<AddMoviePage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
