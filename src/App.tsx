import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "./page/AdminLoginPage";
import AdminDashBoard from "./page/AdminDashBoard";
import PageNotFound from "./page/PageNotFound";
import LayoutAdminManagement from "./layout/LayoutAdminManagement";
import AdminManageUser from "./page/AdminManageUser";

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route element={<LayoutAdminManagement></LayoutAdminManagement>}>
            <Route path="/" element={<AdminDashBoard></AdminDashBoard>}></Route>
            <Route
              path="/admin/user"
              element={<AdminManageUser></AdminManageUser>}
            ></Route>
          </Route>
          <Route
            path="/login"
            element={<AdminLoginPage></AdminLoginPage>}
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
