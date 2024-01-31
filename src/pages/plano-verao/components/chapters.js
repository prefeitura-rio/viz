import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
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
      <img src={logo} className="w-24 mt-[2vh] lg:w-52"></img>
      <styles.Title>
      Rio Acima, Rio Abaixo: As Iniciativas da Prefeitura na Prevenção de Enchentes
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
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      {/* <styles.IntroTitle id={"intro"}>Como tudo começou</styles.IntroTitle> */}
      <styles.IntroText>
        Dados do Alerta Rio, sistema de alerta de chuvas intensas e de deslizamentos em encostas do Rio de Janeiro, mostram que nunca choveu tanto na nossa cidade. <br /> <br />
        Uma análise feita com base nos dados de ocorrências registradas pelo Centro de Operações Rio (COR) desde 2018, mostra que a cidade já registrou pelo menos 4.031 incidentes causados pelas chuvas. 
        <br /> <br />
        E este não é um problema exclusivo nosso. Segundo a ONU, no último Painel Intergovernamental de Mudança do Clima, as fortes chuvas no mundo já são 0,3% mais frequentes e 6,7% mais intensas. 
        <br /> <br />
        É por isso que a Prefeitura do Rio conta com um planejamento específico para o período com mais chuvas na cidade, o verão carioca.
        <br /> <br />
        Para isso, desde 2021 o Rio conta com a implementação do Plano Verão, cujo objetivo é minimizar os impactos das chuvas. Ao todo, 30 órgãos municipais, incluindo secretarias, empresas públicas e subprefeituras, trabalham na implementação das ações. 
        <br /> <br />
        Neste especial do Escritório de Dados, elaborado em parceria com a Comlurb, o COR, a Fundação Rio-Águas e a Secretaria Municipal de Conservação (SECONSERVA), explicaremos como o Plano Verão se tornou uma medida essencial no preparo do Rio para os impactos das chuvas.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Solucao(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      <styles.IntroTitle id={"solucaoTitle"}>Nova ferramenta</styles.IntroTitle>
      <styles.IntroText>
      Outra inovação é a contratação do Sistema de Monitoramento e Alerta de Descargas Atmosféricas e Tempestades Severas. A ferramenta foi testada pelo Rio no último verão, quando a cidade contabilizou 31.900 raios atingindo o município entre os meses de janeiro e março. 
      <br /> <br />
      Já a Defesa Civil operacionalizou mais uma ferramenta de comunicação preventiva aos moradores que vivem em áreas de alto risco geológico. Avisos sonoros serão emitidos por sirenes localizadas em 103 comunidades. O objetivo é alertar a população, antecipadamente, que não possuem acesso aos meios de comunicação de massa sobre a chegada de chuva forte no município. O aviso será feito com base nas previsões meteorológicas do Sistema Alerta Rio, órgão de meteorologia da Prefeitura do Rio.
      </styles.IntroText>
    </styles.IntroDiv>
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
            <styles.BigNumber1>bilhões</styles.BigNumber1>
          </styles.Grid1>
          <styles.TextCard>
          Com um investimento total de R$ 2,1 bilhões, o Plano Verão implementou 308 ações preventivas desde 2021. 
          </styles.TextCard>
        </styles.Grid>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Grafico(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.NewsImage src={grafico}></styles.NewsImage>
        <styles.TextCard>
        Em 2023, o investimento em desassoreamento de rios já totalizou 555,4 mil toneladas de lixo. As ações são referentes à limpeza, ao desassoreamento e à manutenção de rios como o Rio Acari, o Rio Ita (Santa Cruz), o Rio Campinho (Campo Grande), entre outros. Além disso, também são realizadas a recuperação estrutural e a limpeza de canaletas de drenagem em encostas, além de manutenção e operação dos reservatórios.
        <br /> <br />
        O volume de lixo retirado nas ações foi o equivalente à 46.283 caminhões cheios. O número recorde é cinco vezes maior que o retirado em 2018, quando 114 mil toneladas foram retiradas.
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
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
        <styles.NewsImage src={exemplo1}></styles.NewsImage>
        <styles.Credito>
          Divulgação: Fundação Rio-Águas
        </styles.Credito>
        <styles.TextCard2><styles.Textyellow>Desassoreamento do Rio Acari</styles.Textyellow></styles.TextCard2>
        <br />   
        <styles.TextCard1>
        Em 2023, o investimento em desassoreamento de rios já totalizou 555,4 mil toneladas de lixo. As ações são referentes à limpeza, ao desassoreamento e à manutenção de rios como o Rio Acari, o Rio Ita (Santa Cruz), o Rio Campinho (Campo Grande), entre outros. Além disso, também são realizadas a recuperação estrutural e a limpeza de canaletas de drenagem em encostas, além de manutenção e operação dos reservatórios.
        <br /> <br />
        O volume de lixo retirado nas ações foi o equivalente à 46.283 caminhões cheios. O número recorde é cinco vezes maior que o retirado em 2018, quando 114 mil toneladas foram retiradas.
          {/* <styles.Textyellow>
            {" "}
            <a
              className="p-1"
              href="https://prefeitura.rio/cidade/prefeitura-inicia-demolicoes-na-muzema/"
              target="_blank"
              rel="noreferrer"
            >
              Muzema,
            </a>
          </styles.Textyellow>{" "} */}
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
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={exemplo2}></styles.NewsImage>
        <styles.Credito>
        Divulgação: Fundação Rio-Águas
        </styles.Credito>
        <styles.TextCard2><styles.Textyellow>Obra de drenagem no entorno do Mercadão de Madureira</styles.Textyellow></styles.TextCard2>
        <br />
        <styles.TextCard1>
        Ao todo, 35 obras contra riscos hidrológicos foram realizadas nos últimos três anos, um investimento de mais de R$ 78 milhões. Atualmente seis estão em execução, como as do Mercadão de Madureira, Bairro Maravilha Jardim Maravilha e na Comunidade do Rollas, e as obras de canalização do Rio Tindiba e na Pavuna.
        <br /> <br />
        Nas ações contra deslizamentos, 118 obras foram concluídas, 41 estão em andamento e sete aguardam o processo de licitação. As intervenções que totalizam R$ 214 milhões.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

// export function Exemplo3(
//   props = {
//     id: "",
//     chapRef: null,
//   }
// ) {
//   props = setDefaultProps(props);

//   return (
//     <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
//       <styles.ContainerCard1>
//         <styles.TextCard1>
//           Em novembro de 2021, uma tragédia: um prédio de quatro andares desabou
//           no{" "}
//           <styles.Textyellow>
//             {" "}
//             <a
//               className="p-1"
//               href="https://www1.folha.uol.com.br/cotidiano/2021/11/predio-de-4-andares-desaba-no-rio-e-deixa-um-morto-e-tres-feridos.shtml"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Morro do Salgueiro,
//             </a>
//           </styles.Textyellow>{" "}
//           na Zona Norte. Um homem de 22 anos faleceu e outras três pessoas
//           ficaram feridas. Entre elas, uma criança de apenas quatro anos. A
//           construção também não tinha alvará.
//         </styles.TextCard1>
//       </styles.ContainerCard1>
//     </styles.ChapterGenericDiv>
//   );
// }

export function Seop4(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop4}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>
        <styles.TextCard1>
          Também em Muzema,{" "}
          <styles.Textyellow>
            {" "}
            <a
              className="p-1"
              href="https://prefeitura.rio/ordem-publica/prefeitura-faz-demolicao-de-predio-de-tres-andares-no-valor-de-r-3-milhoes-na-muzema/"
              target="_blank"
              rel="noreferrer"
            >
              uma construção irregular foi colocada abaixo.
            </a>
          </styles.Textyellow>{" "}
          O prédio, com três andares, foi demolido pela equipe da Força-Tarefa
          no mês passado.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
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
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop3}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>
        <styles.TextCard2><styles.Textyellow>Novo radar meteorológico do Rio</styles.Textyellow></styles.TextCard2>
        <br />
        <styles.TextCard1>
        Com um investimento de R$ 6,8 milhões, via Parceria Público-Privada firmada pela Rioluz, o radar de tecnologia ‘banda X’, é considerado o mais moderno em equipamentos deste tipo e que entrará em dezembro em operação. O novo equipamento é capaz de fazer a leitura de chuva de granizo com antecedência de até três horas e será instalado na Serra do Mendanha, na Zona Oeste.
        <br /> <br />
        O Rio passa a ser o primeiro município do país a contar com dois radares meteorológicos próprios. As imagens dos equipamentos, assim como já acontece com o que está instalado no Morro do Sumaré, serão disponibilizadas para a população do Rio.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
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
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop2}></styles.NewsImage>
        <styles.Credito>
        Divulgação: Centro de Operações Rio
        </styles.Credito>
        <styles.TextCard2><styles.Textyellow>Centro de Operações Rio</styles.Textyellow></styles.TextCard2>
        <br />
        <styles.TextCard1>
        Para se manter na vanguarda do que há de mais avançado em monitoramento no mundo, o Centro de Operações Rio (COR) investiu em novas aquisições tecnológicas. Após ampliar em 40% seu vídeo wall, que passou a ter 104 metros quadrados, composto por 125 telas de 55 polegadas e em alta resolução, um novo radar meteorológico foi adquirido.
        <br /> <br />
        O número de câmeras de monitoramento da cidade, que permitem um melhor planejamento durante os eventos também apresentou um crescimento. Em 2022 eram duas mil e, agora, já são três mil e quinhentas.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Seop1(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop1}></styles.NewsImage>
        <styles.Credito>
          Divulgação: Prefeitura da Cidade do Rio Janeiro / Marcos de Paula
        </styles.Credito>
        <styles.TextCard2><styles.Textyellow>Bairro Maravilha</styles.Textyellow></styles.TextCard2>
        <br />
        <styles.TextCard1>
        Outro projeto que atua diretamente na prevenção das chuvas é o Bairro Maravilha, responsável por urbanizar e levar infraestrutura à população. Já são 92 localidades beneficiadas e, até o fim de 2023, serão 49 km de ruas requalificadas, com R$ 977 milhões em investimentos no total. 
        <br /> <br />
        Neste ano, a Prefeitura do Rio iniciou o projeto Morar Carioca na comunidade do Aço, em Santa Cruz, na Zona Oeste. Com um investimento de R$ 243 milhões, em uma área de 195 mil metros quadrados, a comunidade do Aço ganhará 704 unidades habitacionais, que vão beneficiar diretamente quatro mil pessoas, além de melhorias em infraestrutura urbana.        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
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
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Infelizmente, nos últimos anos, casos recorrentes de desabamentos
          foram registrados na cidade.{" "}
          <styles.Textyellow>
            Prédios construídos pelo crime organizado, sem a infraestrutura e os
            cuidados técnicos necessários, vieram abaixo.
          </styles.Textyellow>{" "}
          Famílias inteiras perderam seus lares e suas vidas:
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
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
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      {/* <styles.IntroTitle id={"fimTitle"}>Próximos passos</styles.IntroTitle> */}
      <styles.TextCard2><styles.Textyellow>Prefeito</styles.Textyellow></styles.TextCard2>
      <styles.IntroText1>Eduardo Paes</styles.IntroText1>
      <br /> <br />
      <styles.TextCard2><styles.Textyellow>Autores</styles.Textyellow></styles.TextCard2>
      <styles.IntroText1>Judite Cypreste<br />Caio Jacintho<br />Diego Oliveira</styles.IntroText1>
      <br /> <br />
      <styles.TextCard2><styles.Textyellow>Agradecimentos</styles.Textyellow></styles.TextCard2>
      <styles.IntroText1>Joice Nascimento<br />João Carabetta<br />João Marcelo<br />Gabriela Hilário</styles.IntroText1>
      <a href={"https://www.dados.rio/"}>
        <img
          src={logoed}
          className="w-44 mt-[100px] lg:mt-[200px] lg:w-56"
        ></img>
      </a>
    </styles.IntroDiv>
  );
}

