import React from "react";
import HomePage from "../pages/HomePage";
import FloristsListing from "../pages/FloristsPage";
import Funeral from "../pages/FuneralPage";

export default function router(isLogin) {
  if (isLogin) {
    return [
      { path: "/home", element: <HomePage /> },
      { path: "/florist", element: <FloristsListing /> },
      { path: "/funeral", element: <Funeral /> },
    ];
  } else {
    return [];
  }
}
