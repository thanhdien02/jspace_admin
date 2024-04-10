import React, { useEffect } from "react";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { authFetchMe } from "../store/auth/auth-slice";

const AdminDashBoard: React.FC = () => {
  const { accessToken } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  //Load information user
  useEffect(() => {
    if (accessToken == "") {
      dispatch(authFetchMe());
    }
  }, []);

  return (
    <>
      <div className="example">
        <Spin />
      </div>
    </>
  );
};

export default AdminDashBoard;
