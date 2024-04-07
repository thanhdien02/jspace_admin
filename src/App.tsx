import { Suspense, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./page/AdminPage/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<p></p>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
