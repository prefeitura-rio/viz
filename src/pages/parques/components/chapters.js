// import styled from "styled-components";
import * as styles from "./chapters.style";
// import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";
import { isMobile } from "react-device-detect";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};

export function Capa(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.CapaDiv id={props.id} ref={props.chapRef}>
      <styles.CapaAutor>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/logoed.png"
          }
          className="absolute top-[5%] lg:absolute lg:top-[20px] h-11 lg:h-14"
        ></img>
        <styles.Title>Parques, parques e mais parques </styles.Title>
        <styles.Subtitle>
          Parques florescem em todos os cantos da cidade, trazendo mais
          qualidade de vida para os cariocas
        </styles.Subtitle>
        {/* <img src={scroll} className="h-7 lg:h-9 mt-[20px] lg:mt-[20px]"></img>{" "} */}
      </styles.CapaAutor>
    </styles.CapaDiv>
  );
}

export function ContextoHistorico(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <>
      <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
        <styles.ContainerCard2>
          {/* <img
					src={fundoum}
					className="absolute top-[100%] h-screen w-[100%] lg:top-[80%] lg:h-auto"></img> */}
          <styles.AuthorText className="mb-[88px]">
            Realização{" "}
            <a
              className="font-bold underline"
              href="https://www.dados.rio/"
              target="_blank"
              rel="noreferrer"
            >
              Escritório de Dados
            </a>{" "}
            <br />
            Desenvolvido por{" "}
            <div className="inline font-bold ">Caio Jacintho</div>,{" "}
            <div className="inline font-bold ">Diego Oliveira</div> e{" "}
            <div className="inline font-bold">Judite Cypreste</div>
            <br />{" "}
          </styles.AuthorText>{" "}
          <styles.TextCard1>
            Sair do seu bairro e pegar transporte para encontrar um espaço
            agradável para curtir com a família está com os dias contados!
            <br />
            <br />
            Por muito tempo, algumas partes da nossa cidade foram deixadas de
            lado, privadas de espaços de lazer.
            <br />
            <br />
            Determinada a mudar a esta situação, a Prefeitura está empenhada em
            levar infraestrutura e lazer para todos os cantos da cidade
            maravilhosa.
            <br />
            <br />
            Neste especial, vamos mostrar a você como estamos levando alegria e
            bem-estar para todos os cariocas.
            <br />
            <br />
          </styles.TextCard1>
        </styles.ContainerCard2>
      </styles.ChapterGenericDiv>
    </>
  );
}

