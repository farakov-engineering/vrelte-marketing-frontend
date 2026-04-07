import { BrowserRouter, Route, Routes } from "react-router";

import FourOhFourPage from "./pages/404";
import LandingPage from "./pages/landing/LandingPage";
import Layout from "./components/layout/Layout";
import Account from "./pages/account/Account";
import Configure from "./pages/configure/Configure";
import CalendarPage from "./pages/calendar/Calendar";
import Alerts from "./pages/alerts/Alerts";
import Leads from "./pages/leads/Leads";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    // Default font is Times New Roman
    <div className="font-['Times New Roman', serif]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/configure" element={<Configure />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="*" element={<FourOhFourPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
