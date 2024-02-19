import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";

// IMAGENS
import logo from "../images/logo.png";
import exemplo1 from "../images/exemplo1.png";
import exemplo2 from "../images/exemplo2.png";
import seop1 from "../images/seop1.png";
import seop2 from "../images/seop2.png";
import seop3 from "../images/seop3.png";
import seop4 from "../images/seop4.png";
import grafico from "../images/grafico.png";
import legenda from "../images/legenda.png";
import logoed from "../images/logoed.png";
import gif from "../images/gif.gif";

// TODO: REMOVE
import LineChart from "../../../components/charts/line_chart";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Capa(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.CapaDiv id={props.id} ref={props.chapRef}>
      <img src={logo} className="w-36 mt-[2vh] lg:w-52"></img>
      <div><styles.Title>
      Plano Verão: As iniciativas da Prefeitura do Rio de Janeiro na prevenção de enchentes
      </styles.Title>
      {/* <styles.Subtitle>
        Segurança para os moradores, Prejuízo para o crime organizado,
        Preservação das áreas verdes
      </styles.Subtitle> */}
      <div>
        <styles.AuthorText>
          Desenvolvido pelo{" "}
          <a
            className="font-bold underline"
            href="https://www.dados.rio/"
            target="_blank"
            rel="noreferrer"
          >
          Escritório de Dados  
          </a>
          {" "}
          da Prefeitura da Cidade do Rio de Janeiro
        </styles.AuthorText>
        </div>        
      </div>
      <div>
          <styles.Button>
          <a
            className="font-bold underline"
            href="https://mapa-realizacoes-dev.dados.rio/"
            target="_blank"
            rel="noreferrer"
          >Veja o mapa completo  
          </a>
          </styles.Button>
      </div>
    </styles.CapaDiv>
  );
}

export function Intro(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv style={{paddingBottom:"100vh"}} ref={props.chapRef} id={props.id}>     
      {/* <styles.IntroTitle id={"intro"}>Como tudo começou</styles.IntroTitle> */}
      <styles.IntroText>
        Dados do Alerta Rio, sistema de alerta de chuvas intensas e de deslizamentos em encostas do Rio de Janeiro, mostram que nunca choveu tanto na nossa cidade.
        <br /> <br />
        Uma análise, com base nos dados de ocorrências registradas pelo Centro de Operações Rio (COR) desde 2018, revela que a cidade já enfrentou pelo menos <styles.Textgrey>4.031 incidentes causados pelas chuvas.</styles.Textgrey> 
        <br /> <br />
        Por isso, a Prefeitura do Rio implementou um planejamento específico para o período de maior incidência de chuvas, o verão carioca.<styles.Textgrey>Desde 2021, a cidade conta com o Plano Verão, cujo objetivo é minimizar os impactos das chuvas.</styles.Textgrey> Trinta órgãos municipais, incluindo secretarias, empresas públicas e subprefeituras, trabalham na implementação dessas ações.
        <br /> <br />
        Neste especial do Escritório de Dados, explicaremos como o Plano Verão se tornou uma medida essencial no preparo do Rio para os impactos das chuvas.
      </styles.IntroText>
      <br /> <br /><br /> <br /><br /> <br />
      <styles.IntroTitle>
        O Plano Verão
      </styles.IntroTitle>
      <styles.IntroText>
        O Plano Verão tem como <styles.Textgrey>principal foco a contenção de encostas, a execução de programas de infraestrutura e a aquisição de tecnologias </styles.Textgrey>destinadas a aprimorar a capacidade de resposta aos desafios provocados pelas chuvas.
        <br /><br />
        Estas <styles.Textgrey>diversas iniciativas foram estrategicamente distribuídas nas áreas mais críticas da cidade,</styles.Textgrey> identificadas por meio de constante monitoramento e estudos.
        <br /><br />
        As medidas para mitigar os efeitos podem ser tomadas antes, durante ou como planejamento de obras específicas contra enchentes e alagamentos.
        <br /><br />
        A seguir, você verá uma série de ações realizadas pela Prefeitura para combater este problema.
      </styles.IntroText>
      <br /> <br /><br /> <br /><br /> <br />
      <styles.IntroTitle>
        O Centro de Operações Rio
      </styles.IntroTitle>
      <styles.NewsImage src={seop2}></styles.NewsImage>
        <styles.Credito>
          Divulgação: Centro de Operações Rio
        </styles.Credito> 
      <styles.IntroText>
        <styles.Textgrey>O COR é o órgão responsável por monitorar e integrar a cidade em áreas essenciais como mobilidade urbana e meteorologia.</styles.Textgrey>Referência na América Latina, foi inaugurado em 2010 como o primeiro equipamento olímpico entregue pela Prefeitura do Rio à cidade, e seu legado permanece até hoje, <styles.Textgrey>funcionando 24 horas por dia, sete dias por semana.</styles.Textgrey>
        <br /><br />
        Utilizando radares meteorológicos, o COR monitora as condições climáticas e avisa aos órgãos parceiros sobre chuvas, ativando uma rede de ações em tempo real durante mudanças na mobilidade. 
        <br /><br />
        Além de ações em tempo real, é responsável por administrar as ações do Plano Verão e definir, em conjunto com outros órgãos, as ações que serão realizadas para combater enchentes e outros desastres ocasionados pelas chuvas.
        <br /><br />
        <styles.Textgrey>Com investimentos em novas tecnologias, o COR ampliou sua sala de monitoramento em 40%, </styles.Textgrey>composta atualmente por 125 telas de 55 polegadas em alta resolução.<styles.Textgrey> O número de câmeras de monitoramento espalhadas pela cidade também cresceu para 3.500</styles.Textgrey>
      </styles.IntroText>
      {/* <styles.ContainerVideo>
        <styles.TextCard1>
        <iframe src="https://res.cloudinary.com/doueg88fj/video/upload/v1707233408/video1_x47qst.mp4" height="530"></iframe>
        </styles.TextCard1>
      </styles.ContainerVideo> */}
    </styles.IntroDiv>
  );
}

