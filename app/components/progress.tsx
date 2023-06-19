"use client";
// import { useEffect } from "react";
// import { Router } from "next/router";
// import ProgressBar from "@badrap/bar-of-progress";
import NextNProgress from "nextjs-progressbar";

export default function Progress() {
  // const progress = new ProgressBar({
  //   size: 4,
  //   color: "#FE595E",
  //   className: "z-50",
  //   delay: 100,
  // });

  // useEffect(() => {
  //   Router.events.on("routeChangeStart", progress.start);
  //   Router.events.on("routeChangeComplete", progress.finish);
  //   Router.events.on("routeChangeError", progress.finish);
  // });
  return (
    <>
      <NextNProgress height={8} color="#209cee" />
    </>
  );
}
