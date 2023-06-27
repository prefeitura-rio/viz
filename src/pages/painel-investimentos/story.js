// Mandatory
import { useEffect, useState, useRef } from "react";

// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";

export default function PainelInvestimento() {
  useEffect(() => {
    document.title = "Painel de Investimentos da Prefeitrura do Rio de Janeiro";
  }, []);

  const vh = (coef) => window.innerHeight * (coef / 100);
  const vw = (coef) => window.innerWidth * (coef / 100);

  useEffect(() => {
    // gsap.defaults({ ease: "none" });
  }, []);

  return (
    <>
      <chapterDiv.Capa id={"capa"} />
      {/* <chapterDiv.Creditos id={"creditos"} /> */}
    </>
  );
}