export function Zoom(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
      <styles.TextCard5><styles.Textyellow>Novas ferramentas</styles.Textyellow></styles.TextCard5>
        <br />
        <styles.TextCard1>
        Outra inovação é a contratação do Sistema de Monitoramento e Alerta de Descargas Atmosféricas e Tempestades Severas. A ferramenta foi testada pelo Rio no último verão, quando a cidade contabilizou 31.900 raios atingindo o município entre os meses de janeiro e março. 
      <br /> <br />
      Já a Defesa Civil operacionalizou mais uma ferramenta de comunicação preventiva aos moradores que vivem em áreas de alto risco geológico. Avisos sonoros serão emitidos por sirenes localizadas em 103 comunidades. O objetivo é alertar a população, antecipadamente, que não possuem acesso aos meios de comunicação de massa sobre a chegada de chuva forte no município. O aviso será feito com base nas previsões meteorológicas do Sistema Alerta Rio, órgão de meteorologia da Prefeitura do Rio. </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv2>
  );
}

export function Prejuizo(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.Grid>
          <styles.Grid1>
            <styles.BigNumber>R$</styles.BigNumber>
            <styles.BigNumber id="number">0</styles.BigNumber>
            <styles.BigNumber1>Bilhões</styles.BigNumber1>
          </styles.Grid1>
          <styles.TextCard>
          Este é o investimento total do Plano Verão desde 2021. Ao todo, o programa já implementou 308 <styles.TextblueOne>ações</styles.TextblueOne> preventivas na cidade. A localidade de algumas destas ações você consegue conferir neste mapa.
          </styles.TextCard>
        </styles.Grid>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Cor(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
      <styles.TextCard2><styles.Textyellow>Centro de Operações</styles.Textyellow></styles.TextCard2>
        <br /> 
        <styles.NewsImage src={seop2}></styles.NewsImage>
        <styles.Credito>
          Divulgação: Centro de Operações Rio
        </styles.Credito>  
        <styles.TextCard1>
        Para se manter na vanguarda do que há de mais avançado em monitoramento no mundo, o Centro de Operações Rio (COR) investiu em novas aquisições tecnológicas. Após ampliar em 40% seu vídeo wall, que passou a ter 104 metros quadrados, composto por 125 telas de 55 polegadas e em alta resolução, um novo radar meteorológico foi adquirido.
        <br /> <br />
        O número de câmeras de monitoramento da cidade, que permitem um melhor planejamento durante os eventos também apresentou um crescimento. Em 2022 eram duas mil e, agora, já são três mil e quinhentas. 
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv2>
  );
}

export function CorUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerVideo>
        <styles.TextCard1>
        <iframe src="https://res.cloudinary.com/doueg88fj/video/upload/v1707233408/video1_x47qst.mp4" height="530"></iframe>
        </styles.TextCard1>
      </styles.ContainerVideo>
    </styles.ChapterGenericDiv2>
  );
}

