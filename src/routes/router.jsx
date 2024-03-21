import React from "react";
import HomePage from "../pages/HomePage";

export default function router(isLogin) {
  if (isLogin) {
    return [{ path: "/home", element: <HomePage /> }];
  } else {
    return [{ path: "/home", element: <HomePage /> }];
  }
}
