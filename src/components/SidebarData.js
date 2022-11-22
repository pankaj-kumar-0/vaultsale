import React from "react";

const SidebarData = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "Create Token",
    path: "/create_token",
  },

  {
    title: "Presales",
    path: "/presales",

    subNav: [
      {
        title: "Create Presales",
        path: "/presales/create_preasles",
      },
      {
        title: "All Presales",
        path: "/presales/all_preasles",
      },
    ],
  },

  {
    title: "Liquidity Locker",
    path: "/liquidity_locker",

    subNav: [
      {
        title: "Lock Tocken/LP",
        path: "/liquidity_locker/lock_tocken",
      },
      {
        title: "All Lockers",
        path: "/liquidity_locker/all_lockers",
      },
    ],
  },

  {
    title: "Leaderboard",
    path: "/leaderboard",
  },
  {
    title: "Guides",
    path: "/guides",
  },
];


export default SidebarData ;