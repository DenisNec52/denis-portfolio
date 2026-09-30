import { BrowserRouter, Route, Routes } from "react-router";
import Journey from "./components/Journey";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectsPage from "./pages/ProjectsPage";

// Il refresh su ogni rotta funziona grazie al rewrite verso index.html in vercel.json
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="chi-sono" element={<AboutPage />} />
          <Route path="progetti" element={<ProjectsPage />} />
          <Route path="progetti/:slug" element={<ProjectDetailPage />} />
          <Route path="percorso" element={<Journey />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
