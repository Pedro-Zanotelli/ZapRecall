import { useState } from "react";
import Carta from "./Carta";
import styled from "styled-components";
useState

export default function Deck({cards}) {
    const [concluidos, setConcluidos] = useState(0);

    function adicionarConcluidos() {
        setConcluidos((concluidosAtuais) => concluidosAtuais + 1);
      }
    return (
        <>
            {cards.map((card, i) => (
                <Carta 
                    key={i} 
                    card={card}
                    numPergunta={`Pergunta ${i + 1}`}
                    adicionarConcluidos={adicionarConcluidos}
                />
            ))}

            <ContadorCss>
                <p>{`${concluidos}/${cards.length} Concluídos`}</p>
            </ContadorCss>
        </>
    );
}

const ContadorCss = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background-color: white;
    font-family: "Recursive", serif;
    font-weight: 400;
    font-size: 18px;
`