export function ParteUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/intro.png"
          }
          className="h-auto w-[100%] lg:w-[90%] mb-[80px] lg:mb-[80px]"
        ></img>
        <styles.TextCard1>
          <styles.TextCard2>
            Sabe o que esses lugares têm em comum?
          </styles.TextCard2>
          <br />
          <br />
          Todos eles são parte do plano da Prefeitura do Rio de Janeiro de
          encher a cidade de áreas de lazer para os cariocas.
          <br />
          <br />
          Estamos empenhados em transformar a nossa cidade, com a construção de
          espaços onde os habitantes possam desfrutar de momentos de descanso e
          diversão.
          <br />
          <br />
          Para alcançar esse objetivo, a Prefeitura já investiu R$ XX na
          construção de novas parques na cidade.
          <br />
          <br />
          Essas áreas de lazer são pensadas para atender às necessidades dos
          cariocas, oferecendo espaços verdes bem cuidados, equipamentos
          esportivos, e muito mais.
          <br />
          <br />
          Com essa iniciativa, a Prefeitura busca melhorar a qualidade de vida
          dos moradores, incentivando a prática de atividades ao ar livre e
          promovendo o senso de comunidade entre os cidadãos.
          <br />
          <br />E a gente sabe que a população AMA estar nesses espaços. Os
          cariocas nunca pesquisaram tanto sobre parques e suas localizações,
          segundo dados obtidos na plataforma Google Trends.
        </styles.TextCard1>
        <br />
        <br />
        <br />
        <styles.TextCard2>
          Quantas vezes a população carioca pesquisou pela palavra “parque” no
          google nos últimos 13 anos?
        </styles.TextCard2>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/graficoum.png"
          }
          className="h-auto mt-[40px] mb-[80px] lg:mb-[120px] rounded-md"
        ></img>
        <styles.TextCard2>
          Investindo em locais historicamente deixados de lado pelo poder
          público
        </styles.TextCard2>
        <styles.TextCard1>
          <br />
          <br />
          Sair do seu bairro e ter que pegar um transporte só para curtir um
          espaço bacana com a família — tá na hora de deixar isso de lado, né?
          <br />
          <br />
          Afinal de contas, a gente sabe que o carioca adora ir curtir um verde.
          <br />
          <br />
          Para isso, XX parques estão sendo construídos nas Zonas Oeste e Norte
          da cidade.
          <img
            src={
              "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/mapa.png"
            }
            className="h-auto mt-[30px] mb-[120px] rounded-md"
          ></img>
          <styles.TextCard2>
            Parque Rita Lee
          </styles.TextCard2>
          <br />O <styles.TextGreen>Parque Rita Lee</styles.TextGreen>, na Barra
          da Tijuca, está em construção desde fevereiro. Com 36 mil metros
          quadrados, o novo parque ficará numa rota que conecta todas as
          principais áreas do Parque Olímpico, como as arenas, os terraços e o
          “Live Site”, esplanada destinada a eventos em frente à Lagoa de
          Jacarepaguá.
          <br />
          <br />
          O espaço vai ganhar um bosque com mais de 900 árvores e 16 mil
          arbustos, quadras esportivas, praças, reforma do skate park, praça
          molhada e pisos coloridos. Haverá ainda novos mobiliários urbanos,
          como 465 mesas e cadeiras, 27 brinquedos infantis, 14 aparelhos de
          ginástica e 14 bicicletários.
          <br />
          <img
            src={
              "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/parque_rita_lee.png"
            }
            className="h-auto mt-[30px] mb-[6px] rounded-md"
          ></img>
          <div className="flex flex-row mb-[120px]">
            <styles.TextLegendaBold>
              Vista aérea do Parque Rita Lee.
            </styles.TextLegendaBold>{" "}
            <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
          </div>
          <styles.TextCard2>
            Parque Pavuna
          </styles.TextCard2>
          <br />
          xxxxxxxxxx
          <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/parque_piedade.jpg"
          }
          className="h-auto w-full mt-[30px] mb-[6px] rounded-md"
        ></img>          
        <div className="flex flex-row mb-[120px]">
          <styles.TextLegendaBold>Vista aérea do projeto do Parque Piedade.</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>    
      <styles.TextCard2>
          Parque Esperança
        </styles.TextCard2>
        <br />
          Antes de a praça ser revitalizada e virar o Parque Esperança, o local era
          conhecido informalmente como Praça Favela das Almas, sendo apenas um
          espaço descampado atrás do cemitério de Campo Grande, que servia para
          descarte de lixo.
          <br />
          <br />
          Na transformação, foram instalados campo de futebol com grama
          sintética, pista de skate, quadra poliesportiva, quadra de areia,
          pista de caminhada e mobiliários. O parque também tem quiosques,
          brinquedos infantis e uma Academia da Terceira Idade. O investimento
          na área foi de cerca de R$ 2 milhões e a obra durou seis meses.
          <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/parque_esperanca.jpeg"
          }
          className="h-auto w-full mt-[30px] mb-[6px] rounded-md"
        ></img>          
        <div className="flex flex-row mb-[120px]">
          <styles.TextLegendaBold>Vista aérea do Parque Esperança.</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>    
        <styles.TextCard2>
          Parque Realengo Susana Naspolini
        </styles.TextCard2>
          <br />
          O bairro de Campo Grande ganhou uma nova área de lazer, localizado entre a 
          Rua Almirante Saldanha e a Travessa Belisário dos Santos, no bairro da Zona Oeste.
          <br />
          <br />
          Em construção desde setembro do ano passado, o parque começou a tomar forma. No início de junho, 
          foram entregues 11 lojas, com 9 metros quadrados
          cada, montadas como um mercado popular, para organizar o comércio
          existente anteriormente na área. 
          <br />
          <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/realengoum.jpg"
          }
          className="rounded-md h-auto lg:mt-[30px] mb-[6px] lg:mb-[6px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>Projeto do Parque Realengo Susana Naspolini.</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
          <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/realengoseis.jpg"
          }
          className="rounded-md h-auto mb-[6px] lg:mb-[6px] lg:mt-[30px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>
            Projeto do Parque Realengo Susana Naspolini
          </styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
          Além de adaptar a Mata Atlântica ao conceito de superárvores, o parque
          também apresenta inéditas soluções para adaptar a cidade aos desafios
          das mudanças climáticas, como ilhas de calor e inundações. Ficou curioso como vai ficar? 
          Então confira abaixo o que a Prefeitura planejou para o mais novo xodó de Campo Grande:
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv4>
  );
}

// export function ParteDois(
//   props = {
//     id: "",
//     chapRef: null,
//   }
// ) {
//   props = setDefaultProps(props);

