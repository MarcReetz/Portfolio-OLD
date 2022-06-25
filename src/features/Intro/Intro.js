import React from "react";
import { useTranslation } from "react-i18next";

export default function Intro () {
  const { t } = useTranslation();

  return (
    <section id="Intro">
      <h1>Hi, <br/> I'm Marc Reetz</h1>
      <h3>{t("intro_text")}</h3>
    </section>
  )
}