import * as styles from "./chapters.style";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";
import { isMobile } from "react-device-detect";

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
    // <styles.CapaDiv id={props.id} ref={props.chapRef}>
    //   <styles.CapaAutor>
    //     <styles.Title>Painel de Investimentos</styles.Title>
    //   </styles.CapaAutor>
    // </styles.CapaDiv>
    <styles.HeaderOne>
    <div className="h-[80px] w-full mt-[80px] flex flex-col bg-[#014A7F]"></div>
    <div className="absolute right-[10%] w-[500px] h-[90%] bg-[#014A7F]"></div>
    </styles.HeaderOne>

  );
}

// export function Creditos(
//   props = {
//     id: "",
//     chapRef: null,
//   }
// ) {
//   props = setDefaultProps(props);

//   return (
//     <styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id}>
//       <styles.ContainerCard>
//         <styles.ContainerCardCreditos>
//           <styles.NewsTitle1>Autores</styles.NewsTitle1>
//           <styles.TextCard1>
//             Caio Jacintho <br />
//             Diego Oliveira <br />
//             Judite Cypreste <br />
//             Maria Eduarda Couto
//           </styles.TextCard1>
//           <styles.NewsTitle1 className=" lg:mt-[40px] mt-[60px] ">
//             Agradecimentos
//           </styles.NewsTitle1>
//           <styles.TextCard1>
//             Brenno Carnevale
//             <br />
//             Clara de Lernia <br />
//             Izabel Rizzo <br />
//             João Carabetta <br />
//             Paulo Mac Culloch <br />
//             Rodrigo Abreu
//           </styles.TextCard1>
//           <styles.NewsTitle1 className=" lg:mt-[40px] mt-[60px]">
//             Parceria
//           </styles.NewsTitle1>
//           <styles.TextCard1>
//             Escritório de Dados
//             <br />
//             Secretaria de Ordem Pública{" "}
//           </styles.TextCard1>
//           <styles.NewsTitle1 className=" lg:mt-[40px] mt-[60px]">
//             Prefeito
//           </styles.NewsTitle1>
//           <styles.TextCard1>Eduardo Paes</styles.TextCard1>
//         </styles.ContainerCardCreditos>
//       </styles.ContainerCard>
//     </styles.ChapterGenericDiv4>
//   );
// }
