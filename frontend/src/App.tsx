import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MainLayout from "./components/MainLayout";
import Test from "./components/Test";

import { getActivities, getTags, getLocations, getUsers } from "./api";
import LoginPage from "./pages/LoginPage";

function App() {
  const [activities, setActivities] = useState<Activity[]>([] as Activity[]);

  async function loadActivities() {
    setActivities(await getActivities());
  }

  useEffect(() => {
    loadActivities();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage activities={activities} />} />
          <Route
            path="search"
            element={<SearchPage activities={activities} />}
          />

          <Route path="login" element={<LoginPage />} />
          <Route path="profile" />
          <Route path="edit-user/:userId" />
          <Route path=":userId/tasks" />
        </Route>
        <Route path="/admin">
          <Route path="act" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
