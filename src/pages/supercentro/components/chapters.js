import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";
import { isMobile } from "react-device-detect";

// IMAGENS
import logoed from "../images/logoed.png";
import logo from "../images/logo.png";

// import video_capa from "../videos/capa.mp4";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useState } from "react";
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

	return (
		<>
			<ContextoHistorico id={"contexto_historico"} />
			<div style={{ display: "flex", flexDirection: "column", height: "220vh", width: "100%", alignItems: "center" }}>
				<video
					style={{
						position: "sticky",
						top: "50%",
						transform: "translateY(-50%)",
						maxHeight: "100vh",
						margin: "0 auto",
						display: "block",
					}}
					loop
					playsInline
					autoPlay
					muted
					src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/supercentro/SUPERCENTRO_CAPA2.mp4"
				/>
			</div>
		</>

	);
}

export function ContextoHistorico(
	props = {
		id: "",
		chapRef: null,
	}
) {
	props = setDefaultProps(props);
	const wrapRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const wrapElement = wrapRef.current;
		const textElement = textRef.current;

		gsap.to(wrapElement, {
			backgroundColor: 'rgba(255, 255, 255, 0)',
			backdropFilter: 'blur(0px)',
			scrollTrigger: {
				trigger: wrapElement,
				start: 'top top',
				end: 'center top',
				scrub: true,
			},
		});

		gsap.to(textElement, {
			opacity: 0,
			scrollTrigger: {
				trigger: wrapElement,
				start: 'top top',
				end: 'center top',
				scrub: true,
			},
		});
	}, []);

	return (
		<styles.Wrap ref={wrapRef}>
			<img
				src={logo}
				className="lg:mb-[120px] w-[100px] h-auto lg:w-[100px] lg:h-auto"
				style={{
					position: 'absolute',
					top: '20px',
					left: '50%',
					transform: 'translateX(-50%)',
					zIndex: 1,  // Garante que a imagem fique acima do vídeo
					// filter: 'brightness(0) '
				}}
				alt="Descrição da imagem"
			/>
			<styles.ScrollableWrap ref={textRef}>
				<styles.Title>
					Super Centro Carioca de Saúde: o mais moderno complexo de saúde da América Latina
				</styles.Title>
				<styles.Subtitle>
					Como o tempo de espera dos cariocas na fila do Sisreg diminuiu com a inauguração do Centro
				</styles.Subtitle>
				<div>
					<styles.AuthorText>
						Desenvolvido por{" "}
						<a
							className="font-bold underline"
							href="https://www.dados.rio/"
							target="_blank"
							rel="noreferrer"
						>
							Escritório de Dados
						</a>
					</styles.AuthorText>
				</div>
			</styles.ScrollableWrap>
		</styles.Wrap>
	);
}

export function QuadroUm(props) {
	const { showArrow, sectionRef } = useScrollArrow();

	return (
		<styles.ChapterGenericDiv2 ref={sectionRef} id={props.id}>
			{showArrow && (
				<div className="scroll-arrow-container" style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
					<img src={arrowdown} alt="Keep scrolling" />
					<p style={{ paddingTop: "0px", fontSize: "16px" }}>Continue descendo</p>
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
					Jeferson Monteiro <br />
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
					Secretaria de Turismo
				</styles.TextCreditos>
				<styles.TextCreditos1>Daniela Maia</styles.TextCreditos1>
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