export function Exemplo0(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
      <styles.TextCard5><styles.Textyellow>Dragagem dos rios</styles.Textyellow></styles.TextCard5>
        <br /> 
        <styles.TextCard1>
        Uma das ações mais importantes é a de <styles.TextblueOne>dragagem dos rios.</styles.TextblueOne> A ação é necessária para a retirada de sedimentos no fundo dos rios. A ação é necessária para garantir o escoamento das chuvas e evitar inundações. 
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}
export function Exemplo00(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDivInvisivel ref={props.chapRef} id={props.id}>
      {/* <styles.ContainerCard1>
      <styles.TextCard5><styles.Textyellow>Dragagem dos rios</styles.Textyellow></styles.TextCard5>
        <br /> 
        <styles.TextCard1>
        Uma das ações mais importantes é a de <styles.TextblueOne>dragagem dos rios.</styles.TextblueOne> A ação é necessária para a retirada de sedimentos no fundo dos rios. A ação é necessária para garantir o escoamento das chuvas e evitar inundações. 
        </styles.TextCard1>
      </styles.ContainerCard1> */}
    </styles.ChapterGenericDivInvisivel>
  );
}

export function Exemplo0um(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
        Em 2023, o investimento em dragagem de rios já totalizou a retirada de <styles.Textgrey>555,4 mil toneladas de lixo.</styles.Textgrey> O volume de lixo retirado nas ações foi o equivalente à <styles.Textgrey>46.283 caminhões cheios.</styles.Textgrey> O número recorde é cinco vezes maior que o retirado em 2018, quando 114 mil toneladas foram retiradas.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Exemplo0dois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
        As ações foram feitas nos principais rios da cidade, como o Rio Acari, o Rio Ita (Santa Cruz), o Rio Campinho (Campo Grande).
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Exemplo1(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
      <styles.TextCard2><styles.Textyellow>Desassoreamento do Rio Acari</styles.Textyellow></styles.TextCard2>
        <br /> 
        <styles.NewsImage src={exemplo1}></styles.NewsImage>
        <styles.Creditoum>
          Divulgação: Fundação Rio-Águas
        </styles.Creditoum>  
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Exemplo1um(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
        Um dos principais rios da Zona Norte, o Rio Acari teve os serviços de limpeza e desassoreamento concluídos em julho de 2023. Com um investimento de R$ 8,7 milhões, os trabalhos cobriram a extensão de 3,1 km de rio e <styles.TextblueOne>retiraram mais de 191 mil toneladas de material do canal,</styles.TextblueOne> que representam em torno de 16 mil caminhões basculantes de 12 toneladas, <styles.TextblueOne>beneficiando 287.930 cariocas</styles.TextblueOne> que residem em seu entorno.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Exemplo2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
      <styles.TextCard5><styles.Textyellow>Obras de drenagem</styles.Textyellow></styles.TextCard5>
        <br />
        <styles.TextCard1>
        Foram investidos R$ 9,8 milhões em <styles.TextblueOne>obras de drenagem</styles.TextblueOne> para eliminação de pontos críticos de alagamento na cidade. Os serviços foram executados na Avenida Borges de Medeiros, na Rua Alexandre Calaza e nas estradas da Pedra e do Catonho, onde os trabalhos entraram na reta final. No total, mais de 1,6 km de drenagem estão sendo executadas.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv2>
  );
}

export function Exemplo2um(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
        Na intersecção entre as estradas do Catonho e Cafundá, o aumento da capacidade de escoamento das galerias pluviais solucionará o problema crônico de alagamento que motoristas e pedestres enfrentam em dias de chuvas fortes. Mais de 7,6 mil metros quadrados de drenagem estão sendo recuperados. Além disso, as calçadas estão sendo reconstruídas para melhorar a mobilidade e a acessibilidade. Por fim, o trecho ganhará nova pavimentação.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv2>
  );
}

export function Exemplo3(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
      <styles.TextCard2><styles.Textyellow>Obra de drenagem no entorno do Mercadão de Madureira</styles.Textyellow></styles.TextCard2>
        <styles.NewsImage src={exemplo2}></styles.NewsImage>
        <styles.Creditoum>
        Divulgação: Fundação Rio-Águas
        </styles.Creditoum>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv2>
  );
}

export function Exemplo3um(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>As obras de drenagem foram iniciadas em novembro de 2022 para eliminar um ponto de alagamento na Rua Conselheiro Galvão, em Madureira, próximo ao Mercadão de Madureira, na Zona Norte da cidade. Foram implantados 400 metros de nova rede de drenagem na via, com isso, aumentará a capacidade das galerias pluviais e reduzirá bolsões d'água em um dos acessos do Mercadão.</styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv2>
  );
}

