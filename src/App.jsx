import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./Redux/reducers/slices/authSlice";
import router from "./routes/router";
import { NextUIProvider } from "@nextui-org/react";
import "typeface-roboto";

const AppWraper = () => {
  const auth = useSelector((state) => state.auth.loginSuccess);
  return useRoutes(router(true));
};

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      <NextUIProvider>
        <Router>
          <div className="font-roboto font-[400] ">
            <AppWraper />
          </div>
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
