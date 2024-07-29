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

// import video_capa from "../videos/capa.mp4";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useState } from "react";
import trailImage from '../images/money.gif';
import { useEffect } from "react";
import arrowdown from "../images/arrowdown.png";

gsap.registerPlugin(ScrollTrigger);

const setDefaultProps = (providedProps) => {
	const defaultProps = {
		id: "",
	};

	return { ...defaultProps, ...providedProps };
};

export function useScrollArrow() {
	const [showArrow, setShowArrow] = useState(false);
	const sectionRef = useRef(null);
	const scrollTimeoutRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return;
			setShowArrow(false);
			clearTimeout(scrollTimeoutRef.current);
			const sectionTop = sectionRef.current.offsetTop;
			const sectionHeight = sectionRef.current.offsetHeight;
			const scrollPosition = window.scrollY + window.innerHeight;
			scrollTimeoutRef.current = setTimeout(() => {
				if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
					setShowArrow(true);
				}
			}, 1000);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(scrollTimeoutRef.current);
		};
	}, []);

	return { showArrow, sectionRef };
}

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

	const handleClick = () => {
		window.scrollBy({
			top: window.innerHeight * 1, // 100vh
			left: 0,
			behavior: 'smooth'
		});
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
			onClick={handleClick}
			style={{ cursor: 'pointer' }}
		>
			<styles.CapaAutor >

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
						Neste dataviz, elaborado pelo Escritório de Dados da Prefeitura da Cidade do Rio de Janeiro em parceria com a Secretaria Municipal de Desenvolvimento Urbano e Econômico do Rio de Janeiro (SMDUE) e com o Instituto Fundação João Goulart (FJG), você acompanhará a viagem de John, um turista que veio à cidade para assistir a um megashow, e verá como sua presença alimenta uma longa cadeia econômica. Spoiler: no fim, John se apaixona… mas por quem será?
						<br />
						<br />
					</styles.TextCard1>

					<div>
						<div className="mt-[30px] h-[3px] w-[20px] bg-black"></div>
						<styles.AuthorText className="font-bold mt-[8px] mr-[20px] lg:w-[420px]">
							Desenvolvido pela Equipe de Visualização de Dados do{" "}
							<a
								className="underline"
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

export function QuadroUm(props) {
	const { showArrow, sectionRef } = useScrollArrow();

	return (
		<styles.ChapterGenericDiv2 ref={sectionRef} id={props.id}>
			{showArrow && (
				<div className="scroll-arrow-container" style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
					<img src={arrowdown} alt="Keep scrolling" />
					<p style={{ paddingTop: "15px", fontSize: "20px" }}>Continue descendo</p>
				</div>
			)}
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[30vh]">
				<styles.TextCard3>
					John ouviu dizer que o Rio era um destino incrível. Por isso, ele desembarca pronto para curtir um mega show em Copacabana e aproveitar tudo que a cidade tem a oferecer. Seja bem vindo, John.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[250vh]">
				<styles.TextCard3>
					E ele já chega somando! Ao pagar pela passagem aérea e pelo transporte que o leva até o hotel, ele começa a deixar seu rastro positivo de contribuição. Marina, funcionária do Galeão, e Josiel, motorista de aplicativo, agradecem.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[400vh]">
				<styles.TextCard3>
					Entre 2022 e 2023, a movimentação de passageiros no Galeão quase dobrou: um crescimento de 86% em um ano. A cidade recebeu 1,3 milhões de turistas estrangeiros e 16,4 milhões de turistas nacionais em 2023, totalizando 17,8 milhões turistas, segundo a Secretaria Municipal de Turismo do Rio de Janeiro (SMTUR).				</styles.TextCard3>
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
	const { showArrow, sectionRef } = useScrollArrow();
	return (

		<styles.ChapterQuadroDois ref={sectionRef} id={props.id}>
			{showArrow && (
				<div className="scroll-arrow-container" style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
					<img src={arrowdown} alt="Keep scrolling" />
					<p style={{ paddingTop: "15px", fontSize: "20px" }}>Continue descendo</p>
				</div>
			)}
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[220vh]">
				<styles.TextCard3>
					Hospedado com vista para a praia de Copacabana, John desfruta de uma das mais belas vistas do mundo, enquanto pensa: “isso não tem preço, e São Paulo não tem isso”.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[500vh]">
				<styles.TextCard3>
					Estudos indicam que estrangeiros ficam na cidade por 7 dias em média, enquanto turistas brasileiros tendem a passar quase 6 diárias por aqui.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[800vh]">
				<styles.TextCard3>
					Depois de contribuir para a economia local ao pagar pela diária do hotel (onde trabalha Débora, a camareira), o turista quer conhecer a cidade. Onde se come bem por aqui?				</styles.TextCard3>
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
	const { showArrow, sectionRef } = useScrollArrow();


	return (
		<styles.ChapterGenericDiv2 ref={sectionRef} id={props.id}>
			{showArrow && (
				<div className="scroll-arrow-container" style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
					<img src={arrowdown} alt="Keep scrolling" />
					<p style={{ paddingTop: "15px", fontSize: "20px" }}>Continue descendo</p>
				</div>
			)}
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[110vh]">
				<styles.TextCard3>
					No restaurante de Gustavo, no bairro mais boêmio da cidade, a Lapa, nosso turista se delicia com uma boa feijoada, uma caipirinha e um samba para acompanhar.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[300vh]">
				<styles.TextCard3>
					De quebra, ele faz a roda girar ao pagar pelo consumo e couvert dos músicos Eliomar e Marcinho, movimentando o comércio e gerando renda. Afinal, o cara do violão também tem família!				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[420vh]">
				<styles.TextCard3>
					O ticket-médio de um turista brasileiro na cidade é de R$384,35 por dia, enquanto o do turista estrangeiro é de R$462,20. Pois é, John não economiza.			</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[520vh]">
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
	const { showArrow, sectionRef } = useScrollArrow();

	return (
		<styles.ChapterGenericDiv2 ref={sectionRef} id={props.id}>
			{showArrow && (
				<div className="scroll-arrow-container" style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
					<img src={arrowdown} alt="Keep scrolling" />
					<p style={{ paddingTop: "15px", fontSize: "20px" }}>Continue descendo</p>
				</div>
			)}
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[110vh]">
				<styles.TextCard3>
					Depois de visitar a Lapa, nosso turista decide levar um pedacinho do Rio para casa.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[210vh]">
				<styles.TextCard3>
					Na lojinha de Solange, no Saara, maior comércio popular da cidade, John se encanta com uma camiseta estampada com o Cristo Redentor e a compra como lembrança, movimentando o comércio de bens. </styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[310vh]">
				<styles.TextCard3>
					Além disso, ele passa no barbeiro Luiz e faz um corte de cria, aquecendo o setor de serviços. O que é importante, porque 85% da economia do Rio vem daí.				 </styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[410vh]">
				<styles.TextCard3>
					Durante grandes eventos, o Rio arrecada mais com impostos. Os setores de eventos e turismo são responsáveis pela arrecadação de mais de R$300 milhões de impostos (ISS) por ano. </styles.TextCard3>
			</styles.ContainerCard3>

			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[510vh]">
				<styles.TextCard3>
					O Carnaval movimenta R$5 bilhões na economia do Rio. Já o Réveillon, R$3 bilhões, e o Rock In Rio, R$1,7 bilhão. Estima-se que as seis edições do Web Summit Rio (2023-2028) devem impactar a economia carioca em R$1,5 bilhão.				</styles.TextCard3>
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
	const { showArrow, sectionRef } = useScrollArrow();

	return (
		<styles.ChapterGenericDiv2 ref={sectionRef} id={props.id}>
			{showArrow && (
				<div className="scroll-arrow-container" style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
					<img src={arrowdown} alt="Keep scrolling" />
					<p style={{ paddingTop: "15px", fontSize: "20px" }}>Continue descendo</p>
				</div>
			)}
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[90vh]">
				<styles.TextCard3>
					Chegou a hora: o mega show em Copacabana é a atração principal da viagem de John. Ele se junta à multidão e se diverte com a música, a energia do público e a beleza do cenário.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[180vh]">
				<styles.TextCard3>
					John canta tanto que seca a garganta, dança tanto que sente fome: logo ele consome bebidas e petiscos de Félix e Genilson, ambulantes credenciados enquanto aproveita o show.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[270vh]">
				<styles.TextCard3>
					Assim como o ambulante ganha uma renda extra, outros profissionais também são beneficiados com a vinda de grandes eventos para a cidade do Rio
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[360vh]">
				<styles.TextCard3>
					Durante o Carnaval, por exemplo, 45 mil trabalhadores estão envolvidos diretamente na festa, sejam servidores públicos, ambulantes ou pessoas que atuam no Sambódromo.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[450vh]">
				<styles.TextCard3>
					Já no Réveillon, quase 50 mil empregos são gerados (direta e indiretamente) para garantir que a virada do ano seja um grande espetáculo. E emprego, a gente sabe, é dignidade e segurança.
				</styles.TextCard3>
			</styles.ContainerCard3>
			{/* <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[400vh]">
				<styles.TextCard3>
					A viagem à cidade para o mega show em Copacabana foi uma experiência inesquecível para John, que já sente saudades.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[500vh]">
				<styles.TextCard3>
					Ele compartilha com amigos e familiares como são as pessoas, o evento e sua nova paixão: a cidade do Rio de Janeiro.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[600vh]">
				<styles.TextCard3>
					Enquanto isso, jornais do mundo todo mostram o sucesso do show na Cidade Maravilhosa.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[700vh]">
				<styles.TextCard3>
					A divulgação da cidade também traz benefícios econômicos para o Rio. Com base em dados da organização do evento, compilados pela Secretaria Municipal de Turismo (SMTUR), a exposição na mídia internacional do show da Madonna no Rio foi equivalente a uma campanha de R$217,6 milhões.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[800vh]">
				<styles.TextCard3>
					Ou seja, caso a cidade do Rio fizesse uma campanha de publicidade na imprensa internacional, teria que gastar mais de R$200 milhões, valor conquistado espontaneamente com a oficialização do show.					</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[900vh]">
				<styles.TextCard3>
					Desse jeito, os primos de John - ou melhor, João! -  já sabem para onde ir nas próximas férias.					</styles.TextCard3>
			</styles.ContainerCard3> */}
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
	const { showArrow, sectionRef } = useScrollArrow();
	return (
		<styles.ChapterGenericDiv2 ref={sectionRef} id={props.id}>
			{showArrow && (
				<div className="scroll-arrow-container" style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
					<img src={arrowdown} alt="Keep scrolling" />
					<p style={{ paddingTop: "15px", fontSize: "20px" }}>Continue descendo</p>
				</div>
			)}
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
					A divulgação da cidade também traz benefícios econômicos para o Rio. Com base em dados da organização do evento, compilados pela Secretaria Municipal de Turismo (SMTUR), a exposição na mídia internacional do anúncio do show da Madonna no Rio foi equivalente a uma campanha de R$217,6 milhões.				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[400vh]">
				<styles.TextCard3>
					Ou seja, caso a cidade do Rio fizesse uma campanha de publicidade na imprensa internacional, teria que gastar mais de R$200 milhões, valor conquistado espontaneamente com a oficialização do show.					</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[500vh]">
				<styles.TextCard3>
					Desse jeito, os amigos de John - ou melhor, João! -  já sabem para onde ir nas próximas férias.					</styles.TextCard3>
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
					Pedro Arias <br />
					Pedro Meneghel <br />
					Renata Paes Leme <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px] ">
					Agradecimentos
				</styles.TextCreditos>
				<styles.TextCreditos1>
					Caroline Brito  <br />
					Janaína Salles <br />
					Miguel Sebastian Saavedra <br />
					Rafael Lisboa <br />
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
					Fundação João Goulart
				</styles.TextCreditos>
				<styles.TextCreditos1>Rafaela Bastos</styles.TextCreditos1>
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
