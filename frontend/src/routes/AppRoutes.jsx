import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Dashboard from "../pages/Dashboard";
import Fields from "../pages/Fields";
import Graphs from "../pages/Graphs";
import History from "../pages/History";
import Alerts from "../pages/Alerts";
import Settings from "../pages/Settings";
import Account from "../pages/Account";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/fields" element={<Fields />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/history" element={<History />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
