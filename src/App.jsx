import { Routes, Route } from "react-router-dom";
import Layout from "./assets/layout/Layout";
import HomePage from "./assets/pages/HomePage";
import AllGamesPage from "./assets/pages/AllgamesPage";
import ShowPage from "./assets/pages/ShowPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/games" element={<AllGamesPage />} />
        <Route path="/games/:id" element={<ShowPage />} />
      </Route>
    </Routes>
  );
}
