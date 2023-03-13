import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MainLayout from "./components/MainLayout";

import { getActivities, getTags, getLocations, getUsers } from "./api";

function App() {
  async function getAct() {
    console.log(await getActivities());
    console.log(await getActivities(1));

    console.log(await getTags());
    console.log(await getTags(1));

    console.log(await getLocations());
    console.log(await getLocations(1));

    console.log(await getUsers());
    console.log(await getUsers(1));
  }

  getAct();

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="login" />
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
