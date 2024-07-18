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
import { useRef } from "react";
import trailImage from '../images/money.gif';
import { useEffect } from "react";

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

	const lastPosition = useRef({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		const spacing = 50; // espaçamento entre as imagens do rastro
		const currentPosition = { x: e.pageX, y: e.pageY };

		const distance = Math.sqrt(
			Math.pow(currentPosition.x - lastPosition.current.x, 2) +
			Math.pow(currentPosition.y - lastPosition.current.y, 2)
		);

		if (distance >= spacing) {
			lastPosition.current = currentPosition;

			const trail = document.createElement("div");
			trail.className = "trail";
			trail.style.left = `${e.pageX}px`;
			trail.style.top = `${e.pageY}px`;
			trail.style.backgroundImage = `url(${trailImage})`;
			document.body.appendChild(trail);

			setTimeout(() => {
				trail.remove();
			}, 1000); // duração da animação
		}
	};

	useEffect(() => {
		const handleMouseMoveWrapper = (e) => handleMouseMove(e);
		document.addEventListener("mousemove", handleMouseMoveWrapper);
		return () => {
			document.removeEventListener("mousemove", handleMouseMoveWrapper);
		};
	}, []);

	return (
		<styles.CapaDiv
			id={props.id}
		>
			<styles.CapaAutor>
				<img
					src={logo}
					className="absolute top-[5%] lg:absolute lg:top-[20px] h-11 lg:h-14 filter grayscale invert"
					alt="logo"
				/>
				<styles.Title>Destino:<br></br> Rio de Janeiro</styles.Title>
				<styles.Subtitle>
					Como os megaeventos melhoram a economia e transformam <br />
					a cidade em epicentro cultural do Mundo
				</styles.Subtitle>
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
					{/* <styles.Video>
						<video autoPlay muted className="w-full h-full" id="video_capa">
							<source src={video_capa} type="video/mp4" />
						</video>
					</styles.Video> */}

					{/* <div className="h-[10px] w-[50px] bg-black mb-[10px]"></div> */}
					{/* <styles.TextCard>Introdução</styles.TextCard> */}
					<styles.TextCard1>
						O Rio de Janeiro tem fama de anfitrião do mundo: somos reconhecidos internacionalmente como palco de grandes eventos. Mas porquê gastar recursos públicos neles? Só pra ficar bem na fita?
						<br />
						<br />
						Ser famoso é até legal, mas a verdade é que grandes eventos significam grandes públicos. E grandes públicos significam grandes números. Para pular um carnaval ou ver o show da Madonna, turistas do mundo inteiro visitam a cidade. E essa gente toda se hospeda, pega transporte, come, compra e faz negócios.
						<br />
						<br />
						Setores como hotelaria, gastronomia, comércio e serviços são diretamente impactados, aumentando faturamentos e recolhimento de impostos, o que beneficia toda a população carioca. Além disso, a demanda gerada por estes eventos cria milhares de empregos temporários e permanentes.
						<br />
						<br />
						Neste dataviz, elaborado pelo Escritório de Dados da Prefeitura da Cidade do Rio de Janeiro em parceria com a Secretaria Municipal de Desenvolvimento Urbano e Econômico do Rio de Janeiro (SMDUE), você acompanhará a viagem de John, um turista que veio à cidade para assistir a um megashow, e verá como sua presença alimenta uma longa cadeia econômica. Spoiler: no fim, John se apaixona… mas por quem será?
						<br />
						<br />
					</styles.TextCard1>

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
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[10vh]">
				<styles.TextCard3>
					John ouviu dizer que o Rio era um destino incrível. Por isso, ele desembarca pronto para curtir um mega show em Copacabana e aproveitar tudo que a cidade tem a oferecer. Seja bem vindo, John.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
					E ele já chega somando! Ao pagar pela passagem aérea e pelo transporte que o leva até o hotel, ele começa a deixar seu rastro positivo de contribuição. Marina, funcionária do Galeão, e Josiel, motorista de aplicativo, agradecem.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
					Entre 2022 e 2023, a movimentação de passageiros no Galeão quase dobrou: um crescimento de 86% em um ano. Por isso, as taxas de ocupação dos hoteis próximos aos eventos chegam a 100%. Isso porque a cidade recebe entre 200 e 400 mil turistas em cada megashow.
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
		<styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id} >
			<styles.ContainerCard>
				{/* <styles.TextCard1>
					Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1> */}
			</styles.ContainerCard>
		</styles.ChapterGenericDiv1>
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
					Hospedado com vista para a praia de Copacabana, John desfruta de uma das mais belas vistas do mundo, enquanto pensa: “isso não tem preço, e São Paulo não tem isso”.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[150vh]">
				<styles.TextCard3>
					Estudos indicam que estrangeiros ficam na cidade por quatro dias em média, enquanto turistas brasileiros tendem a passar duas diárias por aqui.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[250vh]">
				<styles.TextCard3>
					Depois de contribuir para a economia local ao pagar pela diária do hotel (onde trabalha Débora, a camareira), o turista quer conhecer a cidade. Onde se come bem por aqui?				</styles.TextCard3>
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
				{/* <styles.TextCard1>
					Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1> */}
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
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[10vh]">
				<styles.TextCard3>
					No restaurante de Gustavo, no bairro mais boêmio da cidade, a Lapa, nosso turista se delicia com uma boa feijoada, uma caipirinha e um samba para acompanhar.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
					De quebra, ele faz a roda girar ao pagar pelo consumo e couvert dos músicos Eliomar e Marcinho, movimentando o comércio e gerando renda. Afinal, o cara do violão também tem família!				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
					O ticket-médio de um turista brasileiro na cidade é de R$491,01 por dia, enquanto o do turista estrangeiro é de R$561,98. Já o ticket-médio do carioca e morador da Região Metropolitana do Rio de Janeiro é de R$127,17. Pois é, John não economiza.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[300vh]">
				<styles.TextCard3>
					Segundo o estudo “Potenciais Impactos Econômicos do Web Summit Rio” da SMDUE em parceria com a Invest.Rio, os setores em que os turistas mais gastam são hospedagem, alimentação, meios de transporte, atrações e compras. A oferta é farta!				</styles.TextCard3>
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
				{/* <styles.TextCard1>
					3 Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />
					3 A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1> */}
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
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[10vh]">
				<styles.TextCard3>
					Depois de visitar a Lapa, nosso turista decide levar um pedacinho do Rio para casa.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
					Na lojinha de Solange, no Saara, maior comércio popular da cidade, John se encanta com uma camiseta estampada com o Cristo Redentor e a compra como lembrança, movimentando o comércio de bens. Além disso, ele passa no barbeiro Luiz e faz um corte de cria, aquecendo o setor de serviços. O que é importante, porque 85% da economia do Rio vem daí.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
					Durante grandes eventos, o Rio arrecada mais com impostos. No show da cantora Madonna, por exemplo, estima-se que a arrecadação de impostos tenha aumentado em 20%, um aumento de R$ 10,2 milhões em comparação com o mesmo mês do ano anterior. O valor é superior ao desembolsado pela prefeitura para cobrir o custo do próprio show! E o retorno esperado é quase 30 vezes o investido: R$293,4 milhões.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[300vh]">
				<styles.TextCard3>
					No Carnaval, o Rio arrecada quase R$500 milhões com todos os serviços, ligados ou não à festa. São R$5 bilhões em movimentação graças à folia. Já no Réveillon, esse valor é de R$3 bilhões, e a cidade arrecada quase meio bilhão de reais em impostos, o que corresponde a 8,8% da arrecadação anual dos impostos de turismo e eventos.				</styles.TextCard3>
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
				{/* <styles.TextCard1>
					4 Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />
					4 A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1> */}
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
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[10vh]">
				<styles.TextCard3>
					Chegou a hora: o mega show em Copacabana é a atração principal da viagem de John. Ele se junta à multidão e se diverte com a música, a energia do público e a beleza do cenário.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
					John canta tanto que seca a garganta, dança tanto que sente fome: logo ele consome bebidas e petiscos de Félix e Genilson, ambulantes credenciados enquanto aproveita o show.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
					Assim como o ambulante ganha uma renda extra, outros profissionais também são beneficiados com a vinda de grandes eventos para a cidade do Rio
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[300vh]">
				<styles.TextCard3>
					Durante o Carnaval, por exemplo, 45 mil trabalhadores estão envolvidos na festa, sejam servidores públicos, ambulantes ou pessoas que atuam no Sambódromo. Já no Réveillon, 49 mil empregos são gerados (direta e indiretamente) para garantir que a virada do ano seja um grande espetáculo. E emprego, a gente sabe, é dignidade e segurança.
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
				{/* <styles.TextCard1>
					5 Seja por eventos naturais ou pela ação humana, a função de uma boa
					gestão pública é mitigar estes problemas e evitar que eles interrompam
					o funcionamento das atividades na cidade.
					<br />
					<br />
					5 A seguir, explicaremos para você alguns dos principais motivos
					pelos quais a nossa cidade é um território propício para que este tipo
					de incidente ocorra de forma tão frequente.
				</styles.TextCard1> */}
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
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[10vh]">
				<styles.TextCard3>
					A viagem à cidade para o mega show em Copacabana foi uma experiência inesquecível para John, que já sente saudades.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
					Ele compartilha com amigos e familiares como são as pessoas, o evento e sua nova paixão: a cidade do Rio de Janeiro.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
					Enquanto isso, jornais do mundo todo mostram o sucesso do show na Cidade Maravilhosa.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[300vh]">
				<styles.TextCard3>
					A divulgação da cidade também traz benefícios econômicos para o Rio. Com base em dados da organização do evento, compilados pela Secretaria Municipal de Turismo (SMTUR), a exposição na mídia internacional do show da Madonna no Rio foi equivalente a uma campanha de R$217,6 milhões.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[400vh]">
				<styles.TextCard3>
					Ou seja, caso a cidade do Rio fizesse uma campanha de publicidade na imprensa internacional, teria que gastar mais de R$200 milhões, valor conquistado espontaneamente com a oficialização do show.					</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[500vh]">
				<styles.TextCard3>
					Desse jeito, os primos de John - ou melhor, João! -  já sabem para onde ir nas próximas férias.					</styles.TextCard3>
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
				<br />
				<br />
				<br />
				<br />
				<styles.TextCard1>
					Com uma agenda repleta de grandes eventos, o Rio de Janeiro agora desfruta de uma diversidade de atrações que estimulam sua economia e mostram o grande potencial da cidade em ser um polo cultural e turístico de destaque internacional.
					<br />
					<br />
					Esse cenário reforça o papel da nossa cidade como um dos melhores destinos para qualquer turista ávido por viver todas as belezas e carioquices que só o Rio oferece.
					<br />
					<br />
					Porque no fim das contas, grandes eventos fazem do Rio uma grande cidade.
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
				<styles.TextCreditos2>Fontes</styles.TextCreditos2>
				<styles.TextCreditos>Links</styles.TextCreditos>
				<styles.TextCreditos1 >
					<a href="https://observatorioeconomico.rio/wp-content/uploads/sites/5/2024/04/Estudo-Impacto-Show-Madonna.pdf" target="_blank">Potenciais impactos econômicos do Show da Madonna no Rio. 2024</a> <br />
					<a href="https://observatorioeconomico.rio/wp-content/uploads/sites/5/2024/02/Carnaval-de-Dados-2024.pdf" target="_blank">Carnaval de Dados. 2024</a> <br />
					<a href="https://observatorioeconomico.rio/wp-content/uploads/sites/5/2023/12/VERSAO-FINAL-Relatorio-REVEILLON-EM-DADOS-REVISADO-1.pdf" target="_blank">Réveillon em Dados. 2023</a> <br />

				</styles.TextCreditos1>
				<br></br>
				<br></br>
				<styles.TextCreditos2>Créditos</styles.TextCreditos2>
				<styles.TextCreditos>Autores</styles.TextCreditos>
				<styles.TextCreditos1>
					Caio Jacintho <br />
					Fernando Santana <br />
					Judite Cypreste <br />
					Lucas Tavares <br />
					Marcel Grillo Balassiano <br />
					Mateus Lana <br />
					Pedro Meneghel <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px] ">
					Agradecimentos
				</styles.TextCreditos>
				<styles.TextCreditos1>
					Janaína Salles <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
					CHEFE EXECUTIVO DO ESCRITÓRIO DE DADOS
				</styles.TextCreditos>
				<styles.TextCreditos1>
					João Carabetta <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
					SECRETÁRIO DE DESENVOLVIMENTO URBANO E ECONÔMICO
				</styles.TextCreditos>
				<styles.TextCreditos1>Chicão Bulhões</styles.TextCreditos1>
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
