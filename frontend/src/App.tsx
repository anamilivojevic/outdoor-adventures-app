import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MainLayout from "./components/MainLayout";
import AdminLayout from "./components/adminComponents/AdminLayout";
import Test from "./components/Test";
import AdminHomePage from "./pages/adminPages/AdminHomePage";
import AdminActPage from "./pages/adminPages/AdminActPage";
import AdminTagPage from "./pages/adminPages/AdminTagPage";
import AdminLocPage from "./pages/adminPages/AdminLocPage";
import AdminCompPage from "./pages/adminPages/AdminCompPage";

import {
  getActivities,
  postActivity,
  putActivity,
  deleteActivity,
  getTags,
  getLocations,
  getUsers,
} from "./api";
import LoginPage from "./pages/LoginPage";

function App() {
  const [activities, setActivities] = useState<Activity[]>([] as Activity[]);

  async function loadActivities() {
    setActivities(await getActivities());
  }

  async function addActivity(act: Activity) {
    console.log("From App posting activity ");
    const newActivity = await postActivity(act);
    console.log(newActivity);
    loadActivities();
  }

  async function updateActivity(actId: number, act: Activity) {
    console.log(act);
    console.log("From App updating activity " + actId);
    const updatedActivity = await putActivity(actId, act);
    console.log(updatedActivity);
    loadActivities();
  }

  async function removeActivity(actId: number) {
    console.log("Deleting App updating activity " + actId);
    await deleteActivity(actId);
    loadActivities();
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
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<AdminHomePage />} />
          <Route
            path="act"
            element={
              <AdminActPage
                activities={activities}
                onAdd={addActivity}
                onUpdate={updateActivity}
                onDelete={removeActivity}
              />
            }
          />
          <Route path="tag" element={<AdminTagPage />} />
          <Route path="loc" element={<AdminLocPage />} />
          <Route path="comp" element={<AdminCompPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
