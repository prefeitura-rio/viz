import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";
import { isMobile } from "react-device-detect";

// IMAGENS
import logoed from "../images/logoed.png";
import logo from "../images/logo.png";
import scroll from "../images/scroll.gif";

import obras1 from "../images/obras1.jpg";
import obras2 from "../images/obras2.jpg";
import obras3 from "../images/obras3.jpg";
import rotina1 from "../images/rotina1.jpg";
import rotina2 from "../images/rotina2.jpg";
import cor1 from "../images/cor1.jpg";
import cor2 from "../images/cor2.jpg";
import cor3 from "../images/cor3.jpg";

import cep1 from "../images/cep1.png";
import cep2 from "../images/cep2.png";
import cep3 from "../images/cep3.gif";

import video_capa from "../videos/capa.mp4";

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
					src={logo}
					className="absolute top-[5%] lg:absolute lg:top-[20px] h-11 lg:h-14"></img>
				<styles.Title>Por que o Rio de Janeiro alaga? </styles.Title>
				<styles.Subtitle>
					E como a prefeitura trabalha para que a chuva não castigue os cariocas
				</styles.Subtitle>
				<img src={scroll} className="h-7 lg:h-9 mt-[20px] lg:mt-[20px]"></img>{" "}
			</styles.CapaAutor>
		</styles.CapaDiv>
	);
}

