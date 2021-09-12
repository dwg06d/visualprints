import React from "react";
import BiosA from "../components/artistbios/Aron.jsx";
import BiosD from "../components/artistbios/David.jsx";
import BiosL from "../components/artistbios/Luis.jsx";
import BiosT from "../components/artistbios/Tylor.jsx";

export default function About() {
  return (
    <div>
      <h1>A Little About Us</h1>
      <BiosA />
      <BiosD />
      <BiosL />
      <BiosT />
    </div>
  );
}
