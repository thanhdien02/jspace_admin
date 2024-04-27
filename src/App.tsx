import { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminLoginPage from "./page/AdminLoginPage";
import AdminDashBoard from "./page/AdminDashBoard";
import PageNotFound from "./page/PageNotFound";
import LayoutAdminManagement from "./layout/LayoutAdminManagement";
import AdminManageUser from "./page/AdminManageUser";
import AdminCreateSubAdmin from "./page/AdminCreateSubAdmin";
import AdminConfirmCreateSubAdmin from "./page/AdminConfirmCreateSubAdmin";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./utils/auth";
import { authFetchMe } from "./store/auth/auth-slice";

function App() {
  const { accessToken, message } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken == "") {
      const token = getToken();
      if (token?.accessToken == "null" || message == "unauthenticated") {
        navigate("/login");
      }
      dispatch(authFetchMe());
    }
  }, [message, accessToken]);
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
            <Route
              path="/admin/add-subadmin"
              element={<AdminCreateSubAdmin></AdminCreateSubAdmin>}
            ></Route>
          </Route>
          <Route
            path="/login"
            element={<AdminLoginPage></AdminLoginPage>}
          ></Route>
          <Route
            path="/create/confirm"
            element={<AdminConfirmCreateSubAdmin></AdminConfirmCreateSubAdmin>}
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