//   return (
//     <styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id}>
//       <styles.ContainerCard>
//         <img
//           src={
//             "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/intro.png"
//           }
//           className="h-auto w-[100%] lg:w-[90%] mb-[80px] lg:mb-[80px]"
//         ></img>
//         <styles.TextCard1>
//           <styles.TextCard2>
//             Sabe o que esses lugares têm em comum?
//           </styles.TextCard2>
//           <br />
//           <br />
//           Todos eles são parte do plano da Prefeitura do Rio de Janeiro de
//           encher a cidade de áreas de lazer para os cariocas.
//           <br />
//           <br />
//           Estamos empenhados em transformar a nossa cidade, com a construção de
//           espaços onde os habitantes possam desfrutar de momentos de descanso e
//           diversão.
//           <br />
//           <br />
//           Para alcançar esse objetivo, a Prefeitura já investiu R$ XX na
//           construção de novas parques na cidade.
//           <br />
//           <br />
//           Essas áreas de lazer são pensadas para atender às necessidades dos
//           cariocas, oferecendo espaços verdes bem cuidados, equipamentos
//           esportivos, e muito mais.
//           <br />
//           <br />
//           Com essa iniciativa, a Prefeitura busca melhorar a qualidade de vida
//           dos moradores, incentivando a prática de atividades ao ar livre e
//           promovendo o senso de comunidade entre os cidadãos.
//           <br />
//           <br />E a gente sabe que a população AMA estar nesses espaços. Os
//           cariocas nunca pesquisaram tanto sobre parques e suas localizações,
//           segundo dados obtidos na plataforma Google Trends.
//         </styles.TextCard1>
//         <br />
//         <br />
//         <br />
//         <styles.TextCard2>
//           Quantas vezes a população carioca pesquisou pela palavra “parque” no
//           google nos últimos 13 anos?
//         </styles.TextCard2>
//         <img
//           src={
//             "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/graficoum.png"
//           }
//           className="h-auto mt-[40px] mb-[80px] lg:mb-[120px] rounded-md"
//         ></img>
//         <styles.TextCard2>
//           Um investimento em locais historicamente deixados de lado pelo poder
//           público
//         </styles.TextCard2>
//         <styles.TextCard1>
//           <br />
//           <br />
//           Sair do seu bairro e ter que pegar um transporte só para curtir um
//           espaço bacana com a família — tá na hora de deixar isso de lado, né?
//           <br />
//           <br />
//           Afinal de contas, a gente sabe que o carioca adora ir curtir um verde.
//           <br />
//           <br />
//           Para isso, XX parques estão sendo construídos nas Zonas Oeste e Norte
//           da cidade.
//           <img
//             src={
//               "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/mapa.png"
//             }
//             className="h-auto mt-[30px] mb-[120px] rounded-md"
//           ></img>
//           <styles.TextCard2>
//             Parque Rita Lee, aquele das olimpíadas
//           </styles.TextCard2>
//           <br />O <styles.TextGreen>Parque Rita Lee</styles.TextGreen>, na Barra
//           da Tijuca, está em construção desde fevereiro. Com 36 mil metros
//           quadrados, o novo parque ficará numa rota que conecta todas as
//           principais áreas do Parque Olímpico, como as arenas, os terraços e o
//           “Live Site”, esplanada destinada a eventos em frente à Lagoa de
//           Jacarepaguá.
//           <br />
//           <br />
//           O espaço vai ganhar um bosque com mais de 900 árvores e 16 mil
//           arbustos, quadras esportivas, praças, reforma do skate park, praça
//           molhada e pisos coloridos. Haverá ainda novos mobiliários urbanos,
//           como 465 mesas e cadeiras, 27 brinquedos infantis, 14 aparelhos de
//           ginástica e 14 bicicletários.
//           <br />
//           <img
//             src={
//               "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/parque_rita_lee.png"
//             }
//             className="h-auto mt-[30px] mb-[6px] rounded-md"
//           ></img>
//           <div className="flex flex-row mb-[120px]">
//             <styles.TextLegendaBold>
//               Vista aérea do Parque Rita Lee.
//             </styles.TextLegendaBold>{" "}
//             <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
//           </div>
//           <styles.TextCard2>
//             Parque Piedade, aquele da Universidade Gama Filho
//           </styles.TextCard2>
//           <br />
//           Já o <styles.TextGreen>Parque Piedade</styles.TextGreen>, em fase de
//           licitação, será construído no terreno que pertencia a Universidade
//           Gama Filho, um espaço de 18 mil metros quadrados que estava
//           abandonado. O projeto inclui áreas de lazer, centro cultural,
//           esportivo e educacional, além de horta urbana e espaço para eventos.
//           <img
//           src={
//             "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/parque_piedade.jpg"
//           }
//           className="h-auto w-full mt-[30px] mb-[6px] rounded-md"
//         ></img>          
//         <div className="flex flex-row mb-[120px]">
//           <styles.TextLegendaBold>Vista aérea do projeto do Parque Piedade.</styles.TextLegendaBold>{" "}
//           <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
//         </div>    
//       <styles.TextCard2>
//           Parque Esperança, aquele da esperança
//         </styles.TextCard2>
//         <br />
//           Antes de a praça ser revitalizada e virar o{" "}
//           <styles.TextGreen>Parque Esperança</styles.TextGreen>, o local era
//           conhecido informalmente como Praça Favela das Almas, sendo apenas um
//           espaço descampado atrás do cemitério de Campo Grande, que servia para
//           descarte de lixo.
//           <br />
//           <br />
//           Na transformação, foram instalados campo de futebol com grama
//           sintética, pista de skate, quadra poliesportiva, quadra de areia,
//           pista de caminhada e mobiliários. O parque também tem quiosques,
//           brinquedos infantis e uma Academia da Terceira Idade. O investimento
//           na área foi de cerca de R$ 2 milhões e a obra durou seis meses.
//           <img
//           src={
//             "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/parque_esperanca.jpeg"
//           }
//           className="h-auto w-full mt-[30px] mb-[6px] rounded-md"
//         ></img>          
//         <div className="flex flex-row mb-[120px]">
//           <styles.TextLegendaBold>Vista aérea do Parque Esperança.</styles.TextLegendaBold>{" "}
//           <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
//         </div>    
//         </styles.TextCard1>
//         <styles.TextCard2>
//           Veja como ficará o novo xodó de Campo Grande, o Parque Realengo:
//         </styles.TextCard2>
//         <styles.TextCard1 className="mt-[20px]">
//           O bairro de Campo Grande ganhou uma nova área de lazer com cerca de 14
//           mil metros quadrados, localizado entre a Rua Almirante Saldanha e a
//           Travessa Belisário dos Santos, no bairro da Zona Oeste.
//           <br />
//           <br />
//           Com um investimento estimado de R$ 72 milhões, o{" "}
//           <styles.TextGreen>Parque Realengo</styles.TextGreen> Susana Naspolini,
//           em construção desde setembro do ano passado, começou a tomar forma. O
//           parque é inspirado no Gardens By The Bay de Cingapura, apontado como o
//           jardim mais visitado no mundo.
//           <br />
//           <img
//           src={
//             "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/realengoum.jpg"
//           }
//           className="rounded-md h-auto lg:mt-[30px] mb-[6px] lg:mb-[6px]"
//         ></img>
//         <div className="flex flex-row">
//           <styles.TextLegendaBold>Entrada do parque.</styles.TextLegendaBold>{" "}
//           <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
//         </div>
//           <br />
//           No início de junho, foram entregues 11 lojas, com 9 metros quadrados
//           cada, montadas como um mercado popular, para organizar o comércio
//           existente anteriormente na área. Próximo ao mercado há um espaço
//           multiuso que poderá receber feiras e eventos, entre outras atividades.
//           <br />
//           <img
//           src={
//             "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/realengoseis.jpg"
//           }
//           className="rounded-md h-auto mb-[6px] lg:mb-[6px] lg:mt-[30px]"
//         ></img>
//         <div className="flex flex-row">
//           <styles.TextLegendaBold>
//             Espaço de preservação.
//           </styles.TextLegendaBold>{" "}
//           <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
//         </div>
//           Além de adaptar a Mata Atlântica ao conceito de superárvores, o parque
//           também apresenta inéditas soluções para adaptar a cidade aos desafios
//           das mudanças climáticas, como ilhas de calor e inundações.
//         </styles.TextCard1>
//       </styles.ContainerCard>
//     </styles.ChapterGenericDiv4>
//   );
// }

