import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/auth";
import { userGetAll } from "../store/user/user-slice";
import { useDispatch } from "react-redux";
import err from "../assets/404.png";
const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("12345678");

    const { access_token } = getToken();
    dispatch(userGetAll(access_token));
  });
  return (
    <div className="flex flex-col items-center gap-10 mt-14">
      <img src={err} alt="notfound" className="w-[300px]" />
      <h1 className="text-3xl text-gray-700 font-bold">
        404 - Looks like you're lost.
      </h1>
      <p className="text-gray-600">
        Maybe this page used to exist or you just spelled something wrong.
        Chances are your spelled something wrong, so can you double check the
        URL?
      </p>
      <button
        className="inline-block text-lg font-medium text-white bg-primary px-8 py-4 rounded-xl w-[250px] mx-auto"
        onClick={() => navigate("/")}
      >
        Go back
      </button>
    </div>
  );
};

export default PageNotFound;
