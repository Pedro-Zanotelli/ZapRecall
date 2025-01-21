import styled from "styled-components";
import setaPlay from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"
import certo from "../assets/icone_certo.png"
import errado from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"
import { useState } from "react";

export default function Carta({ card, numPergunta, adicionarConcluidos }) {
    const { question, answer } = card;
    const [estado, setEstado] = useState(0); 
    const [imagemFinal, setImagemFinal] = useState(null); 
    const [corTexto, setCorTexto] = useState("#000000");
  
    function clicar() {
      if (estado < 2) {
        setEstado(estado + 1);
      }
    }
    
    function escolherBotao(imagem, cor) {
      setImagemFinal(imagem);
      setCorTexto(cor);
      setEstado(3);
      adicionarConcluidos()
    }

    const estado1 = (estado === 1);
    const estado2 = (estado === 2);
    const estado3 = (estado === 3);
  
    return (
      <CartaCss virada={estado1 || estado2} virada2={estado3} corTexto={corTexto}>
        <p>{estado === 1 ? question : estado === 2 ? answer : numPergunta}</p>
        {estado === 0 && (
          <img
            src={setaPlay}    
            alt="seta play"
            onClick={clicar}
          />
        )}
  
        {estado === 1 && (
          <img
            src={setaVirar}
            alt="seta virar"
            onClick={clicar}
          />
        )}
  
        {estado === 2 && (
          <BotoesCss>
            <BotaoCss cor="#FF3030" onClick={() => escolherBotao(errado, "#FF3030")}>Não lembrei</BotaoCss>
            <BotaoCss cor="#FF922E" onClick={() => escolherBotao(quase, "#FF922E")}>Quase não lembrei</BotaoCss>
            <BotaoCss cor="#2FBE34" onClick={() => escolherBotao(certo, "#2FBE34")}>Zap!</BotaoCss>
          </BotoesCss>
        )}
  
        {estado === 3 && imagemFinal && (
          <img
            src={imagemFinal}
            alt="Imagem final"
          />
        )}
      </CartaCss>
    );
  }

const CartaCss = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 25px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    width: 300px;
    height: ${(props) => (props.virada ? "130px" : "60px")};
    background-color: ${(props) => (props.virada ? "#FFFFD4" : "#ffffff")};
    align-items: ${(props) => (props.virada ? "flex-start" : "center")};
    justify-content: ${(props) => (props.virada ? "flex-start" : "space-between")};
    p {
        font-family: "Recursive", serif;
        font-weight: 700;
        font-size: 16px;
        margin-right: 10px;
        text-decoration: ${(props) => props.virada2 ? "line-through" : ""};
        color: ${(props) => props.corTexto};
        ${(props) =>
            props.virada &&`
            position: absolute; 
            top: 18px;
            left: 15px; 
        `}
    }
    img {
        cursor: pointer;
        width: ${(props) => (props.virada ? "30px" : props.virada2 ? "23px" : "20px")};;
        height: ${(props) => (props.virada ? "20px" : props.virada2 ? "23px" : "23px")};;
        ${(props) =>
            props.virada &&`
            position: absolute;
            bottom: 10px;
            right: 10px;
        `}
    }
`

const BotaoCss = styled.button`
    width: 85px;
    height: 37px;
    background-color: ${(props) => props.cor};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Recursive", serif;
    font-weight: 400;
    font-size: 12px;

    &:hover {
        opacity: 0.8;  // Efeito de hover
    }
`
const BotoesCss = styled.div`
    display: flex;
    justify-content: center; 
    gap: 10px; 
    width: 100%;  
    position: absolute;  
    bottom: 10px;  
    left: 0;  
    right: 0; 
`