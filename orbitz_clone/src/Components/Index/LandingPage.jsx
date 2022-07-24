import React from "react";
import { First } from "./First";
import { Secound } from "./Secound";
import { Featuredoffers } from "./Featuredoffers";
import Options from "./Options";
import { Navbar } from "../Navbar/Navbar";
import Reward from "./Reward";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <First />
      <Secound />
      <Featuredoffers />
      <Options />
      <Reward />
    </div>
  );
};