export function Acompanhe(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      <styles.IntroTitle id={"acompanheTitle"}>
        As ações da Prefeitura
      </styles.IntroTitle>
      <styles.IntroText>
        As operações realizadas pela Ordem Pública e pela Secretaria de Meio
        Ambiente reúnem diversos órgãos da Prefeitura, como a Guarda Municipal,
        Comlurb, Secretaria de Conservação e Subprefeituras, além das
        concessionárias de luz e água. Na maioria das ações, o apoio das forças
        policiais também é necessário, devido à influência do crime organizado
        nas regiões visitadas.
        <br />
        <br />
        As ações também ajudam a Prefeitura a combater o desmatamento de aéreas
        de preservação ambiental.
        <br />
        <br />
        De 2021 a 2022, foram demolidas 257 construções irregulares em aéreas
        preservadas, segundo dados da Secretaria de Meio Ambiente.
        <br />
        <br />
        Foram mais de 797.198 m² de áreas verdes recuperadas.
      </styles.IntroText>
    </styles.IntroDiv>
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
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      <styles.IntroTitle id={"zonaOesteTitle"}>
        Onde estão localizadas as construções irregulares
      </styles.IntroTitle>
      <styles.IntroText>
      Também foram investidos cerca de R$ 35 milhões somente nas obras de contenção nas grandes vias com protocolos de fechamento nos dias de fortes chuvas. Com isso, foram registrados menos problemas com deslizamentos de terra nos últimos temporais. Nos últimos três anos conseguimos fazer a contenção de 880 mil metros quadrados em áreas de alto risco em comunidades cariocas, o equivalente a 107 campos de futebol.
      <br /><br />
      Com um investimento de R$ 9,8 milhões em obras de drenagem para eliminação de pontos críticos de alagamento. Os serviços foram executados na Avenida Borges de Medeiros, na Rua Alexandre Calaza e nas estradas da Pedra e do Catonho, onde os trabalhos entraram na reta final. No total, mais de 1,6 km de drenagem estão sendo executadas. 
      <br /><br />
      Na intersecção entre as estradas do Catonho e Cafundá, o aumento da capacidade de escoamento das galerias pluviais solucionará o problema crônico de alagamento que motoristas e pedestres enfrentam em dias de chuvas fortes. Mais de 7,6 mil metros quadrados de drenagem estão sendo recuperados. Além disso, as calçadas estão sendo reconstruídas para melhorar a mobilidade e a acessibilidade. Por fim, o trecho ganhará nova pavimentação.
      <br /><br />
      Podas de árvores e a limpeza urbana são outros pontos importantes na prevenção. Foram realizadas 150 mil podas, um serviço importante para evitar que a queda de árvores durante temporais.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