export function CepImages(
	props = {
		id: "",
		chapRef: null,
	}
) {
	props = setDefaultProps(props);
	return (
		<div ref={props.chapRef} id={props.id}>
			<img
				id={"cep_image_1"}
				src={isMobile ? m_cep1 : cep1}
				className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"></img>
			<img
				id={"cep_image_2"}
				src={isMobile ? m_cep2 : cep2}
				className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"></img>
			<img
				id={"cep_image_3"}
				src={isMobile ? m_cep3 : cep3}
				className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"></img>
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
				<styles.ContainerCard>
					<styles.Video>
						<video autoPlay muted className="w-full h-full" id="video_capa">
							<source src={video_capa} type="video/mp4" />
						</video>
					</styles.Video>

					<div>
						<div className="mt-[30px] h-[3px] w-[20px] bg-black"></div>
						<styles.AuthorText className="mt-[8px] mr-[20px] lg:w-[420px]">
							Desenvolvido pela Equipe de Visualização de Dados do{" "}
							<a
								className="font-bold underline"
								href="https://www.dados.rio/"
								target="_blank"
								rel="noreferrer">
								Escritório de Dados
							</a>{" "}
							da Prefeitura da Cidade do Rio de Janeiro
						</styles.AuthorText>{" "}
					</div>
					<div className="h-[10px] w-[50px] bg-black mb-[10px]"></div>
					<styles.TextCard>Introdução</styles.TextCard>
					<styles.TextCard1>
						Dados do Alerta Rio, sistema de alerta de chuvas intensas e de
						deslizamentos em encostas do Rio de Janeiro, mostram que nunca
						choveu tanto na nossa cidade.
						<br />
						<br />
						Uma análise feita com base nos dados de ocorrências registradas pelo
						Centro de Operações da cidade (COR) desde 2018, mostra que a cidade
						já registrou pelo menos 8.222 incidentes causados pelas chuvas.
						Destes, 486 foram alagamentos e enchentes.
						<br />
						<br />E este não é um problema exclusivo nosso.
						<br />
						<br />
						Segundo a ONU, no último Painel Intergovernamental de Mudança do
						Clima, as fortes chuvas no mundo já são 0,3% mais frequentes e 6,7%
						mais intensas. Especialistas vêm alertando sobre as consequências
						deste fenômeno, que vem ameaçando a existência de regiões em todo o
						mundo.
						<br />
						<br />
						Com a elevação da temperatura da Terra, causada pelo Aquecimento
						Global, a retenção de umidade do ar é maior. Quando essa umidade se
						condensa, liberando calor ou energia, transforma chuviscos em
						tempestades. Com isso, enchentes, alagamentos e todas as ocorrências
						provocadas pelas chuvas se tornam ainda mais comuns.
						<br />
						<br />
						Com estas informações, talvez vocês esteja se perguntando se este é
						mais um material elaborado para os telejornais ficarem falando que
						“a chuva castiga os cariocas”. (Sim, nos conhecemos o meme). Mas
						não, esta não é nossa intenção.
						<br />
						<br />
						Neste especial do Escritório de Dados, elaborado em parceria com a
						Comlurb, o COR, a Fundação Rio-Águas e a Secretaria Municipal de
						Conservação (SECONSERVA), explicaremos como o aquecimento global, o
						lixo e até mesmo o vandalismo, vêm fazendo com que a nossa cidade
						sofra ainda mais com alagamentos e enchentes. E como a Prefeitura
						trabalha para mitigar estes problemas.
					</styles.TextCard1>
					<div className="mt-[140px] h-[10px] w-[50px] bg-black mb-[10px]"></div>
					<styles.TextCard>Contexto histórico dos alagamentos</styles.TextCard>
					<styles.TextCard1 className="lg:mb-[60px]">
						Existem diversos motivos pelos quais uma cidade como a nossa sofre
						com estes problemas. Mas antes, precisamos falar um pouco sobre como
						a nossa cidade foi criada e como as escolhas do passado
						contribuíram, infelizmente, para que estes problemas fossem muito
						comuns.
					</styles.TextCard1>
					{/* <img src={marco} className="h-auto w-auto lg:mt-[60px]"></img> */}
				</styles.ContainerCard>
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
			<styles.ContainerCard3 id={"quadro_um_card1"}className=" top-[10vh]">
				<styles.TextCard3>
					Esse é o Rio como você conhece hoje. Foram diversas mudanças até
					chegarmos aqui e em 458 anos de história, muita coisa mudou.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
					A ligação da nossa cidade com a água está no nosso nome.
					Originalmente, a cidade possuía diversos{" "}
					<styles.TextHighlightBlue>cursos de água</styles.TextHighlightBlue>,
					que a cortavam por todas as regiões. Utilizados como cursos náuticos
					para transporte de passageiros e cargas.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
					Graças ao processo de urbanização, diversos rios e mangues foram
					<styles.TextHighlightBlueUm>
						aterrados ou canalizados.
					</styles.TextHighlightBlueUm>{" "}
					Sem muito planejamento urbano, estes processos não consideraram as
					dinâmicas de cheias destes rios.
				</styles.TextCard3>
			</styles.ContainerCard3>
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
		<styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id} >
			<styles.ContainerCard>
				<styles.TextCard1>
					Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1>
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
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[50vh]">
				<styles.TextCard3>
					A impermeabilização do solo, resultado do excesso de asfalto e
					construções, é uma das principais causas dos frequentes alagamentos e
					enchentes que atingem o Rio de Janeiro.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[150vh]">
				<styles.TextCard3>
					A urbanização desenfreada comprometeu a capacidade do solo de absorver
					a água da chuva, dificultando desta forma o escoamento e aumentando o
					risco de inundações.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[250vh]">
				<styles.TextCard3>
					Além disso, a cidade costeira, rodeada pela Baía de Guanabara, sofre
					com a influência direta da maré alta.
				</styles.TextCard3>
			</styles.ContainerCard3>
			{/* <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[310vh]">
				<styles.TextCard3>
					Durante chuvas intensas, a água, que já não é absorvida pelo solo, não
					consegue também ser escoada para o mar, acumulando-se então nas ruas e
					causando transtornos para os cariocas.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[400vh]">
				<styles.TextCard3>
					Infelizmente, o lixo é um grande vilão quando se trata de alagamentos
					e enchentes em nossa cidade. Jogados de forma incorreta nas ruas, o
					lixo entope os bueiros, causando os chamados bolsões d'água.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[500vh]">
				<styles.TextCard3>
					Diariamente, a Comlurb recolhe cerca de 9.000 toneladas de resíduos em
					toda a cidade. Desse montante, 3.600 toneladas são lixo público,
					jogados pelas ruas do Rio.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[600vh]">
				<styles.TextCard3>
					Nosso sistema de saneamento conta a rede de esgoto, a rede fluvial,
					responsável pela canalização dos rios e também com a rede pluvial, que
					capta a água da chuva.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[690vh]">
				<styles.TextCard3>
					Esse problema fica ainda pior quando uma tampa de bueiro é alvo de
					ladrões.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[800vh]">
				<styles.TextCard3>
					Essas proteções são essenciais para impedir que o lixo arrastado pela
					chuva prejudique o bom escoamento e chegue até os rios. Além disso, os
					furtos colocam em risco a segurança de pedestres e motoristas.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[900vh]">
				<styles.TextCard3>
					Desde o início deste ano, a SECONSERVA já precisou repor 862 tampas e
					grelhas em toda a cidade, um prejuízo de R$ 204.183,90 aos cofres
					públicos.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[980vh]">
				<styles.TextCard3>
					Esse problema se torna ainda pior quando as papeleiras espalhadas pela
					cidade são furtadas ou vandalizadas, dificultando o descarte correto
					do lixo.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[1020vh]">
				<styles.TextCard3>
					Em média, 500 a 600 unidades de papeleiras são furtadas ou danificadas
					mensalmente, totalizando cerca de 6.000 ao ano. O prejuízo para os
					cofres públicos é significativo. Segundo a companhia, o valor chega a
					aproximadamente R$ 900 mil por ano, considerando o valor da última
					compra de lixeiras (R$149,77 a unidade).
				</styles.TextCard3>
			</styles.ContainerCard3> */}
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
		<styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
			<styles.ContainerCard>
			<styles.TextCard1>
					Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1>
			</styles.ContainerCard>
		</styles.ChapterGenericDiv1>
	);
}