export function ParteTres(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/introdois.png"
          }
          className="h-auto w-[100%] lg:w-[90%] mb-[80px] lg:mb-[80px]"
        ></img>
        <styles.TextCard1>
          <styles.TextCard2>
            Parques turbinados com tudo que o carioca tem direito
          </styles.TextCard2>
          <br />
          <br />
          Além de mais espaços verdes espalhados pela cidade, o carioca também precisa de lazer.
          Por isso, em cada novo parque construído, a Prefeitura se empenhou em trazer novos equipamentos
          para que a diversao fosse ainda maior.
          <br />
          <br />
          Hortas e pomares, pistas de skate e quadras poliesportivas, academias ao ar livre, churrasqueiras,
          Naves do Conhecimento, Ecopontos e fomentação do comércio local: tudo isso é pra fazer do 
          <styles.TextGreen>Rio um lugar melhor
          para todos os cariocas. </styles.TextGreen>
          <br />
          <br />
        </styles.TextCard1>        
      </styles.ContainerCard>
    </styles.ChapterGenericDiv4>
  );
}

export function AnimacaoUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div
      ref={props.chapRef}
      id={props.id}
      className="flex relative w-[100%] h-[210vh] -z-[50] items-top justify-center bg-[#fbfaef]"
    >
      <div
        id="test_animation"
        className="flex relative w-[100%] -z-[50] top[-10vh] justify-center bg-[#fbfaef]"
      >
        <img
          id={"animacao_image_1"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_um.png"
          }
          className="absolute max-w-[100%] opacity-0 -z-[20]"
        ></img>
        <img
          id={"animacao_image_2"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_dois.png"
          }
          className="absolute max-w-[100%] opacity-0 -z-[19]"
        ></img>
        <img
          id={"animacao_image_21"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_dois_um.png"
          }
          className="absolute max-w-[100%] opacity-0 -z-[18]"
        ></img>
        <img
          id={"animacao_image_3"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_tres.png"
          }
          className="absolute max-w-[100%] opacity-0 -z-[17]"
        ></img>
        <img
          id={"animacao_image_31"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_tres_um.png"
          }
          className="absolute max-w-[100%] opacity-0 -z-[16]"
        ></img>
        <img
          id={"animacao_image_4"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_quatro.png"
          }
          className="absolute max-w-[100%] opacity-0 -z-[15]"
        ></img>
        <img
          id={"animacao_image_41"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_quatro_um.png"
          }
          className="absolute max-w-[100%] opacity-0 -z-[14]"
        ></img>
      </div>
    </div>
  );
}

