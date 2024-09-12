// gh-pages route for deployment.
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingSEOPDemolicioes } from "./pages/seop-demolicoes/loading";
import { LoadingCivitas } from "./pages/civitas/loading";
import { LoadingObras } from "./pages/obras/loading";
import { LoadingSubsidioSPPO } from "./pages/subsidio-sppo/loading";
import { LoadingSeopCep } from "./pages/seop-cep/loading";
import { LoadingCarnaval2023 } from "./pages/carnaval-2023/loading";
import { LoadingPlanoVerao } from "./pages/plano-verao/loading";
import { LoadingPainelInvestimento } from "./pages/painel-investimentos/loading";
import { LoadingEnchentes } from "./pages/enchentes/loading";
import { LoadingMegaEventos } from "./pages/megaeventos/loading";
import { LoadingParques } from "./pages/parques/loading";
import MetaTags from "./metaTags";
import style, { createGlobalStyle } from "styled-components";
import mapboxCss from "mapbox-gl/dist/mapbox-gl.css";
import "./tailwind.css";

const Home = lazy(() => import("./pages/home/home"));
const StorySample = lazy(() => import("./pages/sandbox/sample"));
const VideoSandbox = lazy(() => import("./pages/sandbox/video"));
const SubsidioSPPO = lazy(() => import("./pages/subsidio-sppo/story"));
const Interactive = lazy(() => import("./pages/subsidio-sppo/interactive"));
const ObrasZO = lazy(() => import("./pages/obras/story"));
const TestLineChart = lazy(() => import("./pages/sandbox/test_linechart"));
const TestMap = lazy(() => import("./pages/sandbox/test_map"));
const SEOPDemolicoes = lazy(() => import("./pages/seop-demolicoes/story"));
const Civitas = lazy(() => import("./pages/civitas/story"));
const PainelAlagamentoPassadoComando = lazy(() =>
  import("./pages/painel-alagamento-passado-comando/story")
);
const PainelAlagamentoRecenteComando = lazy(() =>
  import("./pages/painel-alagamento-recente-comando/story")
);
const PainelChuva = lazy(() => import("./pages/painel-chuva/story"));
const RoutePath = lazy(() => import("./pages/route-path/story"));
const RoutePathNew = lazy(() =>
  import("./pages/route-path-new-response/story")
);

// const PainelChuvaPassadoPluviometroAlertario = lazy(() =>
//   import("./pages/painel-chuva-passado-pluviometro-alertario/story")
// );
// const PainelChuvaRecentePluviometroAlertario = lazy(() =>
//   import("./pages/painel-chuva-recente-pluviometro-alertario/story")
// );
const PainelChuva15MinPluviometroAlertario = lazy(() =>
  import("./pages/painel-chuva-15min-pluviometro-alertario/story")
);
const PainelChuva30MinPluviometroAlertario = lazy(() =>
  import("./pages/painel-chuva-30min-pluviometro-alertario/story")
);
const PainelChuva60MinPluviometroAlertario = lazy(() =>
  import("./pages/painel-chuva-60min-pluviometro-alertario/story")
);
const PainelChuva120MinPluviometroAlertario = lazy(() =>
  import("./pages/painel-chuva-120min-pluviometro-alertario/story")
);
const PainelChuva3HPluviometroAlertario = lazy(() =>
  import("./pages/painel-chuva-3h-pluviometro-alertario/story")
);
const PainelChuva6HPluviometroAlertario = lazy(() =>
  import("./pages/painel-chuva-6h-pluviometro-alertario/story")
);
const PainelChuva12HPluviometroAlertario = lazy(() =>
  import("./pages/painel-chuva-12h-pluviometro-alertario/story")
);
const PainelChuva24HPluviometroAlertario = lazy(() =>
  import("./pages/painel-chuva-24h-pluviometro-alertario/story")
);
const PainelChuva96HPluviometroAlertario = lazy(() =>
  import("./pages/painel-chuva-96h-pluviometro-alertario/story")
);
const PainelChuvaPassadoRadarINEA = lazy(() =>
  import("./pages/painel-chuva-passado-radar-inea/story")
);
const PainelChuvaRecenteRadarINEA = lazy(() =>
  import("./pages/painel-chuva-recente-radar-inea/story")
);

const CepSEOP = lazy(() => {
  return Promise.all([
    import("./pages/seop-cep/story"),
    new Promise((resolve) => setTimeout(resolve, 1)),
  ]).then(([moduleExports]) => moduleExports);
});

const Carnaval2023 = lazy(() => {
  return Promise.all([
    import("./pages/carnaval-2023/story"),
    new Promise((resolve) => setTimeout(resolve, 1)),
  ]).then(([moduleExports]) => moduleExports);
});