export function QuadroTres(
	props = {
		id: "",
		chapRef: null,
	}
) {
	props = setDefaultProps(props);

	return (
		<styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
			<styles.ContainerCard3 id={"quadro_um_card1"}className=" top-[10vh]">
				<styles.TextCard3>
					3 Esse é o Rio como você conhece hoje. Foram diversas mudanças até
					chegarmos aqui e em 458 anos de história, muita coisa mudou.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				3 	A ligação da nossa cidade com a água está no nosso nome.
					Originalmente, a cidade possuía diversos{" "}
					<styles.TextHighlightBlue>cursos de água</styles.TextHighlightBlue>,
					que a cortavam por todas as regiões. Utilizados como cursos náuticos
					para transporte de passageiros e cargas.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				3	Graças ao processo de urbanização, diversos rios e mangues foram
					<styles.TextHighlightBlueUm>
						aterrados ou canalizados.
					</styles.TextHighlightBlueUm>{" "}
					Sem muito planejamento urbano, estes processos não consideraram as
					dinâmicas de cheias destes rios.
				</styles.TextCard3>
			</styles.ContainerCard3>
		</styles.ChapterGenericDiv2>
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
		<styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
			<styles.ContainerCard>
			<styles.TextCard1>
					3 Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />
					3 A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1>
			</styles.ContainerCard>
		</styles.ChapterGenericDiv1>
	);
}

export function QuadroQuatro(
	props = {
		id: "",
		chapRef: null,
	}
) {
	props = setDefaultProps(props);

	return (
		<styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
			<styles.ContainerCard3 id={"quadro_um_card1"}className=" top-[10vh]">
				<styles.TextCard3>
					4 Esse é o Rio como você conhece hoje. Foram diversas mudanças até
					chegarmos aqui e em 458 anos de história, muita coisa mudou.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				4 	A ligação da nossa cidade com a água está no nosso nome.
					Originalmente, a cidade possuía diversos{" "}
					<styles.TextHighlightBlue>cursos de água</styles.TextHighlightBlue>,
					que a cortavam por todas as regiões. Utilizados como cursos náuticos
					para transporte de passageiros e cargas.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				4	Graças ao processo de urbanização, diversos rios e mangues foram
					<styles.TextHighlightBlueUm>
						aterrados ou canalizados.
					</styles.TextHighlightBlueUm>{" "}
					Sem muito planejamento urbano, estes processos não consideraram as
					dinâmicas de cheias destes rios.
				</styles.TextCard3>
			</styles.ContainerCard3>
		</styles.ChapterGenericDiv2>
	);
}

