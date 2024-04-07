import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page-content flex flex-col gap-10">
      <img src="/404.png" alt="notfound" className="image" />
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
