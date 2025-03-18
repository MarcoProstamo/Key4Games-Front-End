import { Routes, Route } from "react-router-dom";
import Layout from "./assets/layout/Layout";
import HomePage from "./assets/pages/HomePage";
import AboutUsPage from "./assets/pages/AboutUsPage";
import WorkWithUsPage from "./assets/pages/WorkWithUsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/work-us" element={<WorkWithUsPage />} />
      </Route>
    </Routes>
  );
}
