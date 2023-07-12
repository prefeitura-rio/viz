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
      className="flex relative w-[100%] h-[1000vh] -z-[50] items-top justify-center bg-[#fbfaef]"
    >
      <div
        id="test_animation"
        className="flex relative w-[100%] h-[100%] -z-[50] top[-10vh] justify-center bg-[#fbfaef]"
      >
        <img
          id={"animacao_image_1"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_um.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[20]"
        ></img>
        <img
          id={"animacao_image_2"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_dois.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[19]"
        ></img>
        <img
          id={"animacao_image_21"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_dois_um.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[18]"
        ></img>
        <img
          id={"animacao_image_3"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_tres.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[17]"
        ></img>
        <img
          id={"animacao_image_31"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_tres_um.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[16]"
        ></img>
        <img
          id={"animacao_image_4"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_quatro.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[15]"
        ></img>
        <img
          id={"animacao_image_41"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/ilustracao_quatro_um.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[14]"
        ></img>

        {/* <img
          id={"animacao_image_m1"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagemum.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[14]"
        ></img> */}
        {/* <img
        id={"animacao_image_m2"}
        src={
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagemdois.png"
        }
        className="absolute w-[100%]  opacity-0 -z-[14]"
      ></img>
      <img
        id={"animacao_image_m3"}
        src={
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagemtres.png"
        }
        className="absolute w-[100%]  opacity-0 -z-[14]"
      ></img>
      <img
        id={"animacao_image_m4"}
        src={
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagemquatro.png"
        }
        className="absolute w-[100%]  opacity-0 -z-[14]"
      ></img> */}
      </div>
    </div>
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

export function QuadroUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard id={"quadro_um_card1"}>
        {/* <styles.TextCard2>
				Sabe o que esses lugares têm em comum?
				</styles.TextCard2>
				<br />
				<styles.TextCard3>
				Eles fazem parte do plano da Prefeitura do Rio de encher a cidade de áreas de lazer para os cariocas. 
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				Um investimento em locais historicamente deixados de lado pelo poder público.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				Sair do seu bairro e ter que pegar um transporte só para curtir um espaço bacana com a família — tá na hora de deixar isso de lado, né? Afinal de contas, a gente sabe que o carioca adora ir curtir um verde.
				</styles.TextCard3> */}
      </styles.ContainerCard>
    </styles.ChapterGenericDiv2>
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
          Um investimento em locais historicamente deixados de lado pelo poder
          público.
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
          <br />
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
          <br />
          Já o <styles.TextGreen>Parque Piedade</styles.TextGreen>, em fase de
          licitação, será construído no terreno que pertencia a Universidade
          Gama Filho, um espaço de 18 mil metros quadrados que estava
          abandonado. O projeto inclui áreas de lazer, centro cultural,
          esportivo e educacional, além de horta urbana e espaço para eventos.
          <br />
          <br />
          Em Irajá, o <styles.TextGreen>Campo do Barroso</styles.TextGreen>, foi
          inaugurado em abril e possui campos esportivos, pista de caminhada e
          área de lazer. Foram instalados campo de futebol, quadra polivalente,
          quadra de areia e pista de caminhada, além de uma Academia da Terceira
          Idade e brinquedos infantis, como futmesa e mesa de ping-pong. A
          Rioluz instalou 25 novos projetores e mais 11 luminárias LED no local,
          que agora tem iluminação cênica com quatro projetores na cor verde
          voltados para a montanha.
          <br />
          <br />
          Com um investimento estimado de R$ 72 milhões, o{" "}
          <styles.TextGreen>Parque Realengo</styles.TextGreen> Susana Naspolini,
          em construção desde setembro do ano passado, começou a tomar forma. O
          parque é inspirado no Gardens By The Bay de Cingapura, apontado como o
          jardim mais visitado no mundo.
          <br />
          <br />
          No início de junho, foram entregues 11 lojas, com 9 metros quadrados
          cada, montadas como um mercado popular, para organizar o comércio
          existente anteriormente na área. Próximo ao mercado há um espaço
          multiuso que poderá receber feiras e eventos, entre outras atividades.
          <br />
          <br />
          Além de adaptar a Mata Atlântica ao conceito de superárvores, o parque
          também apresenta inéditas soluções para adaptar a cidade aos desafios
          das mudanças climáticas, como ilhas de calor e inundações.
          <br />
          <br />
        </styles.TextCard1>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/mapa.png"
          }
          className="h-auto mt-[30px] rounded-md"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv4>
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

export function ParteDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard4>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/introdois.png"
          }
          className="h-auto w-[90%] mb-[80px] lg:mt-[80px] lg:mb-[100px]"
        ></img>
        <styles.TextCard2>
          A gente sabe os parques são um sucesso, olha só o parque Madureira:
        </styles.TextCard2>
        <styles.TextCard1 className="mt-[20px]">
          Inaugurado em 23 de junho de 2012, o{" "}
          <styles.TextGreen>Parque Madureira</styles.TextGreen> Mestre Monarco é
          um dos projetos urbanísticos mais bem sucedidos da história recente do
          Brasil, tornando-se um ícone de lazer, diversão, cultura e serviços na
          Zona Norte do Rio de Janeiro. Nos fins de semana normais, o parque
          recebe, em média, de 10 mil a 15 mil pessoas. Em dias de evento, o
          público chega a 35 mil. Com 3.900 metros de extensão, ele é o terceiro
          maior parque da cidade, atrás apenas do Aterro do Flamengo e da Quinta
          da Boa Vista. O parque atravessa os bairros de Madureira, Turiaçu,
          Rocha Miranda, Honório Gurgel e Guadalupe.
        </styles.TextCard1>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/madureiraum.jpg"
          }
          className="rounded-md h-auto mb-[6px] lg:mb-[6px] mt-[40px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>
            Foto aérea do Parque Madureira.
          </styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/madureiraquatro.jpg"
          }
          className="rounded-md h-auto mb-[6px] lg:mb-[6px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>Chafariz.</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
        <styles.TextCard1 className="mt-[80px] mb-[80px]">
          Com 11 anos de história, o Parque Madureira é repleto de atrações para
          os moradores da região e para a população da cidade do Rio. A Nave do
          Conhecimento Silas de Oliveira oferece gratuitamente cursos na área de
          tecnologia, além de oficinas, palestras e visitas virtuais aos
          frequentadores. O acesso à internet banda larga é gratuito no local.
          <br></br> A Casa de Convivência Clara Nunes oferece atividades
          gratuitas, como yoga, dança de salão e pilates para os idosos a partir
          de 60 anos, com o objetivo de gerar impacto direto na promoção da
          saúde física, mental e emocional dos frequentadores.
        </styles.TextCard1>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/madureiratres.jpg"
          }
          className="rounded-md h-auto mb-[6px] lg:mb-[6px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>Skatepark</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/madureiradois.jpg"
          }
          className="rounded-md h-auto mb-[6px] lg:mb-[6px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>Espaço infantil.</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
        <styles.TextCard1 className="mt-[80px] mb-[80px]">
          Enfeitada pelos símbolos do Império Serrano e da Portela, tradicionais
          agremiações de Madureira, a Praça do Samba é um espaço com palco,
          concha acústica e arquibancadas para a realização de shows e
          apresentações culturais. Os lagos e cascatas artificiais atraem os
          frequentadores, principalmente em dias de calor na cidade. O parque
          ainda conta com quadras poliesportivas, pistas de street skate e
          brinquedos num parquinho.
        </styles.TextCard1>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/madureiracinco.jpg"
          }
          className="h-auto rounded-md"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>Área molhada.</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
        <styles.TextCard2 className="mt-[120px]">
          Veja como ficará o novo xodó de Campo Grande:
        </styles.TextCard2>
        <styles.TextCard1 className="mt-[20px]">
          O bairro de Campo Grande ganhou uma nova área de lazer com cerca de 14
          mil metros quadrados, localizado entre a Rua Almirante Saldanha e a
          Travessa Belisário dos Santos, no bairro da Zona Oeste.
        </styles.TextCard1>
      </styles.ContainerCard4>
    </styles.ChapterGenericDiv4>
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
      className="flex relative w-[100%] h-[300vh] -z-[50] items-top justify-center bg-transparent"
    >
      <div
        id="test_animation_dois"
        className="flex relative w-[100%] h-[100%] -z-[50] top[-10vh] justify-center bg-transparent"
      >
        <img
          id={"animacao_image_m1"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagem_um.png"
          }
          className="absolute w-[100%]  z-50"
        ></img>
        <img
          id={"animacao_image_m2"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagem_dois.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[19]"
        ></img>
        <img
          id={"animacao_image_m3"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagem_tres.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[18]"
        ></img>
        <img
          id={"animacao_image_m4"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/montagem_quatro.png"
          }
          className="absolute w-[100%]  opacity-0 -z-[17]"
        ></img>
      </div>
    </div>
  );
}