export function Exemplo3dois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>Com um investimento de R$ 10,1 milhões, <styles.TextblueOne>a obra beneficiará 38.366 moradores da região.</styles.TextblueOne></styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv2>
  );
}

export function Seop3(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
      <styles.TextCard2><styles.Textyellow>Novo radar meteorológico do Rio</styles.Textyellow></styles.TextCard2>
        <styles.NewsImage src={seop3}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>        
        <br />
        <styles.TextCard1>
        Com um investimento de R$ 6,8 milhões, via Parceria Público-Privada firmada pela Rioluz, o radar de tecnologia ‘banda X’, é considerado o mais moderno em equipamentos deste tipo e que entrará em dezembro em operação. O novo equipamento é capaz de fazer a leitura de chuva de granizo com antecedência de até três horas e será instalado na Serra do Mendanha, na Zona Oeste.
        <br /> <br />
        O Rio passa a ser o primeiro município do país a contar com dois radares meteorológicos próprios. As imagens dos equipamentos, assim como já acontece com o que está instalado no Morro do Sumaré, serão disponibilizadas para a população do Rio.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv2>
  );
}

export function Seop2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDivGigante  style={{paddingTop:"230vh"}} ref={props.chapRef} id={props.id}>
      <styles.IntroTitle>
        Novas ferramentas
      </styles.IntroTitle>
      <styles.IntroText>
      Outra inovação é a contratação do Sistema de Monitoramento e Alerta de Descargas Atmosféricas e Tempestades Severas. A ferramenta foi testada pelo Rio no último verão, quando a cidade contabilizou 31.900 raios atingindo o município entre os meses de janeiro e março.
      <br /> <br />
      Já a Defesa Civil operacionalizou mais uma ferramenta de comunicação preventiva aos moradores que vivem em áreas de alto risco geológico. Avisos sonoros serão emitidos por sirenes localizadas em 103 comunidades. O objetivo é alertar a população, antecipadamente, que não possuem acesso aos meios de comunicação de massa sobre a chegada de chuva forte no município. O aviso será feito com base nas previsões meteorológicas do Sistema Alerta Rio, órgão de meteorologia da Prefeitura do Rio.
      </styles.IntroText>
      <br /> <br /><br /> <br /><br /> <br />
      <styles.IntroTitle>
      Novo radar meteorológico do Rio
      </styles.IntroTitle>
      <styles.IntroText>
      <styles.NewsImage src={seop3}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>        
        <br />
        <styles.TextCard1>
        Com um investimento de R$ 6,8 milhões, via Parceria Público-Privada firmada pela Rioluz, o radar de tecnologia ‘banda X’, é considerado o mais moderno em equipamentos deste tipo e que entrará em dezembro em operação. O novo equipamento é capaz de fazer a leitura de chuva de granizo com antecedência de até três horas e será instalado na Serra do Mendanha, na Zona Oeste.
        <br /> <br />
        O Rio passa a ser o primeiro município do país a contar com dois radares meteorológicos próprios. As imagens dos equipamentos, assim como já acontece com o que está instalado no Morro do Sumaré, serão disponibilizadas para a população do Rio.
        </styles.TextCard1></styles.IntroText>
        <styles.NewsImage src={gif}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>  
        <div>
          <styles.Button>
          <a
            className="font-bold underline"
            href="https://mapa-realizacoes-dev.dados.rio/"
            target="_blank"
            rel="noreferrer"
          >Veja o mapa completo
          </a>
          </styles.Button>
      </div>
    </styles.IntroDivGigante>
  );
}

export function BairroMaravilha(props = { id: "", chapRef: null }) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
      <styles.TextCard2><styles.Textyellow>Bairro Maravilha: Rua Francisco Fragoso</styles.Textyellow></styles.TextCard2>
        <ImgComparisonSlider hover="hover" tabindex="0" class="rendered border-[2px] border-black">
          <img
            slot="first"
            src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/obras/BM%20ANTES.jpg"
          />
          <img
            slot="second"
            src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/obras/BM%20DEPOIS.jpg"
          />
          <svg slot="handle" class="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
            <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
          </svg>
        </ImgComparisonSlider>
        <styles.Creditoum>
          Divulgação: Prefeitura da Cidade do Rio Janeiro / Marcos de Paula
        </styles.Creditoum>       
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function BairroMaravilhaUm(props = { id: "", chapRef: null }) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
      <styles.TextCard1>
      Outro projeto que atua diretamente na prevenção das chuvas é o Bairro Maravilha, responsável por urbanizar e levar infraestrutura à população. Já são 92 localidades beneficiadas e, até o fim de 2023, serão 49 km de ruas requalificadas, com R$ 977 milhões em investimentos no total.
      </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function BairroMaravilhaDois(props = { id: "", chapRef: null }) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1um ref={props.chapRef} id={props.id}>
      <styles.ContainerVideo>
        <styles.TextCard1>
        <iframe src="https://res.cloudinary.com/doueg88fj/video/upload/v1707233405/video2_e5mexn.mp4" height="530"></iframe>
        </styles.TextCard1>
      </styles.ContainerVideo>
    </styles.ChapterGenericDiv1um>
  );
}


