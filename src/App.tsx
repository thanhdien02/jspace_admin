import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AdminLoginPage from "./page/AdminLoginPage";
import AdminDashBoard from "./page/AdminDashBoard";
import PageNotFound from "./page/PageNotFound";
import LayoutAdminManagement from "./layout/LayoutAdminManagement";
import AdminManageUser from "./page/AdminManageUser";
import AdminCreateSubAdmin from "./page/AdminCreateSubAdmin";
import AdminConfirmCreateSubAdmin from "./page/AdminConfirmCreateSubAdmin";
import AdminManageCompany from "./page/AdminManageCompany";
import AdminManageApproveApplicationCompany from "./page/AdminManageApproveApplicationCompany";
import AdminChangePasswordPage from "./page/AdminChangePasswordPage";
import AdminManageProductPage from "./page/AdminManageProductPage";
import AdminManageHistoryProductPurchasePage from "./page/AdminManageHistoryProductPurchasePage";

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
            <Route
              path="/admin/add-subadmin"
              element={<AdminCreateSubAdmin></AdminCreateSubAdmin>}
            ></Route>
            <Route
              path="/admin/company"
              element={<AdminManageCompany></AdminManageCompany>}
            ></Route>
            <Route
              path="/admin/approve-company"
              element={
                <AdminManageApproveApplicationCompany></AdminManageApproveApplicationCompany>
              }
            ></Route>
            <Route
              path="/admin/change-password"
              element={<AdminChangePasswordPage></AdminChangePasswordPage>}
            ></Route>
            <Route
              path="/admin/manage-products"
              element={<AdminManageProductPage></AdminManageProductPage>}
            ></Route>
            <Route
              path="/admin/manage-history-product-purchase"
              element={
                <AdminManageHistoryProductPurchasePage></AdminManageHistoryProductPurchasePage>
              }
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