export function ParteTres(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard4>
        {/* <div className="flex flex-row">
          <styles.TextLegendaBold>Vista aérea.</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div> */}
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/realengoum.jpg"
          }
          className="rounded-md h-auto mb-[6px] lg:mb-[6px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>Entrada do parque.</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
        <styles.TextCard1 className="mt-[80px] mb-[80px]">
          Antes de a praça ser revitalizada e virar o{" "}
          <styles.TextGreen>Parque Esperança</styles.TextGreen>, o local era
          conhecido informalmente como Praça Favela das Almas, sendo apenas um
          espaço descampado atrás do cemitério de Campo Grande, que servia para
          descarte de lixo.
        </styles.TextCard1>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/realengodois.jpg"
          }
          className="rounded-md h-auto mb-[6px] lg:mb-[6px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>Nave do conhecimento.</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/realengotres.jpg"
          }
          className="rounded-md h-auto mb-[6px] lg:mb-[6px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>
            Área de lazer e churrasqueira.
          </styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
        <styles.TextCard1 className="mt-[80px] mb-[80px]">
          Na transformação, foram instalados campo de futebol com grama
          sintética, pista de skate, quadra poliesportiva, quadra de areia,
          pista de caminhada e mobiliários. O parque também tem quiosques,
          brinquedos infantis e uma Academia da Terceira Idade. O investimento
          na área foi de cerca de R$ 2 milhões e a obra durou seis meses.
        </styles.TextCard1>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/realengoquatro.jpg"
          }
          className="rounded-md h-auto mb-[6px] lg:mb-[6px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>Vista aérea.</styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
        <img
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/imagens/realengoseis.jpg"
          }
          className="rounded-md h-auto mb-[6px] lg:mb-[6px]"
        ></img>
        <div className="flex flex-row">
          <styles.TextLegendaBold>
            Espaço de preservação.
          </styles.TextLegendaBold>{" "}
          <styles.TextLegenda>Foto: Prefeitura</styles.TextLegenda>
        </div>
      </styles.ContainerCard4>
    </styles.ChapterGenericDiv4>
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