export function Mapa(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard1>
          Manguinhos (219 demolições), Recreio dos Bandeirantes (214
          demolições), Gardênia Azul (178 demolições), Jacarepaguá (90
          demolições) e Campo Grande (67 demolições) foram os cinco bairros com
          mais ações realizadas. Outros bairros localizados na Zona Sul, como
          Botafogo (33 demolições) e São Conrado (27 demolições), e da Zona
          Norte, como Del Castilho (38 demolições) e Mangueira (14 demolições)
          também tiveram construções irregulares identificadas e demolidas pelo
          poder público.
        </styles.TextCard1>
        <styles.NewsImage1 src={legenda}></styles.NewsImage1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Fim(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDivum ref={props.chapRef} id={props.id}>
      {/* <styles.IntroTitle id={"fimTitle"}>Próximos passos</styles.IntroTitle> */}
      <styles.TextCard3><styles.Textblack>Prefeito</styles.Textblack></styles.TextCard3>
      <styles.IntroText1>Eduardo Paes</styles.IntroText1>
      <br /> <br />
      <styles.TextCard3><styles.Textblack>Autores</styles.Textblack></styles.TextCard3>
      <styles.IntroText1>Caio Jacintho<br />João Carabetta<br />João Marcelo Ferraz<br />Judite Cypreste<br />Lucas Tavares</styles.IntroText1>
      <br /> <br />
      <styles.TextCard3><styles.Textblack>Agradecimentos</styles.Textblack></styles.TextCard3>
      <styles.IntroText1>Diego Oliveira<br />Gabriela Hilário<br />Joice Nascimento<br />Ramon Carnaval</styles.IntroText1>
      <a href={"https://www.dados.rio/"}>
        <img
          src={logoed}
          className="w-44 mt-[200px] mb-[200px] lg:mt-[200px] lg:w-56"
        ></img>
      </a>
    </styles.IntroDivum>
  );
}

export function Oeste(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDivMaior ref={props.chapRef} id={props.id}>
      {/* <styles.IntroTitle id={"zonaOesteTitle"}>
        Onde estão localizadas as construções irregulares
      </styles.IntroTitle> */}
      <styles.IntroText>
      <styles.IntroTitle>Obras de Contenção</styles.IntroTitle>
      Também <styles.Textgrey>foram investidos cerca de R$ 35 milhões somente nas obras de contenção nas grandes vias </styles.Textgrey>com protocolos de fechamento nos dias de fortes chuvas. Com isso, foram registrados menos problemas com deslizamentos de terra nos últimos temporais. Nos últimos três anos <styles.Textgrey>conseguimos fazer a contenção de 880 mil metros quadrados em áreas de alto risco em comunidades cariocas, o equivalente a 107 campos de futebol.</styles.Textgrey>
      <br /><br /><br />
      <styles.IntroTitle>Obras de Drenagem</styles.IntroTitle>
      Com um investimento de R$ 9,8 milhões em obras de drenagem para eliminação de pontos críticos de alagamento. Os serviços foram executados na Avenida Borges de Medeiros, na Rua Alexandre Calaza e nas estradas da Pedra e do Catonho, onde os trabalhos entraram na reta final. No total, mais de 1,6 km de drenagem estão sendo executadas. 
      <br /><br />
      Na intersecção entre as estradas do Catonho e Cafundá, o aumento da capacidade de escoamento das galerias pluviais solucionará o problema crônico de alagamento que motoristas e pedestres enfrentam em dias de chuvas fortes. Mais de 7,6 mil metros quadrados de drenagem estão sendo recuperados. Além disso, as calçadas estão sendo reconstruídas para melhorar a mobilidade e a acessibilidade. Por fim, o trecho ganhará nova pavimentação.
      <br /><br /><br />
      <styles.IntroTitle>Podas de árvores</styles.IntroTitle>
      Podas de árvores e a limpeza urbana são outros pontos importantes na prevenção. <styles.Textgrey>Foram realizadas 150 mil podas, um serviço importante para evitar que a queda de árvores durante temporais.</styles.Textgrey>
      </styles.IntroText>
    </styles.IntroDivMaior>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
