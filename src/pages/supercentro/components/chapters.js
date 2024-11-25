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
			const sectionHeight = sectionRef.current.scrollHeight;
			const scrollPosition = window.scrollY + window.innerHeight;
			scrollTimeoutRef.current = setTimeout(() => {
				if (scrollPosition < sectionTop + sectionHeight) {
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
				<styles.TextCard1>
					Essas são somente duas das milhares de histórias do Super Centro, por onde passam <b>2,5 mil pacientes por dia</b>, e cuja inauguração representa um avanço crucial na reorganização do sistema de saúde pública do Rio. Com a <b>redução significativa da fila do Sisreg</b>, a nova estrutura vem demonstrando que é possível otimizar o atendimento especializado e reduzir os tempos de espera. <br></br><br></br>Equipado com tecnologia de ponta e concentrando diversos serviços em um só local, o complexo já beneficiou centenas de milhares de cariocas: foram mais de 1.546.572 de consultas, exames, cirurgias e procedimentos entre 2022 e 2024. Ainda há desafios a serem superados, mas a iniciativa aponta para um caminho mais <b>eficiente e humanizado</b> na prestação de cuidados, trazendo uma nova perspectiva para o futuro da saúde pública na cidade.
				</styles.TextCard1>
			</styles.ContainerCard>
		</styles.ChapterGenericDiv1>
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
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[30vh]">
					<styles.TextCard3>
						A famosa <b>fila do Sisreg</b>.
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[300vh]">
					<styles.TextCard3>
						Todo carioca sabe o que é: A fila do Sistema de Regulação é a <b>lista de espera oficial do sistema público de saúde</b>, onde pacientes aguardam por consultas com especialistas, exames, procedimentos e cirurgias. O Sisreg é responsável por organizar e priorizar esses atendimentos, de acordo com critérios clínicos e de urgência, além de controlar a oferta de vagas em unidades de saúde. Devido à alta demanda e à capacidade limitada do sistema, a fila pode ser  longa, levando muitos pacientes a esperarem <b>meses, ou até anos,</b> para receberem o tratamento necessário. O Sisreg é essencial para o funcionamento do sistema. Mas a demanda é grande.

					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[570vh]">
					<styles.TextCard3>
						A partir de 2020,<b> a pandemia da Covid-19 sobrecarregou o sistema de saúde</b> público carioca de maneira sem precedentes, agravando ainda mais os desafios existentes, como a fila do Sisreg. Com a demanda crescente por atendimentos médicos, o sistema enfrentou um colapso temporário, e o número de pacientes na fila mais que dobrou, passando de cerca de 230 mil em 2020 para mais de 610 mil em 2022. A emergência sanitária expôs a <b>necessidade de maior organização e ampliação dos serviços especializados.</b>			</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card4"} className=" top-[850vh]">
					<styles.TextCard3>
						Além disso, houve um aumento da expansão da Atenção Primária à Saúde no Rio de Janeiro. Foram inauguradas <b>diversas Clínicas da Família</b> na última década, o que aumentou significativamente a cobertura de saúde básica: de 3,5% para 80% da população carioca - apesar da queda temporária para 46% em 2020, da qual a cidade já se recuperou.
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericCenter>
				<styles.ContainerCard3 id={"quadro_um_card5"} className=" top-[1350vh]">
					<styles.TextCard3>
						Isso <b>ampliou o acesso inicial dos cidadãos ao sistema público de saúde</b>, permitindo que mais pessoas realizassem consultas e exames de rotina. No entanto, essa maior capilaridade gerou um efeito colateral: com mais diagnósticos sendo feitos, a<b> demanda por consultas especializadas disparou</b>, ainda que dessa vez por um bom motivo: a ampliação da cobertura. Mais de 1 milhão de solicitações passaram a ser registradas anualmente, <b>sobrecarregando, mais uma vez, a fila do Sisreg.</b>
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericCenter>
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card6"} className=" top-[1500vh]">
					<styles.TextCard3>
						Se, por um lado, essa expansão melhorou o acesso inicial ao sistema, por outro, evidenciou a necessidade de reorganização e ampliação dos atendimentos especializados. Foi nesse cenário que a Prefeitura do Rio inaugurou, em 2022, <b>o Super Centro Carioca de Saúde.</b> 				</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card7"} className=" top-[1700vh]">
					<styles.TextCard3>
						O complexo conta com mais de 150 consultórios, além de salas de exame e equipamentos de última geração, 582 especialistas e capacidade para 113 mil exames, consultas e procedimentos por mês, pelo Sistema Único de Saúde (SUS). Assim, une especialidades diversas em um único lugar, concentra atendimentos e procedimentos e otimiza a logística médica, acelerando todo o processo para os pacientes esperarem menos. <b>A partir da inauguração, a fila do Sisreg caiu abaixo da metade em menos de 2 anos</b>: de 160 dias de média de espera em 2020, chegou a 75 em 2024.
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card8"} className=" top-[1850vh]">
					<styles.TextCard3>
						Em muitos casos, a fila foi “equalizada”, ou seja, foi reduzida momentaneamente de forma a atender todas as pessoas que esperavam por determinado procedimento.				</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericCenter>
				<styles.ContainerCard3 id={"quadro_um_card9"} className=" top-[2050vh]">
					<styles.TextCard3>
						Vejamos como funciona: A estrutura do Super Centro se divide em 3 unidades:
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericCenter>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card9b"} className=" top-[2300vh]">
					<styles.TextCard3>
						O <b>Centro Carioca de Especialidades (CCE)</b> oferece atendimento em especialidades médicas e odontológicas.
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card10"} className=" top-[2550vh]">
					<styles.TextCard3>
						O <b>Centro Carioca de Diagnóstico e Tratamento por Imagem</b> possui modernos equipamentos de saúde para realizar exames, procedimentos e consultas.				</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card11"} className=" top-[2750vh]">
					<styles.TextCard3>
						No <b>Hospital do Olho</b>, além de consultas e exames, também há cirurgias e outros procedimentos de correção da visão. O centro conta com equipe clínica e cirúrgica de oftalmologistas.							</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card12"} className=" top-[2950vh]">
					<styles.TextCard3>
						Milhares de pessoas são atendidas por cada uma dessas unidades.							</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card13"} className=" top-[3100vh]">
					<styles.TextCard3>
						Como foi o caso de Mauro, 53 anos, morador da Tijuca.					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card14"} className=" top-[3250vh]">
					<styles.TextCard3>
						Ele foi encaminhado por uma Clínica da Família para consulta com um pneumologista no CCE. 					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card15"} className=" top-[3500vh]">
					<styles.TextCard3>
						O Centro Carioca de Especialidades (CCE) também oferece atendimento em outras dezoito especialidades médicas e seis especialidades odontológicas. 					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card16"} className=" top-[3850vh]">
					<styles.TextCard3>
						Além dessas especialidades, o CCE também oferece Cirurgia Vascular; Coloproctologia; Endocrinologia; Gastroenterologia; Hepatologia; Otorrinolaringologia;
						Reumatologia; Angiologia; Fonoaudiologia infantil; Diálise Peritoneal.

						Além de especialidades odontológicas como: Cirurgia Oral Menor; Dor Oro Facial / Disfunção Têmporo-mandibular; Endodontia; Estomatologia; Paciente com Necessidades Especiais; Periodontia.
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card18"} className=" top-[3950vh]">
					<styles.TextCard3>
						O médico solicitou uma tomografia e depois de exames, Mauro foi diagnosticado com câncer nos pulmões.

					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card19"} className=" top-[4100vh]">
					<styles.TextCard3>
						Ele foi encaminhado ao INCA (Instituto Nacional do Câncer) para tratamento. Os médicos solicitaram um PET Scan, um exame avançado de imagem. Esse exame é feito no Centro de Diagnóstico Carioca, logo ao lado, equipado com os mais modernos aparelhos médicos.

					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card20"} className=" top-[4200vh]">
					<styles.TextCard3>
						O equipamento de PET Scan do CCD é o único da rede municipal de saúde.

					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card21"} className=" top-[4300vh]">
					<styles.TextCard3>
						O CCD conta ainda com diversos outros equipamentos modernos para todo tipo de exames e procedimentos.

					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card22"} className=" top-[4700vh]">
					<styles.TextCard3>
						O CCD oferece também:<br></br>

						Biópsias; Cintilografia; Densitometria; Doppler Venoso e Arterial; Ecocardiografia transtorácica; Eletroneuromiografia
						Espirometria; Histeroscopia diagnóstica odontológica; Videolaringoscopia


					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericLeft>
				<styles.ContainerCard3 id={"quadro_um_card23"} className=" top-[4850vh]">
					<styles.TextCard3>
						Maria, 55 anos, de Irajá, tem catarata.
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericLeft>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card24"} className=" top-[4950vh]">
					<styles.TextCard3>
						Ela veio ao Centro Carioca do Olho (Hospital do Olho).
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card26"} className=" top-[5050vh]">
					<styles.TextCard3>
						Aqui, ela se consulta com um oftalmologista, faz os exames, a cirurgia de catarata e recebe óculos novos. Isso porque o centro conta com equipe clínica e cirúrgica, além de uma ótica e oferta de diversos procedimentos.
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>
			<styles.ChapterGenericRight>
				<styles.ContainerCard3 id={"quadro_um_card26"} className=" top-[5650vh]">
					<styles.TextCard3>
						O Hospital do Olho também oferece: Oftalmologia - Pediatria; tratamento para Glaucoma; Cirurgias de: Catarata; Retina Geral; Córnea; Ceratocone; Estrabismo; Plástica Ocular; Reflexo Vermelho alterado e Sondagem de Vias Lacrimais (Pediatria); além de diversos outros procedimentos.
					</styles.TextCard3>
				</styles.ContainerCard3>
			</styles.ChapterGenericRight>

		</styles.ChapterGenericDiv2>
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
				<br></br>
				<br></br>
				<styles.TextCreditos2>Créditos</styles.TextCreditos2>
				<styles.TextCreditos>ESCRITÓRIO DE DADOS</styles.TextCreditos>
				<styles.TextCreditos1>
					Caio Jacintho <br />
					Fernando Santana <br />
					Lucas Tavares <br />
					Mateus Lana <br />
					Pedro Meneghel <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
					CHEFE EXECUTIVO DO ESCRITÓRIO DE DADOS
				</styles.TextCreditos>
				<styles.TextCreditos1>
					João Carabetta <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
					SECRETARIA MUNICIPAL DE SAÚDE
				</styles.TextCreditos>
				<styles.TextCreditos1>Daniel Soranz<br /></styles.TextCreditos1>
				<styles.TextCreditos1>Alexandre Modesto<br /></styles.TextCreditos1>
				<styles.TextCreditos1>Fernanda Adaes<br /></styles.TextCreditos1>
				<styles.TextCreditos1>Claudia Ferrari<br /></styles.TextCreditos1>
				<styles.TextCreditos1>Paula Fiorito<br /></styles.TextCreditos1>
				<styles.TextCreditos1>Clarissa Mello<br /></styles.TextCreditos1>
				<styles.TextCreditos1>Elaine Duim<br /></styles.TextCreditos1>
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