export function ParteQuatro(
	props = {
		id: "",
		chapRef: null,
	}
) {
	props = setDefaultProps(props);
	return (
		<styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
			<styles.ContainerCard>
			<styles.TextCard1>
					4 Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />
					4 A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1>
			</styles.ContainerCard>
		</styles.ChapterGenericDiv1>
	);
}
export function QuadroCinco(
	props = {
		id: "",
		chapRef: null,
	}
) {
	props = setDefaultProps(props);

	return (
		<styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
			<styles.ContainerCard3 id={"quadro_um_card1"}className=" top-[10vh]">
				<styles.TextCard3>
					5 Esse é o Rio como você conhece hoje. Foram diversas mudanças até
					chegarmos aqui e em 458 anos de história, muita coisa mudou.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				5 	A ligação da nossa cidade com a água está no nosso nome.
					Originalmente, a cidade possuía diversos{" "}
					<styles.TextHighlightBlue>cursos de água</styles.TextHighlightBlue>,
					que a cortavam por todas as regiões. Utilizados como cursos náuticos
					para transporte de passageiros e cargas.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				5	Graças ao processo de urbanização, diversos rios e mangues foram
					<styles.TextHighlightBlueUm>
						aterrados ou canalizados.
					</styles.TextHighlightBlueUm>{" "}
					Sem muito planejamento urbano, estes processos não consideraram as
					dinâmicas de cheias destes rios.
				</styles.TextCard3>
			</styles.ContainerCard3>
		</styles.ChapterGenericDiv2>
	);
}

export function ParteCinco(
	props = {
		id: "",
		chapRef: null,
	}
) {
	props = setDefaultProps(props);
	return (
		<styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
			<styles.ContainerCard>
			<styles.TextCard1>
					5 Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />
					5 A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1>
			</styles.ContainerCard>
		</styles.ChapterGenericDiv1>
	);
}
export function QuadroSeis(
	props = {
		id: "",
		chapRef: null,
	}
) {
	props = setDefaultProps(props);

	return (
		<styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
			<styles.ContainerCard3 id={"quadro_um_card1"}className=" top-[10vh]">
				<styles.TextCard3>
					6 Esse é o Rio como você conhece hoje. Foram diversas mudanças até
					chegarmos aqui e em 468 anos de história, muita coisa mudou.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				6 	A ligação da nossa cidade com a água está no nosso nome.
					Originalmente, a cidade possuía diversos{" "}
					<styles.TextHighlightBlue>cursos de água</styles.TextHighlightBlue>,
					que a cortavam por todas as regiões. Utilizados como cursos náuticos
					para transporte de passageiros e cargas.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				6	Graças ao processo de urbanização, diversos rios e mangues foram
					<styles.TextHighlightBlueUm>
						aterrados ou canalizados.
					</styles.TextHighlightBlueUm>{" "}
					Sem muito planejamento urbano, estes processos não consideraram as
					dinâmicas de cheias destes rios.
				</styles.TextCard3>
			</styles.ContainerCard3>
		</styles.ChapterGenericDiv2>
	);
}

export function ParteSeis(
	props = {
		id: "",
		chapRef: null,
	}
) {
	props = setDefaultProps(props);
	return (
		<styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
			<styles.ContainerCard>
			<styles.TextCard1>
					6 Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />
					6 A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1>
			</styles.ContainerCard>
		</styles.ChapterGenericDiv1>
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
				<styles.TextCreditos2>Créditos</styles.TextCreditos2>
				<styles.TextCreditos>Autores</styles.TextCreditos>
				<styles.TextCreditos1>
					Caio Jacintho <br />
					Diego Oliveira <br />
					João Carabetta <br />
					Judite Cypreste <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px] ">
					Agradecimentos
				</styles.TextCreditos>
				<styles.TextCreditos1>
					Alexandre Ferreira Reis <br />
					Ana Carla Badaró <br />
					Ana Rebouças <br />
					Flávio Lopes <br />
					Gabriel Gazola Milan <br />
					Luiz Guilherme Gomes <br />
					Marcelo Sepúlvida <br />
					Marco Aurélio Regalo <br />
					Marcus Belchior <br />
					Mylenna Merlo <br />
					Roberto Amazonas <br />
					Vitor Sá Mario Oliveira <br />
					Wanderson José dos Santos <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
					Parceria
				</styles.TextCreditos>
				<styles.TextCreditos1>
					Centro de Operações Rio <br />
					Companhia Municipal de Limpeza Urbana <br />
					Fundação Instituto das Águas do Município do Rio de Janeiro <br />
					Imagine Rio <br />
					Secretaria Municipal de Conservação <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
					Prefeito
				</styles.TextCreditos>
				<styles.TextCreditos1>Eduardo Paes</styles.TextCreditos1>
				<img
					src={logoed}
					className="lg:mb-[160px] mt-[100px] w-[120px] h-auto lg:w-[120px] lg:h-auto"></img>
			</styles.ContainerCard>
		</styles.ChapterGenericDiv>
	);
}