const VizPlanoVerao = lazy(() => {
  return Promise.all([
    import("./pages/plano-verao/story"),
    new Promise((resolve) => setTimeout(resolve, 1)),
  ]).then(([moduleExports]) => moduleExports);
});

const PainelInvestimento = lazy(() => {
  return Promise.all([
    import("./pages/painel-investimentos/story"),
    new Promise((resolve) => setTimeout(resolve, 1)),
  ]).then(([moduleExports]) => moduleExports);
});

const Enchentes = lazy(() => {
  return Promise.all([
    import("./pages/enchentes/story"),
    new Promise((resolve) => setTimeout(resolve, 1)),
  ]).then(([moduleExports]) => moduleExports);
});

const MegaEventos = lazy(() => {
  return Promise.all([
    import("./pages/megaeventos/story"),
    new Promise((resolve) => setTimeout(resolve, 4000)),
  ]).then(([moduleExports]) => moduleExports);
});

const Parques = lazy(() => {
  return Promise.all([
    import("./pages/parques/story"),
    new Promise((resolve) => setTimeout(resolve, 1)),
  ]).then(([moduleExports]) => moduleExports);
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  .mapboxgl-control-container {
    display: none !important;
  } 
`;

SEOPDemolicoes;
Civitas;
CepSEOP;

function App() {
  return (
    <div id={"main"}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<LoadingPainelInvestimento />}>
          <Routes>
            <Route
              path="/painel-investimentos"
              element={<PainelInvestimento />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/alagamento-passado-comando"
              element={<PainelAlagamentoPassadoComando />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/alagamento-recente-comando"
              element={<PainelAlagamentoRecenteComando />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/chuva" element={<PainelChuva />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/routepath" element={<RoutePath />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/routepathnew" element={<RoutePathNew />}></Route>
          </Routes>
        </Suspense>
        {/* <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-passado-pluviometro-alertario"
              element={<PainelChuvaPassadoPluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-recente-pluviometro-alertario"
              element={<PainelChuvaRecentePluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense> */}
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-15min-pluviometro-alertario"
              element={<PainelChuva15MinPluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-30min-pluviometro-alertario"
              element={<PainelChuva30MinPluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-60min-pluviometro-alertario"
              element={<PainelChuva60MinPluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-120min-pluviometro-alertario"
              element={<PainelChuva120MinPluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-3h-pluviometro-alertario"
              element={<PainelChuva3HPluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-6h-pluviometro-alertario"
              element={<PainelChuva6HPluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-12h-pluviometro-alertario"
              element={<PainelChuva12HPluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-24h-pluviometro-alertario"
              element={<PainelChuva24HPluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-96h-pluviometro-alertario"
              element={<PainelChuva96HPluviometroAlertario />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-passado-radar-inea"
              element={<PainelChuvaPassadoRadarINEA />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route
              path="/chuva-recente-radar-inea"
              element={<PainelChuvaRecenteRadarINEA />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingSEOPDemolicioes />}>
          <Routes>
            <Route
              path="/especial-seop/demolicoes"
              element={<SEOPDemolicoes />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingCivitas />}>
          <Routes>
            <Route
              path="/civitas"
              element={<Civitas />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingObras />}>
          <Routes>
            <Route path="/obras" element={<ObrasZO />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingEnchentes />}>
          <Routes>
            <Route path="/enchentes" element={<Enchentes />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingMegaEventos />}>
          <Routes>
            <Route path="/megaeventos" element={
              <>
                <MetaTags
                  title="Megaeventos"
                  description="Descubra como a Prefeitura do Rio de Janeiro se beneficia de megaeventos para melhorar a cidade."
                  thumbnail="./src/pages/megaeventos/images/capa_megaeventos.png"
                />
                <MegaEventos />
              </>
            }
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingParques />}>
          <Routes>
            <Route path="/parques" element={<Parques />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingCarnaval2023 />}>
          <Routes>
            <Route
              path="/especial-carnaval/2023"
              element={<Carnaval2023 />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingPlanoVerao />}>
          <Routes>
            <Route path="/plano-verao" element={<VizPlanoVerao />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingSeopCep />}>
          <Routes>
            <Route path="/especial-seop/cep" element={<CepSEOP />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingSubsidioSPPO />}>
          <Routes>
            <Route
              path="/especial-sppo/subsidio"
              element={<SubsidioSPPO />}
            />
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sandbox/sample" element={<StorySample />} />
            <Route path="/sandbox/video" element={<VideoSandbox />} />
            <Route
              path="/especial-sppo/interactive"
              element={<Interactive />}
            ></Route>
            <Route
              path="/sandbox/test-linechart"
              element={<TestLineChart />}
            ></Route>
            <Route path="/sandbox/test-map" element={<TestMap />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
export default App;
