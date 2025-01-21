import Deck from "./Deck";
import styled from "styled-components";
import logo from "../assets/logo.png"

export default function ZapRecall(props) {
    return (
        <ConteudoCss>
            <Topo >
                <img src={logo} alt="logo"/> <span>ZapRecall</span>
            </Topo >

            <Deck cards={props.cards}/>
        </ConteudoCss>
    )

}

const ConteudoCss = styled.div`
    margin: 40px auto;
    display: flex;
    flex-direction: column; 
    max-width: 450px;
    align-items: center;
    justify-content: center;
    margin-bottom: 70px;
`

const Topo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Righteous", serif;
    font-weight: 400;
    font-size: 36px;
    color: white;
    margin-bottom: 51px;
    img{
        width: 52px;
        height: 60px;
    }
`