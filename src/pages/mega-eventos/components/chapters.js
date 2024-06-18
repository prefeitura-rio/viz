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
				<styles.Title>Rio, palco mundial da cultura </styles.Title>
				<styles.Subtitle>
				Como os megaeventos melhoram a economia e transformam a cidade em epicentro cultural do Mundo
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
					{/* <styles.Video>
						<video autoPlay muted className="w-full h-full" id="video_capa">
							<source src={video_capa} type="video/mp4" />
						</video>
					</styles.Video> */}

					{/* <div className="h-[10px] w-[50px] bg-black mb-[10px]"></div> */}
					{/* <styles.TextCard>Introdução</styles.TextCard> */}
					<styles.TextCard1>
					Que o Rio de Janeiro sempre foi palco de diversos grandes eventos nacionais e internacionais, todo mundo já sabe. Mas você conhece a verdadeira importância desses eventos para a economia da cidade?
						<br />
						<br />
						Os megaeventos, que vão desde o icônico carnaval até espetáculos de artistas como Madonna, não só atraem turistas do mundo inteiro, como também impulsionam significativamente a economia local.
						<br />
						<br />
						O impacto econômico é perceptível em diversos setores, como hotelaria, gastronomia, comércio e serviços. A demanda gerada por esses eventos ajuda  na criação de milhares de empregos temporários e permanentes, beneficiando diretamente a população carioca.
						<br />
						<br />
						Neste dataviz, elaborado pelo Escritório de Dados da Prefeitura do Rio de Janeiro em parceria com a Secretaria Municipal de Desenvolvimento Econômico, Inovação e Simplificação (SMDEIS), você poderá acompanhar a jornada de um turista que veio à cidade para assistir a um megashow e como em sua visita ele contribui para a economia local e se apaixona pelo Rio.	
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
			<styles.ContainerCard3 id={"quadro_um_card1"}className=" top-[10vh]">
				<styles.TextCard3>
				Nosso turista chega ao Rio de Janeiro pronto para curtir mais um mega show em Copacabana e aproveitar tudo que a cidade tem a oferecer.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				Ele já inicia sua jornada movimentando a economia local, pagando pela passagem aérea até a cidade e pelo transporte que o levará até o hotel em que ficará hospedado.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				Em dezembro de 2023 houve um significativo crescimento de 86% na movimentação de passageiros no Galeão em relação ao mesmo mês no ano anterior.
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
				Hospedado em um hotel com vista para a praia de Copacabana, o turista desfruta de uma das mais belas vistas do mundo.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[150vh]">
				<styles.TextCard3>
				Estudos indicam que estrangeiros geralmente ficam na cidade por cerca de quatro dias, enquanto turistas brasileiros tendem a ficar por cerca de dois dias.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[250vh]">
				<styles.TextCard3>
				Além de contribuir para a economia local ao pagar pela diária do hotel, o turista também usufrui dos serviços adicionais que o local oferece.
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
				Em um restaurante no bairro mais boêmio da cidade, a Lapa, nosso turista se delicia com uma boa refeição e um sambinha para acompanhar.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				De quebra, ele contribui para a economia local ao pagar pela refeição e couvert dos músicos, movimentando o comércio e gerando renda.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				Segundo estimativas da Secretaria Municipal de Desenvolvimento Urbano e Econômico (SMDUE), com base na pesquisa “Rio de Janeiro a Janeiro” da Fundação Getulio Vargas (FGV), o ticket-médio de um turista brasileiro na cidade é de R$ 491,01 por dia, enquanto o do turista estrangeiro é de R$ 561,98. Já o ticket-médio do carioca e morador da Região Metropolitana do Rio de Janeiro é de R$ 127,17.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[300vh]">
				<styles.TextCard3>
				Segundo o estudo “Potenciais Impactos Econômicos do Web Summit Rio” da SMDUE em parceria com a Invest.Rio, os setores que turistas mais gastam são com a hospedagem, a alimentação, meios de transporte, para deslocamentos, atrações e compras.
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
				Depois de visitar a Lapa, nosso turista decide levar um pedacinho do Rio para casa.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				No Saara, maior comércio popular da cidade, ele se encanta com uma camiseta com estampa do Rio em uma loja de souvenirs e decide levar uma lembrança, contribuindo para a economia local.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				Durante grandes eventos, o Rio arrecada mais com impostos. No show da cantora Madonna, por exemplo, estima-se que a arrecadação de impostos tenha aumentado em 20%, elevando a arrecadação de maio para R$ 60,9 milhões, um aumento de R$ 10,2 milhões em comparação com o mesmo mês do ano anterior.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[300vh]">
				<styles.TextCard3>
				No Carnaval, o Rio arrecada quase R$ 500 milhões com todos os serviços, ligados ou não à festa. Já no Réveillon, a cidade arrecada quase meio bilhão de reais em impostos, o que corresponde a 8,8% da arrecadação anual dos impostos de turismo e eventos.
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
				O mega show em Copacabana é a atração principal da viagem do turista.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				Ele se junta à multidão e se diverte com a música, a energia do público e a beleza do cenário.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				O turista consome de ambulantes credenciados para matar a sede enquanto aproveita o show.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[300vh]">
				<styles.TextCard3>
				Durante o Carnaval, por exemplo, 45 mil trabalhadores estão envolvidos na festa, sejam servidores públicos, ambulantes ou pessoas que atuam no Sambódromo. Já no Réveillon, 49 mil empregos são gerados (direta e indiretamente) para garantir que a virada do ano seja um grande espetáculo.
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
				A viagem ao Rio de Janeiro para o mega show em Copacabana foi uma experiência inesquecível para o turista.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				Ele retorna para casa e compartilha com amigos e familiares como foi incrível a sua experiência.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				Enquanto isso, jornais do mundo todo mostram o sucesso do show na Cidade Maravilhosa.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[300vh]">
				<styles.TextCard3>
				A divulgação da cidade também traz benefícios econômicos para o Rio. Com base em dados da organização do evento, compilados pela Secretaria Municipal de Turismo (SMTUR), a exposição na mídia internacional do show da Madonna no Rio, após o anúncio oficial, foi de US$ 43,9 milhões, o equivalente a R$ 217,6 milhões.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[400vh]">
				<styles.TextCard3>
				Ou seja, caso a cidade do Rio fizesse uma campanha de publicidade na imprensa internacional, teria que gastar mais de R$ 200 milhões, valor conquistado espontaneamente com a oficialização do show.				</styles.TextCard3>
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
			Com uma agenda repleta de grandes eventos, o Rio de Janeiro agora desfruta de uma diversidade de atrações que impulsionam sua economia e mostram o grande potencial que a cidade tem em ser um importante polo cultural e turístico de destaque internacional.
					<br />
					<br />
					Esse cenário reforça o papel da nossa cidade como um dos melhores destinos para qualquer um que queira viver todas as belezas e carioquices que só o Rio tem a oferecer.
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
				<styles.TextCreditos2>Referências</styles.TextCreditos2>
				<styles.TextCreditos>Links</styles.TextCreditos>
				<styles.TextCreditos1 >
					<a href="https://observatorioeconomico.rio/wp-content/uploads/sites/5/2024/04/Estudo-Impacto-Show-Madonna.pdf" target="_blank">Show de madona</a> <br />
					<a href="https://observatorioeconomico.rio/wp-content/uploads/sites/5/2024/02/Carnaval-de-Dados-2024.pdf" target="_blank">Carnaval de Dados 2024</a> <br />
					<a href="https://observatorioeconomico.rio/wp-content/uploads/sites/5/2023/12/VERSAO-FINAL-Relatorio-REVEILLON-EM-DADOS-REVISADO-1.pdf" target="_blank">Réveillon em Dados 2023</a> <br />
					
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
					Pedro Meneghel <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px] ">
					Agradecimentos
				</styles.TextCreditos>
				<styles.TextCreditos1>
				  Janaína Salles <br />
				</styles.TextCreditos1>
				<styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
				COORDENADOR DO ESCRITÓRIO DE DADOS
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