export function QuadroDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterQuadroDois ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[10vh]">
        <styles.TextCard3>
          Além das áreas livres e da natureza, os parques contemplam uma série
          de equipamentos públicos como:
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[70vh]">
        <styles.TextCard3>
          academia terceira idade, quadra esportiva, ecoponto
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[180vh]">
        <styles.TextCard3>churrasqueira, bosque, horta, pomar</styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[310vh]">
        <styles.TextCard3>
          comércio, skatepark, nave do conhecimento
        </styles.TextCard3>
      </styles.ContainerCard3>
    </styles.ChapterQuadroDois>
  );
}

export function AnimacaoDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <div
      ref={props.chapRef}
      id={props.id}
      className="flex relative w-[100%] h-[200vh] -z-[50] items-top justify-center bg-[#fbfaef]"
    >
      <div
        id="test_animation_dois"
        className="flex relative w-[100%]  -z-[50] top[-10vh] justify-center bg-[#fbfaef]"
      >
        <img
          id={"animacao_image_m1"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagem_um.png"
          }
          className="absolute w-[75%]  -z-[20]"
        ></img>
        <img
          id={"animacao_image_m2"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagem_dois.png"
          }
          className="absolute w-[75%]  opacity-0 -z-[19]"
        ></img>
        <img
          id={"animacao_image_m3"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagem_tres.png"
          }
          className="absolute w-[75%]  opacity-0 -z-[18]"
        ></img>
        <img
          id={"animacao_image_m4"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagem_quatro.png"
          }
          className="absolute w-[75%]  opacity-0 -z-[17]"
        ></img>
      </div>
    </div>
  );
}

export function Creditos(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/introtres.png"
          }
          className="h-auto w-[60%] mb-[80px] lg:mt-[120px] lg:mb-[120px]"
        ></img>
        <styles.TextCreditos2>Créditos</styles.TextCreditos2>
        <styles.TextCreditos>Autores</styles.TextCreditos>
        <styles.TextCreditos1>
          Caio Jacintho <br />
          Judite Cypreste <br />
          Diego Oliveira <br />
        </styles.TextCreditos1>
        <styles.TextCreditos className=" lg:mt-[40px] mt-[60px] ">
          Agradecimentos
        </styles.TextCreditos>
        <styles.TextCreditos1>
          João Carabetta <br />
        </styles.TextCreditos1>
        <styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
          Prefeito
        </styles.TextCreditos>
        <styles.TextCreditos1>Eduardo Paes</styles.TextCreditos1>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/logoed.png"
          }
          className="lg:mb-[160px] mt-[100px] lg:mt-[200px] w-[100px] h-auto lg:w-[100px] lg:h-auto"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}
