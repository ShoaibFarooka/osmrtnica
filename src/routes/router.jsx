import React from "react";
import HomePage from "../pages/HomePage";
import FloristsListing from "../pages/FloristsPage";

export default function router(isLogin) {
  if (isLogin) {
    return [
      { path: "/home", element: <HomePage /> },
      { path: "/florist", element: <FloristsListing /> },
    ];
  } else {
    return [
      { path: "/home", element: <HomePage /> },
      { path: "/florist", element: <FloristsListing /> },
    ];
  }
}
