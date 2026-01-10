"use client";

import Section_hero from "./ui/sections/hero"
import Section_about from "./ui/sections/about"
import Section_features from "./ui/sections/features"
import Section_benefits from "./ui/sections/benefits"
import Section_contact from "./ui/sections/contact"
import Section_envirionments from "./ui/sections/typeEnvirionment"

export default function Home() {
  return (
    <>
      <Section_hero/>
      <Section_about/>
      <Section_envirionments/>
      <Section_features/>
      <Section_benefits/>
      <Section_contact/>
    </>
  );
}